import Paging from "./PagingComponent";
import SinglePost from "./SinglePostComponent";

const PostSubmitted = () => {
  return (
    <div class="free-space" id="free-space">
      <h1> Post submitted</h1>
      <div class="content-wrapper">
        <div class="select">
          <div class="label">Resume</div>
          <div class="row-flex">
            <select class="select-resume">
              <option>Resume 1</option>
              <option>Resume 2</option>
              <option>Resume 3</option>
            </select>
            <div class="group-buttons">
              <div class="button">
                <i class="fa fa-list" aria-hidden="true"></i>
                View
              </div>
            </div>
          </div>
        </div>
        <SinglePost />
        <Paging />
      </div>
    </div>
  );
};

export default PostSubmitted;
