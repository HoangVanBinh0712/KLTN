import React from 'react'
import { useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import "../../css/Homepage.css"
import logoBHQ from "../../../assets/img/logo.png"
import messIcon from '../../../assets/icons/mess-icon.png'
import bellIcon from '../../../assets/icons/bell-grey-icon.png'
import personIcon from "../../../assets/img/personal.png"

const TopBar = () => {

    const { authState: { authloading, role, user } } = useContext(AuthContext)

    
    let body

    if (authloading) {
        body = (
            <div className="topbar-home">
                <div className="logo-home">
                    <img className="logo-intopbar" src={logoBHQ} alt="logo"/>
                </div>
                <div className="menu-homepage">
                    <div className="option-menu">
                        <a className="option-a-menu" href="#_">Job</a>
                    </div>
                    <div className="option-menu">
                        <a className="option-a-menu" href="#_">Profile & CV</a>
                    </div>
                    <div className="option-menu">
                        <a className="option-a-menu" href="#_">Company</a>
                    </div>
                    <div className="option-menu">
                        <a className="option-a-menu" href="#_">Tools</a>
                    </div>
                </div>
                <div className="mess-bell-homepage">
                    <img className="messbell-intopbar" src={messIcon} alt="mess"/>
                </div>
                <div className="mess-bell-homepage">
                    <img className="messbell-intopbar" src={bellIcon} alt="bell"/>
                </div>
                <div className="signipup-homepage ">
                    <div className="login-reg-topbar signin-blue">Sign In</div>
                </div>
                <div className="signipup-homepage ">
                    <div className="login-reg-topbar signup-white">Sign up</div>
                </div>
            </div>
        )
    }

    else if (!authloading /* && role === "ROLE_USER" */) {
        body = (
            <div className="topbar-home">
                <div className="logo-home">
                    <img className="logo-intopbar" src={logoBHQ} alt="logo"/>
                </div>
                <div className="menu-homepage-signed">
                    <div className="option-menu">
                        <a className="option-a-menu" href="#_">Job</a>
                    </div>
                    <div className="option-menu">
                        <a className="option-a-menu" href="#_">Profile & CV</a>
                    </div>
                    <div className="option-menu">
                        <a className="option-a-menu" href="#_">Company</a>
                    </div>
                    <div className="option-menu">
                        <a className="option-a-menu" href="#_">Tools</a>
                    </div>
                </div>
                <div className="mess-bell-homepage">
                    <img className="messbell-intopbar" src={messIcon} alt="mess"/>
                </div>
                <div className="mess-bell-homepage">
                    <img className="messbell-intopbar" src={bellIcon} alt="bell"/>
                </div>
                <div className="signed-homepage ">
                    <img className="messbell-intopbar" src={personIcon} alt="avt"/>
                </div>
            </div>
        )
    }

    return (
        <>
            {body}
        </>
    )
}
export default TopBar