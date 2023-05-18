import { Link, Outlet } from "react-router-dom";
import "../css/account-setting.css";
import accountIcon from "../../assets/icons/account-icon.png";
import changePasswordIcon from "../../assets/icons/change-password-icon.png";
import checkIcon from "../../assets/icons/check-icon.png";
import addPostIcon from "../../assets/icons/add-post-icon.png";
import applyIcon from "../../assets/icons/apply-icon.png";
import TopBar from "../../components/global/TopBar";
import Footer from "../../components/global/Footer";
import checkServiceIcon from "../../assets/icons/check-service-icon.png";
import historyIcon from "../../assets/icons/history-icon.png";
import viewProfileIcon from "../../assets/icons/view-profile-icon.png";
import jobPostingIcon from "../../assets/icons/list-post-icon.png";
import chartIcon from "../../assets/icons/chart-icon.png";
import supportIcon from "../../assets/icons/support-icon.png";

const EmployerAccount = () => {
  const activeClick = (id) => {
    const el = document.getElementById(id);
    if (!el.classList.contains("actived")) el.classList.add("actived");
    else {
      el.classList.remove("actived");
    }
  };
  return (
    <>
      <TopBar />
      <div className="content-wrapper">
        <div className="navbar-vertical">
          <div
            className="label"
            id="label_0"
            onClick={() => activeClick("label_0")}
          >
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
            Overview
          </div>
          <ul className="nav-item disabled">
            <li>
              <Link className="nav-text" to="recruitment-statistics">
                <img src={chartIcon} alt="" className="nav-icon" />
                Recruitment statistics
              </Link>
            </li>
            <li>
              <Link className="nav-text" to="cus-service">
                <img src={supportIcon} alt="" className="nav-icon"></img>
                Customer service
              </Link>
            </li>
          </ul>

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
              <Link className="nav-text" to="employer-info">
                <img src={accountIcon} alt="" className="nav-icon" />
                Your account
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
            Posts management
          </div>
          <ul className="nav-item">
            <li>
              <Link className="nav-text" to="add-post">
                <img src={addPostIcon} alt="" className="nav-icon"></img>
                Create Post
              </Link>
            </li>
            <li>
              <Link className="nav-text" to="job-posting">
                <img src={jobPostingIcon} alt="" className="nav-icon"></img>
                Your job posting
              </Link>
            </li>
          </ul>
          <div
            className="label"
            id="label_3"
            onClick={() => activeClick("label_3")}
          >
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
            Candidate management
          </div>
          <ul className="nav-item">
            <li>
              <Link className="nav-text" to="post-submitted">
                <img src={applyIcon} alt="" className="nav-icon"></img>
                Candidate profile
              </Link>
            </li>
            <li>
              <Link className="nav-text" to="post-followed">
                <img src={viewProfileIcon} alt="" className="nav-icon"></img>
                Looking for Candidates
              </Link>
            </li>
          </ul>
          <div
            className="label"
            id="label_4"
            onClick={() => activeClick("label_4")}
          >
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
            Services management
          </div>
          <ul className="nav-item">
            <li>
              <Link className="nav-text" to="resume-viewer">
                <img src={historyIcon} alt="" className="nav-icon"></img>
                Purchase history
              </Link>
            </li>
            <li>
              <Link className="nav-text" to="recruiter-followed">
                <img src={checkServiceIcon} alt="" className="nav-icon"></img>
                Current Service
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="free-space" id="free-space"></div> */}

        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default EmployerAccount;
