import Paging from "./PagingComponent";
import SinglePost from "./SinglePostComponent";

const PredictJob = () => {
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
              <select className="select-resume" name="" id="">
                <option>Resume 1</option>
                <option>Resume 2</option>
                <option>Resume 3</option>
              </select>
              <div className="group-buttons">
                <div className="button">
                  <i className="fa fa-list" aria-hidden="true"></i>
                  Predict
                </div>
              </div>
            </div>
          </div>
          <div className="predict-result">
            <div className="single-result">
              <div className="pipe">
                <div className="value"></div>
              </div>
              <div className="value-text">66%</div>
            </div>
            <div className="single-result">
              <div className="pipe">
                <div className="value"></div>
              </div>
              <div className="value-text">66%</div>
            </div>
            <div className="single-result">
              <div className="pipe">
                <div className="value"></div>
              </div>
              <div className="value-text">66%</div>
            </div>
            <div className="single-result">
              <div className="pipe">
                <div className="value"></div>
              </div>
              <div className="value-text">66%</div>
            </div>
            <div className="single-result">
              <div className="pipe">
                <div className="value"></div>
              </div>
              <div className="value-text">66%</div>
            </div>
          </div>
          <SinglePost />

          <Paging />
        </div>
      </div>
    </div>
  );
};

export default PredictJob;
