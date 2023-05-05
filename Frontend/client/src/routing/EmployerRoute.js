import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Login from "../components/page/login/Login";
import Register from "../components/page/register/Register";
import EmployerAccount from "../employer_scenes/components/EmployerAccountComponent";
import EmployerChangePassword from "../employer_scenes/components/EmployerChangePasswordComponent";
import EmployerInfo from "../employer_scenes/components/EmployerInfoComponent";
import PageNotFound from "../components/page/notfound/PageNotFound";
import EmployerVerifyEmail from "../employer_scenes/components/EmployerVerifyEmailComponent";
import AddPostComponent from "../employer_scenes/components/AddPostComponent";

const EmployerRoute = ({ ...rest }) => {
  const location = useLocation();
  const currentUrl = location.pathname;

  let body;

  if (currentUrl === "/" || currentUrl === "/employer") {
    return <Navigate to="/user/home" />;
  }
  if (currentUrl === "/employer/login") {
    body = (
      <>
        <div>Login page </div>
      </>
    );
  }
  //Check if user logged in
  if (currentUrl === "/employer/account")
    return <Navigate to="/employer/account/employer-info" />;
  else {
    body = (
      <Routes>
        <Route path="/employer/login" element={<Login />} />
        <Route path="/employer/register" element={<Register />} />
        <Route path="/employer/account" element={<EmployerAccount />}>
          <Route path="employer-info" element={<EmployerInfo />} />
          <Route path="change-password" element={<EmployerChangePassword />} />
          <Route path="verify-email" element={<EmployerVerifyEmail />} />

          <Route path="add-post" element={<AddPostComponent />} />

        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    );
  }

  return <>{body}</>;
};

export default EmployerRoute;
