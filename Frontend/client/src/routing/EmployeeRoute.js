import React from 'react'
import { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import HomePage from "../employee_scenes/HomePage";
import HomePageEmp from "../employer_scenes/HomePageEmp";
import PageNotFound from "../components/page/notfound/PageNotFound";
import { webUrlActivity } from "../contexts/Constants";

const EmployeeRoute = ({ ...rest }) => {

    const isEmployee = false
    const location = useLocation();
    const currentUrl = location.pathname;
 
    let body;

    if (currentUrl === "/user/login" && !isEmployee) {
        body = (
            <>
                <div>Login page </div>
            </>
        )
    } 
    else if (currentUrl === "/user") {
        return <Navigate to="/user/home" />;
    } 
    else if (rest.path.includes(currentUrl) && isEmployee) {
        body = (
            <Routes>
                <Route path="/user/home" element={<HomePage />} />
                
            </Routes>

        )
    }
    else if (isEmployee && currentUrl === "/user/login") {
        return <Navigate to="/user/home" />;
    }
    else if (rest.path.includes(currentUrl+" ")) {
        body = (
            <>
                <div>You need login to access! </div>
            </>
        )
    }
    else if (!webUrlActivity.includes(currentUrl+" ")) {
        body = (
            <Routes>
                <Route path ="/*" element={<PageNotFound />} />
            </Routes>
        )
    }
    else {
        body = (
            <Routes>
                <Route path="/user/home" element={<HomePage />} />
                <Route path="/employer/home" element={<HomePageEmp />} />
            </Routes>

        )
    }

    return (
        <>
            {body}
        </>
    )
}

export default EmployeeRoute;
