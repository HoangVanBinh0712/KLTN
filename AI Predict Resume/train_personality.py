#%%Import library
# Data Analysis
import pandas as pd
import numpy as np

# Data Visualization
import matplotlib.pyplot as plt


# Text Processing
import re
import nltk
nltk.download('wordnet')
nltk.download('omw-1.4')
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer

# Machine Learning packages
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfTransformer

# Model training and evaluation
from sklearn.model_selection import train_test_split

#Models
from sklearn.linear_model import LogisticRegression
from sklearn.linear_model import SGDClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC
from sklearn.ensemble import RandomForestClassifier
from xgboost import XGBClassifier
import pickle


#Metrics
from sklearn.metrics import accuracy_score

# Ignore noise warning
import warnings
warnings.filterwarnings("ignore")
#%% Load data
data = pd.read_csv('./dataset/Data_v1/Data_personality/mbti_1.csv', encoding='utf-8')
#%%
data.info()
# %% add columns for personality type indicators
def get_types(row):
    t=row['type']

    I = 0; N = 0
    T = 0; J = 0
    
    if t[0] == 'I': I = 1
    elif t[0] == 'E': I = 0
    else: print('I-E not found') 
        
    if t[1] == 'N': N = 1
    elif t[1] == 'S': N = 0
    else: print('N-S not found')
        
    if t[2] == 'T': T = 1
    elif t[2] == 'F': T = 0
    else: print('T-F not found')
        
    if t[3] == 'J': J = 1
    elif t[3] == 'P': J = 0
    else: print('J-P not found')
    return pd.Series( {'IE':I, 'NS':N , 'TF': T, 'JP': J }) 

data = data.join(data.apply (lambda row: get_types (row),axis=1))
data.head(5)

# %% No. of posts in one class / Total no. of posts in the other class
print ("Introversion (I) /  Extroversion (E):\t", data['IE'].value_counts()[0], " / ", data['IE'].value_counts()[1])
print ("Intuition (N) / Sensing (S):\t\t", data['NS'].value_counts()[0], " / ", data['NS'].value_counts()[1])
print ("Thinking (T) / Feeling (F):\t\t", data['TF'].value_counts()[0], " / ", data['TF'].value_counts()[1])
print ("Judging (J) / Perceiving (P):\t\t", data['JP'].value_counts()[0], " / ", data['JP'].value_counts()[1])

# %%
#Plotting the distribution of each personality type indicator
N = 4
bottom = (data['IE'].value_counts()[0], data['NS'].value_counts()[0], data['TF'].value_counts()[0], data['JP'].value_counts()[0])
top = (data['IE'].value_counts()[1], data['NS'].value_counts()[1], data['TF'].value_counts()[1], data['JP'].value_counts()[1])

ind = np.arange(N)    # the x locations for the groups
# the width of the bars
width = 0.7           # or len(x) can also be used here

p1 = plt.bar(ind, bottom, width, label="I, N, T, F")
p2 = plt.bar(ind, top, width, bottom=bottom, label="E, S, F, P") 

plt.title('Distribution accoss types indicators')
plt.ylabel('Count')
plt.xticks(ind, ('I / E',  'N / S', 'T / F', 'J / P',))
plt.legend()

plt.show()
# %% Features Correlation Analysis
data[['IE','NS','TF','JP']].corr()
# %% Pre-Processing Stage
lemmatiser = WordNetLemmatizer()

# Remove the stop words for speed 
useless_words = stopwords.words("english")

# Remove these from the posts
unique_type_list = ['INFJ', 'ENTP', 'INTP', 'INTJ', 'ENTJ', 'ENFJ', 'INFP', 'ENFP',
       'ISFP', 'ISTP', 'ISFJ', 'ISTJ', 'ESTP', 'ESFP', 'ESTJ', 'ESFJ']
unique_type_list = [x.lower() for x in unique_type_list]

# %%
# Splitting the MBTI personality into 4 letters and binarizing it
b_Pers = {'I':0, 'E':1, 'N':0, 'S':1, 'F':0, 'T':1, 'J':0, 'P':1}
b_Pers_list = [{0:'I', 1:'E'}, {0:'N', 1:'S'}, {0:'F', 1:'T'}, {0:'J', 1:'P'}]

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
# %% Cleaning of data in the posts
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

list_posts, list_personality  = pre_process_text(data, remove_stop_words=True, remove_mbti_profiles=True)

print("Example :")
print("\nPost before preprocessing:\n\n", data.posts[0])
print("\nPost after preprocessing:\n\n", list_posts[0])
print("\nMBTI before preprocessing:\n\n", data.type[0])
print("\nMBTI after preprocessing:\n\n", list_personality[0])

# %%
nRow, nCol = list_personality.shape
print(f'No. of posts = {nRow}  and No. of Personalities = {nCol} ')
# %%
# Vectorizing the database posts to a matrix of token counts for the model
cntizer = CountVectorizer(analyzer="word", 
                             max_features=1000,  
                             max_df=0.7,
                             min_df=0.1) 
# the feature should be made of word n-gram 
# Learn the vocabulary dictionary and return term-document matrix
print("Using CountVectorizer :")
X_cnt = cntizer.fit_transform(list_posts)

#The enumerate object yields pairs containing a count and a value (useful for obtaining an indexed list)
feature_names = list(enumerate(cntizer.get_feature_names()))
print("10 feature names can be seen below")
print(feature_names[0:10])

# For the Standardization or Feature Scaling Stage :-
# Transform the count matrix to a normalized tf or tf-idf representation
tfizer = TfidfTransformer()

# Learn the idf vector (fit) and transform a count matrix to a tf-idf representation
print("\nUsing Tf-idf :")

print("Now the dataset size is as below")
X_tfidf =  tfizer.fit_transform(X_cnt).toarray()
print(X_tfidf.shape)
# %%
personality_type = [ "IE: Introversion (I) / Extroversion (E)", "NS: Intuition (N) / Sensing (S)", 
                   "FT: Feeling (F) / Thinking (T)", "JP: Judging (J) / Perceiving (P)"  ]

for l in range(len(personality_type)):
    print(personality_type[l])
# %%
print("X: 1st posts in tf-idf representation\n%s" % X_tfidf[0])
# %%
print("For MBTI personality type : %s" % translate_back(list_personality[0,:]))
#%%
print("Y : Binarized MBTI 1st row: %s" % list_personality[0,:])


# %% Training & Evaluating Models
# Posts in tf-idf representation
X = X_tfidf

# %%
#Random Forest model for MBTI dataset
# Individually training each mbti personlity type
for l in range(len(personality_type)):
    
    Y = list_personality[:,l]

    # split data into train and test sets
    X_train, X_test, y_train, y_test = train_test_split(X, Y, test_size=0.33, random_state=7)

    # fit model on training data
    model = RandomForestClassifier()
    model.fit(X_train, y_train)

    # make predictions for test data
    y_pred = model.predict(X_test)
    
    predictions = [round(value) for value in y_pred]
    # evaluate predictions
    accuracy = accuracy_score(y_test, predictions)
    
    print("%s Accuracy: %.2f%%" % (personality_type[l], accuracy * 100.0))
# %%
#XGBoost model for MBTI dataset 
# Individually training each mbti personlity type
for l in range(len(personality_type)):
    
    Y = list_personality[:,l]

    # split data into train and test sets
    X_train, X_test, y_train, y_test = train_test_split(X, Y, test_size=0.33, random_state=7)

    # fit model on training data
    model = XGBClassifier()
    model.fit(X_train, y_train)

    # make predictions for test data
    y_pred = model.predict(X_test)
    predictions = [round(value) for value in y_pred]
    # evaluate predictions
    accuracy = accuracy_score(y_test, predictions)
    
    print("%s Accuracy: %.2f%%" % (personality_type[l], accuracy * 100.0))
# %%
# Stocastic Gradient Descent for MBTI dataset
# Individually training each mbti personlity type
for l in range(len(personality_type)):

    Y = list_personality[:,l]

    # split data into train and test sets
    X_train, X_test, y_train, y_test = train_test_split(X, Y, test_size=0.33, random_state=7)

    # fit model on training data
    model = SGDClassifier() 
    model.fit(X_train, y_train)

    # make predictions for test data
    y_pred = model.predict(X_test)
    
    predictions = [round(value) for value in y_pred]
    # evaluate predictions
    accuracy = accuracy_score(y_test, predictions)
    
    print("%s Accuracy: %.2f%%" % (personality_type[l], accuracy * 100.0))
# %%
# # Logistic Regression for MBTI dataset
# Individually training each mbti personlity type
for l in range(len(personality_type)):

    Y = list_personality[:,l]

    # split data into train and test sets
    X_train, X_test, y_train, y_test = train_test_split(X, Y, test_size=0.33, random_state=7)

    # fit model on training data
    model = LogisticRegression() 
    model.fit(X_train, y_train)

    # make predictions for test data
    y_pred = model.predict(X_test)
    
    predictions = [round(value) for value in y_pred]
    # evaluate predictions
    accuracy = accuracy_score(y_test, predictions)
    
    print("%s Accuracy: %.2f%%" % (personality_type[l], accuracy * 100.0))

# %%
# #2 KNN model for MBTI dataset
# Individually training each mbti personlity type
for l in range(len(personality_type)):

    Y = list_personality[:,l]

    # split data into train and test sets
    X_train, X_test, y_train, y_test = train_test_split(X, Y, test_size=0.33, random_state=7)

    # fit model on training data
    model = KNeighborsClassifier(n_neighbors = 2)  # n_neighbors means k
    model.fit(X_train, y_train)

    # make predictions for test data
    y_pred = model.predict(X_test)
    
    predictions = [round(value) for value in y_pred]
    # evaluate predictions
    accuracy = accuracy_score(y_test, predictions)
   
    print("%s Accuracy: %.2f%%" % (personality_type[l], accuracy * 100.0))

# %%
# # SVM model for MBTI dataset
for l in range(len(personality_type)):
    
    Y = list_personality[:,l]

    # split data into train and test sets
    X_train, X_test, y_train, y_test = train_test_split(X, Y, test_size=0.33, random_state=7)

    # fit model on training data
    model_p = SVC(random_state = 1)
    model_p.fit(X_train, y_train)
    # result.append(y_pred[0])
    # pickle.dump(model_p, open(filename + str(l) +'.pickle', 'wb'))
    # make predictions for test data
    y_pred = model_p.predict(X_test)
# print(translate_back(result))
    predictions = [round(value) for value in y_pred]
    # evaluate predictions
    accuracy = accuracy_score(y_test, predictions)
    
    print("%s Accuracy: %.2f%%" % (personality_type[l], accuracy * 100.0))



#%%
# Individually training each mbti personlity type
my_posts = """I seriously relate to this struggle. It was one of my biggest hurdles to get over when it came to appreciating sensors.|||Has anyone played these games? They're fantastic! If anyone here is really into meta and psychology, these are super meta. Seriously. I have never gotten so invested in game theories in my life. ...|||.|||Oh haha yeah, wouldn't that be a little bit too general to say all men get tongue tied? I mean, looks are DEFINITELY not everything. You've just hit on something I'm really interested in actually,...|||So, I feel like before posting in here I should also share an obligatory photo. I've already posted this elsewhere on this forum, but I don't really have other good pictures cause I never take them...|||I think Mick is trying to say he's attracted to you haha! :chuncky:|||They're two of my favorites! :)|||I just think Hey, I don't necessarily have to feel this way, and I think about other things. I basically just think until something strikes me, and I have an arsenal of automatic thought provoking...|||I wonder when someone might actually win this|||Then you want Te :)|||If I could have any 1 cognitive function as strong as my dominant function it would be Ti. I've noticed that it is probably the most generically useful function, because it provides so much...|||Haha I guess I'll take what I can get :chuncky: Good luck with that enthusiastic blonde lady :cool:|||awww! :cheerful:|||My younger brother is my best friend, and we get along so incredibly well. I was never really sure what type he was and I didn't care because we got along so well and had sort of a unique...|||My last relationship was an ESFJ! The main reason it didn't work though is because she had an incredibly difficult time relating to my thought processes, and it caused a lot of tension and...|||That would most likely fall under the ENxP category :) although drama is much more dependent on the individual.|||Power is as power does :wink:|||NewMango & JayShambles  So this quickly took an unexpected turn hahaha :laughing: but thanks for the input|||Are ENFPs allowed? :) I saw an Australian Shepherd in an article and it was SO CUTE!!! But the article was really sad because it was a service dog and some guy pet it even when it's owner told him...|||I want to date an ENFP. I need someone who can offer me enough outside stimulation in the right way. And I need someone who is able to empathize with me as easily as possible. I don't need someone...|||I feel like this is the most accurate description of how I relate to being an ENFP I've ever seen. And it's not even meant to be a description lol|||Well in my generalized experience, I would make the exact same general observation :proud:|||Good to have you back :) I'm a little bit new here, and not particularly active, but sometimes I just have things I want to say.|||Haha it was just a pretty lame joke on my part xD  But that is really cool! :crazy: I feel like you all would find this video very informative.   https://www.youtube.com/watch?v=lMj-iyAoh30|||The origin of dubstep|||Yo! It totally makes sense that Fe could make someone really cynical if they're surrounded by the wrong people.|||Hmmm. That's really interesting that the top two are INFP and ENFP as opposed to one whose functions would compliment an INFP's functions. I can definitely see why though. Because an INFP with the...|||YES! XD haha! So much yes|||It's interesting that you brought this up actually, because that's an important observation.  I'm going to go on more of a feelings tangent here, but I don't think that's just a correlation. I...|||I have a love hate relationship with online communities. I get along much better in real life than online because I'm better at saying  and expressing my thoughts than writing them down. Unless I put...|||I made a post kind of like this but I like yours more. Mine was worded in a way that brought out some really angry people. I wanted to edit it to make it more like this, but I didn't realize it was...|||I agree. And I've seen it the other way as well, where an intuitive mistypes as a sensor for similar reasons. Honestly it goes both ways pretty evenly.|||Read my posts throughout this thread and you will understand my point of view. The original post was intended to express an idea that I wanted to have expanded upon. Also, when I noticed that I made...|||Well, it is a very subjective experience, so what are the most important traits to you?|||Yes! You're doing it for the love! :glee:|||I guess you could just go ahead and check all of the boxes lol :tongue:|||Totally stealing this from the INFP forum ;P But I want to know. Who do think ENFPs should date?  I am typically along the lines of 'it doesn't matter as long as they fulfill each others needs'....|||I would do skype but, I don't make a very good online friend :P I'm better at being a friend in person.  Also I'm an ENFP so I'm intruding here xD|||I would say ENFJ from real life experience. Not just cause of functions. But their Fe compliments Fi VERY well. My brother is an ENFJ and his two best friends INFPs and he knew exactly how to make...|||Actually I specifically stated that I think sensing types are not intellectually stupid, and yes, they most often surpass intuitives on practical and real world matters    And for a bit of...|||Oh! Haha this has been a very serious post so my mind was not in the right place xD I see it now|||I can't imagine why I would get temp-banned (o.O) I'm not trying to shut down conversation or be argumentative. Actually I feel like your post was a good analysis of what I was saying and generally...|||This is the general conclusion that I, and most others are at. This isn't intended to be a prejudiced post, and if you read through my replies on this thread, I am in a general agreement with what...|||This is ACCURATE ^^^|||Hahaha yes! That's one of the worst! xD|||This is a very good analysis of the specific things that also bother me when it comes to the details of it. And it's a good thing to acknowledge that it's only the sensors in your life. I'm sure that...|||That's very true, and in fact there is an ISTJ who's company I enjoy very much. Although, I am not talking about factual intelligence. I'm only talking about the method of coming to conclusions. I...|||Thank you! I feel like you really understand what's going on in my mind.|||Hey, I think you just explained my exact world views word for word. Although you enunciated yourself much better than I might have if I tried to explain it.|||It totally makes sense. And, when an introverted type is in public, they usually use their second function as their front so it's normal for an introvert to come across as their extroverted..."""
# The type is just a dummy so that the data prep function can be reused
mydata = pd.DataFrame(data={'type': [''], 'posts': [my_posts]})
my_posts, dummy = pre_process_text(mydata, remove_stop_words=True, remove_mbti_profiles=True)
my_X_cnt = cntizer.transform(my_posts)
my_X_tfidf =  tfizer.transform(my_X_cnt).toarray()
filename = 'models_personality/models_personality_'
result1=[]
for l in range(len(personality_type)):
    Y = list_personality[:,l]
    # make predictions for my  data
    model = pickle.load(open(filename + str(l) +'.pickle', 'rb'))
    prediction = model.predict(my_X_tfidf)
    result1.append(prediction[0])
print(translate_back(result1))


# %%
