import React from 'react'
import { useState, useContext } from "react";
import { Navigate } from 'react-router-dom';
import { AuthContext } from "../../../contexts/AuthContext";
import "../../css/Homepage.css"
import logoBHQ from "../../../assets/img/logo.png"
import messIcon from '../../../assets/icons/mess-icon.png'
import bellIcon from '../../../assets/icons/bell-grey-icon.png'
import personIcon from "../../../assets/img/personal.png"

const TopBar = () => {

    const { authState: { authloading, role, user }, logoutSection } = useContext(AuthContext)

    console.log(user)
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const logout = () => {
        const confirm = window.confirm("Are you sure you want to logout?");
        if (confirm) {
            logoutSection()
            return <Navigate to="/user/home"/>
        }
    }


    let body

    if (authloading) {
        body = (
            <div className="topbar-home">
                <div className="logo-home">
                    <img className="logo-intopbar" src={logoBHQ} alt="logo" />
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
                    <a href='/user/login'><img className="messbell-intopbar" src={messIcon} alt="mess" /></a>
                </div>
                <div className="mess-bell-homepage" style={{ marginRight: "20px" }}>
                    <a href='/user/login'><img className="messbell-intopbar" src={bellIcon} alt="bell"  /></a>
                </div>
                <div className="signipup-homepage ">
                    <a href='/user/login'><div className="login-reg-topbar signin-blue">Sign In</div></a>
                </div>
                <div className="signipup-homepage ">
                    <a href='/user/register'><div className="login-reg-topbar signup-white">Sign up</div></a>
                </div>
            </div>
        )
    }

    else if (!authloading /* && role === "ROLE_USER" */) {
        body = (
            <div className="topbar-home">
                <div className="logo-home">
                    <img className="logo-intopbar" src={logoBHQ} alt="logo" />
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
                <div className="dropdown-container">
                    <div className='option-account'>
                        <div className="signed-homepage">
                            <img className="messbell-intopbar" src={messIcon} alt="mess" />
                        </div>
                        <div className="signed-homepage">
                            <img className="messbell-intopbar" src={bellIcon} alt="bell" />
                        </div>
                        <div className="signed-homepage">
                            <img className="messbell-intopbar" src={user.urlAvatar === null ? personIcon : user.urlAvatar} onClick={toggleDropdown} alt="avt" />
                        </div>
                    </div>
                    {isOpen && (
                        <div className="dropdown-menu">
                            <div className='user-dropbox'>
                                <div className='avt-in-dropbox'>
                                    <img src={personIcon} alt="avt" />
                                </div>
                                <div className='name-in-dropbox'>
                                    <div className='n-user-in-dropbox'>{user.name}</div>
                                    <div className='num-user-in-dropbox'>USER ID: <b>{user.id}</b></div>
                                </div>
                            </div>
                            <div>
                                <div className='drop-text my-account-chose'>My Account</div>
                                <div className='drop-text emp-follow-chose'>My followed</div>
                                <div className='drop-text post-follow-chose'>My Posts saved</div>
                                <div className='drop-text post-apply-chose'>My post applied</div>
                                <div className='drop-text change-pwd-chose'>Change Password</div>
                                <div className='drop-text logout-chose' onClick={logout}>Logout</div>
                            </div>
                        </div>
                    )}
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