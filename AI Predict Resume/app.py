# %%
import os
import uvicorn
from fastapi import FastAPI
import numpy as np
from tensorflow import keras
import pickle
import re
from nltk.tokenize import word_tokenize
from tensorflow.keras.preprocessing.sequence import pad_sequences
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import keras 
import pandas as pd
import nltk
nltk.download('wordnet')
nltk.download('omw-1.4')
from nltk.corpus import stopwords
import pickle


# Ignore noise warning
import warnings
warnings.filterwarnings("ignore")

# %%
app = FastAPI()
# Load model trained
filterCV = keras.models.load_model('models_P')
# create global parameter
gist_file = open("./stopword.txt", "r")
try:
    content = gist_file.read()
    stopwords_set = content.split(",")
finally:
    gist_file.close()
stopwords_set = set(stopwords_set)
max_length = 800
trunc_type = 'post'
pad_type = 'post'
# load feature_tokenizer to transfer data to number array
feature_tokenizer_in = open("feature_tokenizer.pickle", "rb")
feature_tokenizer = pickle.load(feature_tokenizer_in)

# Load the lable
encoding_to_label_in = open("dictionary.pickle", "rb")
encoding_to_label = pickle.load(encoding_to_label_in)

class predictBody(BaseModel):
    resume: str
    skill: str
class predictP(BaseModel):
    mess: str

def transformation(data: str):
    clean_data = clean_text(data)
    data_sequence = feature_tokenizer.texts_to_sequences([clean_data])
    data_padded = pad_sequences(
        data_sequence, maxlen=max_length, padding=pad_type, truncating=trunc_type)
    return np.array(data_padded)


@app.post('/predict')
def predict_cv(predictBody: predictBody):
    print(predictBody)
    resume_padded = transformation(predictBody.resume)
    skill_padded = transformation(predictBody.skill)

    # predict
    prediction = filterCV.predict((resume_padded, skill_padded))

    # Get top 5 highest %
    indices = np.argpartition(prediction[0], -5)[-5:]
    indices = indices[np.argsort(prediction[0][indices])]
    indices = list(reversed(indices))


    # Concat data to return
    result_data = []
    for index in indices:
        result_data.append({str(encoding_to_label[index]): str(
            round(prediction[0][index]*100, 2)) + "% "})

    return JSONResponse(content=jsonable_encoder({"results": result_data}))


@app.get('')
def get_home():
    return {'message': 'Wellcome'}


def clean_text(resume_text):
    try:
        resume_text = re.sub('http\S+\s*', ' ', resume_text)
        resume_text = re.sub('RT|cc', ' ', resume_text)
        resume_text = re.sub('#\S+', '', resume_text)
        resume_text = re.sub('@\S+', '  ', resume_text)
        resume_text = re.sub('[%s]' % re.escape(
            """!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"""), ' ', resume_text)
        resume_text = re.sub(r'[^\x00-\x7f]', r' ', resume_text)
        resume_text = re.sub('\s+', ' ', resume_text)
        resume_text = resume_text.lower()
        resume_text_tokens = word_tokenize(resume_text)
        filtered_text = [
            w for w in resume_text_tokens if not w in stopwords_set]
        return ' '.join(filtered_text)
    except:
        return ''
@app.post('predict_personality')
def predict_personality(predictP: predictP):
    mydata = pd.DataFrame(data={'type': [''], 'posts': [predictP.mess]})
    my_posts, dummy = pre_process_text(mydata, remove_stop_words=True, remove_mbti_profiles=True)
    my_X_cnt = cntizer.transform(my_posts)
    my_X_tfidf =  tfizer.transform(my_X_cnt).toarray()
    filename = 'models_personality/models_personality_'
    result_data = []
    for l in range(len(personality_type)):
        Y = list_personality[:,l]
        # make predictions for my  data
        model = pickle.load(open(filename + str(l) +'.pickle', 'rb'))
        prediction = model.predict(my_X_tfidf)
        result_data.append(prediction[0])
    return JSONResponse(content=jsonable_encoder({"results": result_data}))

# Splitting the MBTI personality into 4 letters and binarizing it
b_Pers = {'I':0, 'E':1, 'N':0, 'S':1, 'F':0, 'T':1, 'J':0, 'P':1}
b_Pers_list = [{0:'I', 1:'E'}, {0:'N', 1:'S'}, {0:'F', 1:'T'}, {0:'J', 1:'P'}]
personality_type = [ "IE: Introversion (I) / Extroversion (E)", "NS: Intuition (N) / Sensing (S)", 
                   "FT: Feeling (F) / Thinking (T)", "JP: Judging (J) / Perceiving (P)"  ]
def translate_personality(personality):
    # transform mbti to binary vector
    return [b_Pers[l] for l in personality]

#To show result output for personality prediction
def translate_back(personality):
    # transform binary vector to mbti personality
    s = ""
    for i, l in enumerate(personality):
        s += b_Pers_list[i][l]
    return s

list_personality_bin = np.array([translate_personality(p) for p in data.type])
print("Binarize MBTI list: \n%s" % list_personality_bin)

def pre_process_text(data, remove_stop_words=True, remove_mbti_profiles=True):
  list_personality = []
  list_posts = []
  len_data = len(data)
  i=0
  
  for row in data.iterrows():
      #Remove and clean comments
      posts = row[1].posts

      #Remove url links 
      temp = re.sub('http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|(?:%[0-9a-fA-F][0-9a-fA-F]))+', ' ', posts)

      #Remove Non-words - keep only words
      temp = re.sub("[^a-zA-Z]", " ", temp)

      # Remove spaces > 1
      temp = re.sub(' +', ' ', temp).lower()

      #Remove multiple letter repeating words
      temp = re.sub(r'([a-z])\1{2,}[\s|\w]*', '', temp)

      #Remove stop words
      if remove_stop_words:
          temp = " ".join([lemmatiser.lemmatize(w) for w in temp.split(' ') if w not in useless_words])
      else:
          temp = " ".join([lemmatiser.lemmatize(w) for w in temp.split(' ')])
          
      #Remove MBTI personality words from posts
      if remove_mbti_profiles:
          for t in unique_type_list:
              temp = temp.replace(t,"")

      # transform mbti to binary vector
      type_labelized = translate_personality(row[1].type) #or use lab_encoder.transform([row[1].type])[0]
      list_personality.append(type_labelized)
      # the cleaned data temp is passed here
      list_posts.append(temp)

  # returns the result
  list_posts = np.array(list_posts)
  list_personality = np.array(list_personality)
  return list_posts, list_personality

if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=int(os.environ.get("PORT", 5000)))

# %%
