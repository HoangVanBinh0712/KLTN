import { Link, Outlet } from "react-router-dom";
import "../css/account-setting.css";
import accountIcon from "../../assets/icons/account-icon.png";
import certificateIcon from "../../assets/icons/certificate-blue-icon.png";
import changePasswordIcon from "../../assets/icons/change-password-icon.png";
import checkIcon from "../../assets/icons/check-icon.png";
import addPostIcon from "../../assets/icons/add-post-icon.png";
import editIcon from "../../assets/icons/edit-icon.png";
import cvIcon from "../../assets/icons/cv-icon.png";
import applyIcon from "../../assets/icons/apply-icon.png";
import heartIcon from "../../assets/icons/heart-icon.png";
import searchIcon from "../../assets/icons/search-employee-icon.png";
import followedIcon from "../../assets/icons/followed-icon.png";

const UserAccount = () => {
  const activeClick = (id) => {
    const el = document.getElementById(id);
    if (!el.classList.contains("actived")) el.classList.add("actived");
    else {
      el.classList.remove("actived");
    }
  };
  return (
    <>
      <div className="header"></div>
      <div className="content-wrapper">
        <div className="navbar-vertical">
          <div
            className="label"
            id="label_1"
            onClick={() => activeClick("label_1")}
          >
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
            Account management
          </div>
          <ul className="nav-item disabled">
            <li>
              <Link className="nav-text" to="personal-info">
                <img src={accountIcon} alt="" className="nav-icon" />
                Your account
              </Link>
            </li>
            <li>
              <Link className="nav-text" to="achievement">
                <img src={certificateIcon} alt="" className="nav-icon" />
                Achievement
              </Link>
            </li>

            <li>
              <Link className="nav-text" to="change-password">
                <img src={changePasswordIcon} alt="" className="nav-icon"></img>
                Change password
              </Link>
            </li>
            <li>
              <Link className="nav-text" to="verify-email">
                <img src={checkIcon} alt="" className="nav-icon"></img>
                Verify email
              </Link>
            </li>
          </ul>

          <div
            className="label"
            id="label_2"
            onClick={() => activeClick("label_2")}
          >
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
            Records management
          </div>
          <ul className="nav-item">
            <li>
              <Link className="nav-text" to="add-resume">
                <img src={addPostIcon} alt="" className="nav-icon"></img>
                Add new resume
              </Link>
            </li>
            <li>
              <Link className="nav-text" to="update-resume">
                <img src={editIcon} alt="" className="nav-icon"></img>
                Update your resume
              </Link>
            </li>
            <li>
              <Link className="nav-text" to="predict-job">
                <img src={cvIcon} alt="" className="nav-icon"></img>
                Predict job
              </Link>
            </li>
          </ul>
          <div
            className="label"
            id="label_3"
            onClick={() => activeClick("label_3")}
          >
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
            Job management
          </div>
          <ul className="nav-item">
            <li>
              <Link className="nav-text" to="post-submitted">
                <img src={applyIcon} alt="" className="nav-icon"></img>
                Job applied
              </Link>
            </li>
            <li>
              <Link className="nav-text" to="post-followed">
                <img src={heartIcon} alt="" className="nav-icon"></img>
                Saved jobs
              </Link>
            </li>
          </ul>
          <div
            className="label"
            id="label_4"
            onClick={() => activeClick("label_4")}
          >
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
            Your employers
          </div>
          <ul className="nav-item">
            <li>
              <Link className="nav-text" to="resume-viewer">
                <img src={searchIcon} alt="" className="nav-icon"></img>
                Profile viewers
              </Link>
            </li>
            <li>
              <Link className="nav-text" to="recruiter-followed">
                <img src={followedIcon} alt="" className="nav-icon"></img>
                Followed
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="free-space" id="free-space"></div> */}
        <Outlet />
      </div>
    </>
  );
};

export default UserAccount;
