import React from 'react'
import { useState, useContext, useRef, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthContext";
import "../../employee_scenes/css/Homepage.css"
import logoBHQ from "../../assets/img/logo.png"
import messIcon from '../../assets/icons/mess-icon.png'
import bellIcon from '../../assets/icons/bell-grey-icon.png'
import personIcon from "../../assets/img/personal.png"

const TopBar = () => {

    const { authState: { authloading, role, user }, logoutSection } = useContext(AuthContext)

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const dropdownRef = useRef(null);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const logout = () => {
        const confirm = window.confirm("Are you sure you want to logout?");
        if (confirm) {
            logoutSection()
            window.location.href='/home'
        }
    }


    let body

    if (authloading) {
        body = (
            <div className="topbar-home">
                <div className="logo-home">
                    <a href='/home'><img className="logo-intopbar" src={logoBHQ} alt="logo" /></a>
                </div>
                <div className="menu-homepage">
                    <div className="option-menu">
                        <a className="option-a-menu" href="/home">Job</a>
                    </div>
                    <div className="option-menu">
                        <a className="option-a-menu" href="/user/account">Profile & CV</a>
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
                    <a href='/user/login'><img className="messbell-intopbar" src={bellIcon} alt="bell" /></a>
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

    else if (!authloading && role === "ROLE_USER") {
        body = (
            <div className="topbar-home">
                <div className="logo-home">
                <a href='/home'><img className="logo-intopbar" src={logoBHQ} alt="logo" /></a>
                </div>
                <div className="menu-homepage-signed">
                    <div className="option-menu">
                        <a className="option-a-menu" href="/home">Job</a>
                    </div>
                    <div className="option-menu">
                        <a className="option-a-menu" href="/user/account">Profile & CV</a>
                    </div>
                    <div className="option-menu">
                        <a className="option-a-menu" href="#_">Company</a>
                    </div>
                    <div className="option-menu">
                        <a className="option-a-menu" href="#_">Tools</a>
                    </div>
                </div>
                <div className="dropdown-container" ref={dropdownRef}>
                    <div className='option-account'>
                        <div className="signed-homepage">
                            <img className="messbell-intopbar" src={messIcon} alt="mess" />
                        </div>
                        <div className="signed-homepage">
                            <img className="messbell-intopbar" src={bellIcon} alt="bell" />
                        </div>
                        <div className="signed-homepage">
                            <img className="messbell-intopbar" src={user.urlAvatar === null ? personIcon : user.urlAvatar}
                                onClick={toggleDropdown}
                                /* onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave} */
                                alt="avt" />
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
                                <div className='drop-text my-account-chose'><a href=' ' className='color-a-dropdownbox'>My Account</a></div>
                                <div className='drop-text emp-follow-chose'><a href=' ' className='color-a-dropdownbox'>My followed</a></div>
                                <div className='drop-text post-follow-chose'><a href=' ' className='color-a-dropdownbox'>My Posts saved</a></div>
                                <div className='drop-text post-apply-chose'><a href=' ' className='color-a-dropdownbox'>My post applied</a></div>
                                <div className='drop-text change-pwd-chose'><a href=' ' className='color-a-dropdownbox'>Change Password</a></div>
                                <div className='drop-text logout-chose' onClick={logout}><a href=' ' className='color-a-dropdownbox'>Logout</a></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    else if (!authloading && role === "ROLE_EMPLOYER") {
        body = (
            <div className="topbar-home">
                <div className="logo-home">
                <a href='/employer/home'><img className="logo-intopbar" src={logoBHQ} alt="logo" /></a>
                </div>
                <div className="menu-homepage-signed">
                    <div className="option-menu">
                        <a className="option-a-menu" href="/employer/home">Services</a>
                    </div>
                    <div className="option-menu">
                        <a className="option-a-menu" href="#_">Brand promotion</a>
                    </div>
                    <div className="option-menu">
                        <a className="option-a-menu" href="#_">Tools</a>
                    </div>
                </div>
                <div className="dropdown-container" ref={dropdownRef}>
                    <div className='option-account'>
                        <div className="signed-homepage">
                            <img className="messbell-intopbar" src={messIcon} alt="mess" />
                        </div>
                        <div className="signed-homepage">
                            <img className="messbell-intopbar" src={bellIcon} alt="bell" />
                        </div>
                        <div className="signed-homepage">
                            <img className="messbell-intopbar" src={user.urlAvatar === null ? personIcon : user.urlAvatar}
                                onClick={toggleDropdown}
                                /* onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave} */
                                alt="avt" />
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
                                <div className='drop-text my-account-chose'><a href='/employer/account' className='color-a-dropdownbox'>My Account</a></div>
                                <div className='drop-text add-post-chose'><a href=' ' className='color-a-dropdownbox'>Create Post</a></div>
                                <div className='drop-text list-posting-chose'><a href=' ' className='color-a-dropdownbox'>My Job Posting</a></div>
                                <div className='drop-text search-cv-chose'><a href=' ' className='color-a-dropdownbox'>Looking for Candidates</a></div>
                                <div className='drop-text brand-promotion-chose'><a href=' ' className='color-a-dropdownbox'>Brand Promotion</a></div>
                                <div className='drop-text change-pwd-chose'><a href=' ' className='color-a-dropdownbox'>Change Password</a></div>
                                <div className='drop-text logout-chose' onClick={logout}><a href=' ' className='color-a-dropdownbox'>Logout</a></div>
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