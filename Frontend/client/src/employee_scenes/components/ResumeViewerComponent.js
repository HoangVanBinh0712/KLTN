import Paging from "./PagingComponent";
import SingleUser from "./SingleUserComponent";

const ResumeViewer = () => {
  return (
    <div className="free-space" id="free-space">
      <h1> Resume viewer</h1>
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
                View
              </div>
            </div>
          </div>
        </div>
        <SingleUser />

        <Paging />
      </div>
    </div>
  );
};

export default ResumeViewer;
