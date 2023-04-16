import React from "react";
import { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import HomePage from "../employee_scenes/HomePage";
import HomePageEmp from "../employer_scenes/HomePageEmp";
import PageNotFound from "../components/page/notfound/PageNotFound";
import { webUrlActivity } from "../contexts/Constants";
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

const EmployeeRoute = ({ ...rest }) => {
  const isEmployee = true;
  const location = useLocation();
  const currentUrl = location.pathname;

  let body;

  // if (currentUrl === "/user/login" && !isEmployee) {
  //   body = (
  //     <>
  //       <div>Login page </div>
  //     </>
  //   );
  // } else if (currentUrl === "/user") {
  //   return <Navigate to="/user/home" />;
  // } else if (rest.path.includes(currentUrl) && isEmployee) {
  //   console.log("This route");
  //   body = (
  //     <Routes>
  //       <Route path="/user/home" element={<HomePage />} />
  //       <Route path="/user/account" element={<EmployeeAccountPage />}>
  //         <Route path="personal-info" element={<PersonalInfoComponent />} />
  //         <Route path="achievement" element={<UserAchievement />} />
  //         <Route path="add-resume" element={<AddResume />} />
  //         <Route path="change-password" element={<ChangePassword />} />
  //         <Route path="post-followed" element={<PostFollowed />} />
  //         <Route path="post-submitted" element={<PostSubmitted />} />
  //         <Route path="predict-job" element={<PredictJob />} />
  //         <Route path="recruiter-followed" element={<RecruiterFollowed />} />
  //         <Route path="resume-viewer" element={<ResumeViewer />} />
  //         <Route path="update-resume" element={<UpdateResume />} />
  //         <Route path="verify-email" element={<VerifyEmail />} />
  //       </Route>
  //       <Route path="/*" element={<PageNotFound />} />
  //     </Routes>
  //   );
  // } else if (isEmployee && currentUrl === "/user/login") {
  //   return <Navigate to="/user/home" />;
  // } else if (rest.path.includes(currentUrl + " ")) {
  //   body = (
  //     <>
  //       <div>You need login to access! </div>
  //     </>
  //   );
  // } else if (!webUrlActivity.includes(currentUrl + " ")) {
  //   body = (
  //     <Routes>
  //       <Route path="/*" element={<PageNotFound />} />
  //     </Routes>
  //   );
  // } else {
  //   body = (
  //     <Routes>
  //       <Route path="/user/home" element={<HomePage />} />
  //       <Route path="/employer/home" element={<HomePageEmp />} />
  //     </Routes>
  //   );
  // }
  if (currentUrl === "/user") {
    return <Navigate to="/user/home" />;
  }
  if (currentUrl === "/user/account")
    return <Navigate to="/user/account/personal-info" />;
  //Check if user login here
  if (isEmployee)
    body = (
      <Routes>
        <Route path="/user/login" element={<>Login</>} />
        <Route path="/user/home" element={<HomePage />} />
        <Route path="/user/account" element={<EmployeeAccountPage />}>
          <Route path="personal-info" element={<PersonalInfoComponent />} />
          <Route path="achievement" element={<UserAchievement />} />
          <Route path="add-resume" element={<AddResume />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="post-followed" element={<PostFollowed />} />
          <Route path="post-submitted" element={<PostSubmitted />} />
          <Route path="predict-job" element={<PredictJob />} />
          <Route path="recruiter-followed" element={<RecruiterFollowed />} />
          <Route path="resume-viewer" element={<ResumeViewer />} />
          <Route path="update-resume" element={<UpdateResume />} />
          <Route path="verify-email" element={<VerifyEmail />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    );
  else {
    <Routes>
      <Route path="/user/login" element={<>Login</>} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>;
  }

  return <>{body}</>;
};

export default EmployeeRoute;
