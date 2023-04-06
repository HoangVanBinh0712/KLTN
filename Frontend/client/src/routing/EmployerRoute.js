import React from 'react'
import { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import LoginPage from "../employer_scenes/LoginPage";

const EmployerRoute = ({ ...rest }) => {

    const isEmployer = false
    const location = useLocation();
    const currentUrl = location.pathname;
    console.log(rest.path)
    console.log(currentUrl)
    let body;

    if (currentUrl==="/"){
        return <Navigate to="/user/home"/>;
    }
    else if (currentUrl === "/employer") {
        return <Navigate to="/employer/home"/>;
    }
    else if (currentUrl === "/employer/login" && !isEmployer) {
        body = (
            <>
                <div>Login page </div>
            </>
        )
    } else if (rest.path.includes(currentUrl) && isEmployer) {
        body = (
            <Routes>
                <Route path="/employer/login" element={<LoginPage />} />

            </Routes>

        )
    }
    else if (isEmployer && currentUrl === "/employer/login") {
        return <Navigate to="/employer/home" />;
    }
    else if (rest.path.includes(currentUrl)) {
        body = (
            <>
                <div>You need login to access! </div>
            </>
        )
    }

    return (
        <>
            {body}
        </>
    )
}

export default EmployerRoute;
