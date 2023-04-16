import cameraIcon from "../../assets/picture-banner/camera.png";

const UserAchievement = () => {
  return (
    <>
      <div className="free-space" id="free-space">
        <h1>Achievement</h1>
        <div className="content-wrapper">
          <div className="image-wrapper">
            <img src={cameraIcon} alt="" className="big-icon"></img>
            <div className="uploads">
              <div className="button">
                <i className="fa fa-upload" aria-hidden="true"></i>
                Upload image
              </div>
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="input-wrapper">
            <div className="label">Name</div>
            <input type="text" placeholder="Achievement name"></input>
          </div>
          <div className="row">
            <div className="select">
              <div className="label">Type</div>
              <select name="" id="">
                <option value="ACTIVITY">Activity</option>
                <option value="CERTIFICATE">Certificate</option>
              </select>
            </div>
            <div className="input-wrapper">
              <div className="label">Url</div>
              <input type="text" placeholder="URL to your achievement"></input>
            </div>
          </div>

          <div className="group-buttons">
            <div className="button">
              <i className="fa fa-floppy-o" aria-hidden="true"></i>
              Confirm
            </div>
            <div className="button cancel">
              <i className="fa fa-times" aria-hidden="true"></i>
              Cancel
            </div>

            <div className="button delete">
              <i className="fa fa-trash-o" aria-hidden="true"></i>
              Delete
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserAchievement;
