import Paging from "./PagingComponent";
import SingleUser from "./SingleUserComponent";

const RecruiterFollowed = () => {
  return (
    <div style={{ width: "80%" }}>
      <div className="component-title">
        <span>Recruiter followed</span>
      </div>
      <div className="free-space" id="free-space">
        <div className="content-wrapper">
          <SingleUser />
          <SingleUser />
          <Paging />
        </div>
      </div>
    </div>
  );
};

export default RecruiterFollowed;
