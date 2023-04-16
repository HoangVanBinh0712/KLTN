import Paging from "./PagingComponent";
import SinglePost from "./SinglePostComponent";

const PredictJob = () => {
  return (
    <div class="free-space" id="free-space">
      <h1> Predict Job</h1>
      <div class="content-wrapper">
        <div class="select">
          <div class="label">Resume</div>
          <div class="row-flex">
            <select class="select-resume" name="" id="">
              <option>Resume 1</option>
              <option>Resume 2</option>
              <option>Resume 3</option>
            </select>
            <div class="group-buttons">
              <div class="button">
                <i class="fa fa-list" aria-hidden="true"></i>
                Predict
              </div>
            </div>
          </div>
        </div>
        <div class="predict-result">
          <div class="single-result">
            <div class="pipe">
              <div class="value"></div>
            </div>
            <div class="value-text">66%</div>
          </div>
          <div class="single-result">
            <div class="pipe">
              <div class="value"></div>
            </div>
            <div class="value-text">66%</div>
          </div>
          <div class="single-result">
            <div class="pipe">
              <div class="value"></div>
            </div>
            <div class="value-text">66%</div>
          </div>
          <div class="single-result">
            <div class="pipe">
              <div class="value"></div>
            </div>
            <div class="value-text">66%</div>
          </div>
          <div class="single-result">
            <div class="pipe">
              <div class="value"></div>
            </div>
            <div class="value-text">66%</div>
          </div>
        </div>
        <SinglePost />

        <Paging />
      </div>
    </div>
  );
};

export default PredictJob;
