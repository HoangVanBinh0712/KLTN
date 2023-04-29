import Paging from "./PagingComponent";
import SinglePost from "./SinglePostComponent";

const PostFollowed = () => {
  return (
    <div style={{ width: "80%" }}>
      <div className="component-title">
        <span>Post followed</span>
      </div>
      <div className="free-space" id="free-space">
        <div className="content-wrapper">
          <SinglePost />
          <Paging />
        </div>
      </div>
    </div>
  );
};

export default PostFollowed;
