import Paging from "./PagingComponent";
import SinglePost from "./SinglePostComponent";

const PostFollowed = () => {
  return (
    <div class="free-space" id="free-space">
      <h1> Post followed</h1>
      <div class="content-wrapper">
        <SinglePost />
        <Paging />
      </div>
    </div>
  );
};

export default PostFollowed;
