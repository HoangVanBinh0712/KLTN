import { useContext } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import PageNotFound from "../components/page/notfound/PageNotFound";
import EmployeeAccountPage from "../employee_scenes/EmployeeAccountPage";
import PersonalInfoComponent from "../employee_scenes/components/PersionalInfoComponent";
import UserAchievement from "../employee_scenes/components/AchievementComponent";
import AddResume from "../employee_scenes/components/AddResumeComponent";
import ChangePassword from "../employee_scenes/components/ChangePasswordComponent";
import PostFollowed from "../employee_scenes/components/PostFollowedComponent";
import PostSubmitted from "../employee_scenes/components/PostSubmittedComponent";
import PredictJob from "../employee_scenes/components/PredictJobComponent";
import RecruiterFollowed from "../employee_scenes/components/RecruiterFollowedComponent";
import UpdateResume from "../employee_scenes/components/UpdateResumeComponent";
import VerifyEmail from "../employee_scenes/components/VerifyEmailComponent";
import ResumeViewer from "../employee_scenes/components/ResumeViewerComponent";
import { AuthContext } from "../contexts/AuthContext";

const EmployeeRoute = ({ ...rest }) => {
  const {
    authState: { authloading, role },
  } = useContext(AuthContext);
  const location = useLocation();
  const currentUrl = location.pathname;

  if (currentUrl === "/user/account") return <Navigate to="/user/account/personal-info" />;
  
  let body = (
    <Routes>
      <Route path="/user/account" element={!authloading && role === "ROLE_USER" ? <EmployeeAccountPage/> : <Navigate to="/login" />}>
        <Route path="personal-info" element={!authloading && role === "ROLE_USER" ? <PersonalInfoComponent /> : <Navigate to="/login" />} />
        <Route path="achievement" element={!authloading && role === "ROLE_USER" ? <UserAchievement /> : <Navigate to="/login" />} />
        <Route path="add-resume" element={!authloading && role === "ROLE_USER" ? <AddResume /> : <Navigate to="/login" />} />
        <Route path="change-password" element={!authloading && role === "ROLE_USER" ? <ChangePassword /> : <Navigate to="/login" />} />
        <Route path="post-followed" element={!authloading && role === "ROLE_USER" ? <PostFollowed /> : <Navigate to="/login" />} />
        <Route path="post-submitted" element={!authloading && role === "ROLE_USER" ? <PostSubmitted /> : <Navigate to="/login" />} />
        <Route path="predict-job" element={!authloading && role === "ROLE_USER" ? <PredictJob /> : <Navigate to="/login" />} />
        <Route path="recruiter-followed" element={!authloading && role === "ROLE_USER" ? <RecruiterFollowed /> : <Navigate to="/login" />} />
        <Route path="resume-viewer" element={!authloading && role === "ROLE_USER" ? <ResumeViewer /> : <Navigate to="/login" />} />
        <Route path="update-resume" element={!authloading && role === "ROLE_USER" ? <UpdateResume /> : <Navigate to="/login" />} />
        <Route path="verify-email" element={!authloading && role === "ROLE_USER" ? <VerifyEmail /> : <Navigate to="/login" />} />
      </Route>
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );

  return <>{body}</>;
};

export default EmployeeRoute;
