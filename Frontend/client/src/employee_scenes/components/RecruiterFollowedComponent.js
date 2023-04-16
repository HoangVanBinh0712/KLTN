import Paging from "./PagingComponent";
import SingleUser from "./SingleUserComponent";

const RecruiterFollowed = () => {
  return (
    <div class="free-space" id="free-space">
      <h1> Recruiter followed</h1>
      <div class="content-wrapper">
        <SingleUser />
        <SingleUser />

        <Paging />
      </div>
    </div>
  );
};

export default RecruiterFollowed;
