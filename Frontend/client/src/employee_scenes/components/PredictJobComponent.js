import Paging from "./PagingComponent";
import SinglePost from "./SinglePostComponent";
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useToast } from '../../contexts/Toast';

const PredictJob = () => {

  const { getResume, predictResume, } = useContext(AuthContext)
  const { warn, success } = useToast();

  const [allResume, setAllResume] = useState([])
  const [currentResumeId, setCurrentResumeId] = useState(-1)
  const [resumePre, SetResumePredict] = useState([])
  const [listPostPre, setListPostPre] = useState([])
  const [listIndustryPre, setlistIndustryPre] = useState([])

  const predictCV = async (cvId) => {
    const res = await predictResume(cvId)
    if (res.success) {
      SetResumePredict(res.predictResult)
      setListPostPre(res.data);
      setlistIndustryPre(Object.keys(res.predictResult))
    }
    else warn(res.message)
  }

  const getAllResume = async () => {
    const res = await getResume()
    if (res.success) {
      setAllResume(res.data);
      if(res.data.length!==0)setCurrentResumeId(res.data[0].mediaId)
    }
  }

  useEffect(() => {
    getAllResume()
  }, [])

  const onChangeSelectResume = (event) => {
    setCurrentResumeId(event.target.value)
  }

  const predictClick = ()=>{
    predictCV(currentResumeId)
  }


  return (
    <div style={{ width: "80%" }}>
      <div className="component-title">
        <span>Predict Job</span>
      </div>
      <div className="free-space" id="free-space">
        <div className="content-wrapper">
          <div className="select">
            <div className="label">Resume</div>
            <div className="row-flex">
              <select className="select-resume"
                defaultValue="-1" name="" id=""
                style={{ padding: "16px" }}
                onChange={onChangeSelectResume}>
                {allResume.length === 0 ?
                  (<option value="-1">You have not uploaded any profile yet</option>)
                  : (allResume.map((r, id) => (<option value={r.mediaId} key={id}>{r.name}</option>)))}

              </select>
              <div className="group-buttons">
                <div className="button" onClick={predictClick}>
                  <i className="fa fa-list" aria-hidden="true"></i>
                  Predict
                </div>
              </div>
            </div>
          </div>

          <div className="predict-result">
            {listIndustryPre.length === 0 ? (
              <div className="single-result" style={{ width: "99%", justifyContent:"space-between" }}>
                <div className="value-text">You need to select a profile to be able to choose to see the predictions</div>
                {allResume.length===0?(<a className="link-to-upload-nohave" href="/user/account/add-resume" style={{textDecoration:'none', color:"#0c62ad"}}>UpLoad Now</a>):("")}
              </div>) : (listIndustryPre.map((r,id) => (
                <div className="single-result" style={{ width: "32%" }} key={id}>
                  <div className="pipe">
                    <div className="value text-in-value-bar" style={{ width: `${resumePre[r]}` }}>{r}</div>
                  </div>
                  <div className="value-text">{resumePre[r]}</div>
                </div>)
              ))
            }


          </div>
          <SinglePost />

          <Paging />
        </div>
      </div>
    </div>
  );
};

export default PredictJob;
