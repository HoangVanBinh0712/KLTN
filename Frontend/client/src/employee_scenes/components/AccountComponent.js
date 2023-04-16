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
  const activeClick = (e) => {
    if (!e.target.classList.contains("actived"))
      e.target.classList.add("actived");
    else {
      e.target.classList.remove("actived");
    }
  };
  return (
    <>
      <div className="header"></div>
      <div className="content-wrapper">
        <div className="navbar-vertical">
          <div className="label" onClick={activeClick}>
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
            Account management
          </div>
          <ul className="nav-item disabled">
            <li>
              <img src={accountIcon} alt="" className="nav-icon"></img>
              <Link className="nav-text" to="personal-info">
                Your account
              </Link>
            </li>
            <li>
              <img src={certificateIcon} alt="" className="nav-icon"></img>
              <Link className="nav-text" to="achievement">
                Achievement
              </Link>
            </li>

            <li>
              <img src={changePasswordIcon} alt="" className="nav-icon"></img>
              <Link className="nav-text" to="change-password">
                Change password
              </Link>
            </li>
            <li>
              <img src={checkIcon} alt="" className="nav-icon"></img>
              <Link className="nav-text" to="verify-email">
                Verify email
              </Link>
            </li>
          </ul>

          <div className="label" onClick={activeClick}>
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
            Records management
          </div>
          <ul className="nav-item">
            <li>
              <img src={addPostIcon} alt="" className="nav-icon"></img>
              <Link className="nav-text" to="add-resume">
                Add new resume
              </Link>
            </li>
            <li>
              <img src={editIcon} alt="" className="nav-icon"></img>
              <Link className="nav-text" to="update-resume">
                Update your resume
              </Link>
            </li>
            <li>
              <img src={cvIcon} alt="" className="nav-icon"></img>
              <Link className="nav-text" to="predict-job">
                Predict job
              </Link>
            </li>
          </ul>
          <div className="label" onClick={activeClick}>
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
            Job management
          </div>
          <ul className="nav-item">
            <li>
              <img src={applyIcon} alt="" className="nav-icon"></img>
              <Link className="nav-text" to="post-submitted">
                Job applied
              </Link>
            </li>
            <li>
              <img src={heartIcon} alt="" className="nav-icon"></img>
              <Link className="nav-text" to="post-followed">
                Saved jobs
              </Link>
            </li>
          </ul>
          <div className="label" onClick={activeClick}>
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
            Your employers
          </div>
          <ul className="nav-item">
            <li>
              <img src={searchIcon} alt="" className="nav-icon"></img>
              <Link className="nav-text" to="resume-viewer">
                Profile viewers
              </Link>
            </li>
            <li>
              <img src={followedIcon} alt="" className="nav-icon"></img>
              <Link className="nav-text" to="recruiter-followed">
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
