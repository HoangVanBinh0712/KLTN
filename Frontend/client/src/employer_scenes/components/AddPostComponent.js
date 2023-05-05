import { useContext, useEffect, useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import logoIcon from "../../assets/picture-banner/logo.png";
import { AuthContext } from "../../contexts/AuthContext";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useToast } from "../../contexts/Toast";

const AddPostComponent = () => {
  const {
    authState: { user },
    getUser,
    updateUserInfo,
  } = useContext(AuthContext);
  const {
    globalState: { cities, industries },
  } = useContext(GlobalContext);
  const { warn, success } = useToast();

  const [userInfo, setUserinfor] = useState({
    email: user !== null ? user.email : "",
    name: user !== null ? user.name : "",
    phone: user !== null ? user.phone : "",
    address: user !== null ? user.address : "",
    cityId: user !== null ? user.city.id : "",
    industryId: user !== null ? user.industry.id : "",
    urlCover: user !== null ? user.urlCover : null,
    urlAvatar: user !== null ? user.urlAvatar : null,
  });
  const {
    email,
    name,
    phone,
    address,
    cityId,
    industryId,
    urlCover,
    urlAvatar,
  } = userInfo;

  const [desc, setDesc] = useState("");
  const handleDescChange = (newValue) => {
    setDesc(newValue);
  };

  const onChangeUserInfo = (event) =>
    setUserinfor({
      ...userInfo,
      [event.target.name]: event.target.value,
    });

  const getUserInfo = async () => {
    const userData = await getUser("user");
    setUserinfor({
      ...userInfo,
      email: userData !== null ? userData.email : "",
      name: userData !== null ? userData.name : "",
      phone: userData !== null ? userData.phone : "",
      address: userData !== null ? userData.address : "",
      cityId: userData !== null ? userData.city.id : "",
      industryId: userData !== null ? userData.industry.id : "",
      urlCover: userData !== null ? userData.urlCover : null,
      urlAvatar: userData !== null ? userData.urlAvatar : null,
    });
    userData !== null ? setDesc(userData.description) : setDesc("");
  };

  const [userImage, setUserImage] = useState({
    avatar: null,
    cover: null,
  });
  const { avatar, cover } = userImage;

  useEffect(() => {
    getUserInfo();
  }, []);

  const fileAvtInput = useRef(null);
  const fileCoverInput = useRef(null);
  const fileToBase64 = (file, cb) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(null, reader.result);
    };
    reader.onerror = function (error) {
      cb(error, null);
    };
  };

  const handleChangeAvtClick = () => {
    fileAvtInput.current.click();
  };
  const handleChoseFileAvt = ({ target }) => {
    if (target.files < 1 || !target.validity.valid) {
      return;
    }
    const file = target.files[0];
    fileToBase64(file, (err, result) => {
      if (result) {
        setUserImage({
          ...userImage,
          avatar: file,
        });
      }
    });
    setUserinfor({
      ...userInfo,
      urlAvatar: URL.createObjectURL(file),
    });
  };

  const handleChangeCoverClick = () => {
    fileCoverInput.current.click();
  };
  const handleChoseFileCover = ({ target }) => {
    if (target.files < 1 || !target.validity.valid) {
      return;
    }
    const file = target.files[0];
    fileToBase64(file, (err, result) => {
      if (result) {
        setUserImage({
          ...userImage,
          cover: file,
        });
      }
    });
    setUserinfor({
      ...userInfo,
      urlCover: URL.createObjectURL(file),
    });
  };

  const onUpdateUserClick = async (event) => {
    try {
      const infoData = { email, name, phone, address, cityId, industryId };
      const reponseData = await updateUserInfo(infoData, avatar, cover);
      console.log(reponseData);
      if (reponseData.success) {
        success("Update information successfully!");
      } else {
        warn(reponseData.message);
      }
    } catch (error) {
      if (error.response.data) {
        return error.response.data;
      } else return { success: false, message: error.message };
    }
  };

  const onCancelClick = () => {
    const confirm = window.confirm(
      "Are you sure you want to cancel, the information you changed will not be saved?"
    );
    if (confirm) {
      getUserInfo();
    }
  };

  let body;
  body = (
    <div style={{ width: "80%" }}>
      <div className="component-title">
        <span>Profile</span>
      </div>
      <div className="free-space" id="free-space">
        <div className="content-wrapper">
          <div className="input-wrapper">
            <div className="label">Title</div>
            <input type="text" name="title" value={email}></input>
          </div>
          <div className="text-area-group">
            <div className="label">Description</div>
            <ReactQuill value={desc} onChange={handleDescChange} style={{}} />
          </div>

          <div className="row">
            <div className="left">
              <div className="text-area-group">
                <div className="label">Description</div>
                <ReactQuill
                  value={desc}
                  onChange={handleDescChange}
                  style={{}}
                />
              </div>
              <b>Working type</b>
              <div className="row">
                <div>
                  <input
                    className="radio"
                    type="radio"
                    id="age1"
                    name="age"
                    value="30"
                  />
                  <label for="age1">Part time</label>
                </div>
                <div>
                  <input
                    className="radio"
                    type="radio"
                    id="age2"
                    name="age"
                    value="60"
                  />
                  <label for="age2">Full time</label>
                </div>
                <div>
                  <input
                    className="radio"
                    type="radio"
                    id="age2"
                    name="age"
                    value="60"
                  />
                  <label for="age2">Intern</label>
                </div>
              </div>
              <b>Gender</b>
              <div className="row">
                <div>
                  <input
                    className="radio"
                    type="radio"
                    id="age1"
                    name="age"
                    value="30"
                  />
                  <label for="age1">Male</label>
                </div>
                <div>
                  <input
                    className="radio"
                    type="radio"
                    id="age2"
                    name="age"
                    value="60"
                  />
                  <label for="age2">Female</label>
                </div>
                <div>
                  <input
                    className="radio"
                    type="radio"
                    id="age2"
                    name="age"
                    value="60"
                  />
                  <label for="age2">No require</label>
                </div>
              </div>
              <b>Currency</b>
              <div className="row">
                <div>
                  <input
                    className="radio"
                    type="radio"
                    id="age1"
                    name="age"
                    value="30"
                  />
                  <label for="age1">VNĐ</label>
                </div>
                <div>
                  <input
                    className="radio"
                    type="radio"
                    id="age2"
                    name="age"
                    value="60"
                  />
                  <label for="age2">USD</label>
                </div>
                <div>
                  <input
                    className="radio"
                    type="radio"
                    id="age2"
                    name="age"
                    value="60"
                  />
                  <label for="age2">Aggreement</label>
                </div>
              </div>
              <div className="input-wrapper">
                <div className="label">Salary</div>
                <input type="text" name="title" value={email}></input>
              </div>
            </div>
            <div className="right">
              <div className="text-area-group">
                <div className="label">Description</div>
                <ReactQuill
                  value={desc}
                  onChange={handleDescChange}
                  style={{}}
                />
              </div>
              <div className="select">
                <div className="label">Position</div>
                <select name="industry" id="">
                  <option value="">Finance</option>
                  <option value="">Banking</option>
                  <option value="">Social Media</option>
                </select>
              </div>
              <div className="select">
                <div className="label">Experience</div>
                <select name="industry" id="">
                  <option value="">Finance</option>
                  <option value="">Banking</option>
                  <option value="">Social Media</option>
                </select>
              </div>
              <div className="input-wrapper">
                <div className="label">Recruit</div>
                <input type="number" name="title" value={email}></input>
              </div>
              <div className="input-wrapper">
                <div className="label">Expiration date</div>
                <input type="date" name="title" value={email}></input>
              </div>
            </div>
          </div>

          <div className="group-buttons">
            <div className="button" onClick={onUpdateUserClick}>
              <i className="fa fa-floppy-o" aria-hidden="true"></i>
              Confirm
            </div>
            <div className="button cancel" onClick={onCancelClick}>
              <i className="fa fa-times" aria-hidden="true"></i>
              Cancel
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return <>{body}</>;
};

export default AddPostComponent;
