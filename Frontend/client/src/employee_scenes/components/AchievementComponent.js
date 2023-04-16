import cameraIcon from "../../assets/picture-banner/camera.png";

const UserAchievement = () => {
  return (
    <>
      <div class="free-space" id="free-space">
        <h1>Achievement</h1>
        <div class="content-wrapper">
          <div class="image-wrapper">
            <img src={cameraIcon} alt="" class="big-icon"></img>
            <div class="uploads">
              <div class="button">
                <i class="fa fa-upload" aria-hidden="true"></i>
                Upload image
              </div>
            </div>
          </div>
        </div>
        <div class="content-wrapper">
          <div class="input-wrapper">
            <div class="label">Name</div>
            <input type="text" placeholder="Achievement name"></input>
          </div>
          <div class="row">
            <div class="select">
              <div class="label">Type</div>
              <select name="" id="">
                <option value="ACTIVITY">Activity</option>
                <option value="CERTIFICATE">Certificate</option>
              </select>
            </div>
            <div class="input-wrapper">
              <div class="label">Url</div>
              <input type="text" placeholder="URL to your achievement"></input>
            </div>
          </div>

          <div class="group-buttons">
            <div class="button">
              <i class="fa fa-floppy-o" aria-hidden="true"></i>
              Confirm
            </div>
            <div class="button cancel">
              <i class="fa fa-times" aria-hidden="true"></i>
              Cancel
            </div>

            <div class="button delete">
              <i class="fa fa-trash-o" aria-hidden="true"></i>
              Delete
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserAchievement;
