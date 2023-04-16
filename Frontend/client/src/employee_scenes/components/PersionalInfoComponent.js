import logoIcon from "../../assets/picture-banner/logo.png";

const UserPersonalInfo = () => {
  return (
    <>
      <div className="free-space" id="free-space">
        <h1>Profile</h1>
        <div className="cover-and-avatar">
          <div className="cover">
            <div className="button btn-cover">
              <i className="fa fa-upload" aria-hidden="true"></i>
              Upload image
            </div>
          </div>
          <div className="avatar-wrapper">
            <div className="avatar">
              <h3>Avatar</h3>
              <img src={logoIcon} alt=""></img>
            </div>
            <div className="uploads">
              <div className="button">
                <i className="fa fa-upload" aria-hidden="true"></i>
                Upload image
              </div>
              <div className="description">
                Format for .JPG, .JPEG, .PNG and size is not bigger than 300 KB.
              </div>
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="row">
            <div className="input-wrapper">
              <div className="label">Email</div>
              <input type="email"></input>
            </div>
            <div className="input-wrapper">
              <div className="label">Name</div>
              <input type="text"></input>
            </div>
          </div>
          <div className="row">
            <div className="input-wrapper">
              <div className="label">Phone</div>
              <input type="number"></input>
            </div>
            <div className="input-wrapper">
              <div className="label">Address</div>
              <input type="text"></input>
            </div>
          </div>
          <div className="text-area-group">
            <div className="label">Description</div>
            <textarea></textarea>
          </div>
          <div className="double-select">
            <div className="select">
              <div className="label">Location</div>
              <select name="" id="">
                <option value="">Tp Hồ Chí Minh</option>
                <option value="">Đà Nẵng</option>
                <option value="">Hà Nội</option>
              </select>
            </div>
            <div className="select">
              <div className="label">Industry</div>
              <select name="" id="">
                <option value="">Finance</option>
                <option value="">Banking</option>
                <option value="">Social Media</option>
              </select>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPersonalInfo;
