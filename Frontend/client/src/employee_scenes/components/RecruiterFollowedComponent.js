import Paging from "./PagingComponent";
import SingleUser from "./SingleUserComponent";

const RecruiterFollowed = () => {
  return (
    <div className="free-space" id="free-space">
      <h1> Recruiter followed</h1>
      <div className="content-wrapper">
        <SingleUser />
        <SingleUser />

        <Paging />
      </div>
    </div>
  );
};

export default RecruiterFollowed;
