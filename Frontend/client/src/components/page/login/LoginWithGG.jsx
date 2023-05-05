import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import { Navigate, Link, useSearchParams } from 'react-router-dom'
import './login.css'
import logoBHQ from '../../../assets/img/logo.png'
import pt3Login from '../../../assets/img/cv-picture3.png'
import ggIcon from "../../../assets/img/gg.png"
import { AuthContext } from '../../../contexts/AuthContext'
import { useToast } from "../../../contexts/Toast";
import axios from 'axios'

const LoginGG = () => {

    const { authState: { authloading, role }, loginUser, loginGoogleUser } = useContext(AuthContext)
    const [waitLogin, setAuthLoading] = useState(true);
    const { warn, error, success } = useToast();


    const [showPassword, setShowPassword] = useState(false);
    const onClick = () => {
        setShowPassword(!showPassword);
    };

    const [email, setEmail] = useState('');
    const onChangeEmail = (event) => setEmail(event.target.value)

    const [pwd, setPwd] = useState('');
    const onChangePwd = (event) => setPwd(event.target.value)

    const [checkEMP, setCreateEMP] = useState(false);
    const [checkUser, setCreateUser] = useState(true);

    const onClickEMPCheck = () => {
        if (!checkEMP) {
            setCreateEMP(!checkEMP)
            setCreateUser(!checkUser)
        }
    };

    const onClickUCheck = () => {
        if (!checkUser) {
            setCreateEMP(!checkEMP)
            setCreateUser(!checkUser)
        }
    };

    const [mess, setMess] = useState('');


    /* const loginGG =() =>{
        const response= axios.post("https://career-website.herokuapp.com/oauth2/authorization/google",{
            headers: {
              "Content-Type": "application/json",
            },
          }) 
          console.log(response)
    }
    loginGG() */

    const onClickLoginBtn = async (event) => {
        setAuthLoading(false);
        event.preventDefault();
        if (email.length === 0 || pwd.length === 0) {
            console.log("hehe")
            setMess("*Required...")
            setTimeout(() => {
                setMess("")
            }, 5000)
        }
        else {
            try {
                const userLoginForm = {
                    username: email,
                    password: pwd
                }
                let isEmpAccount = ''
                if (checkEMP) isEmpAccount = "ROLE_EMPLOYER"
                else isEmpAccount = "ROLE_USER"
                const userLoginData = await loginUser(userLoginForm, isEmpAccount);
                if (userLoginData.success === false) {
                    warn(userLoginData.message)
                }
            } catch (error) {
                console.log(error);
            }
        }
        setAuthLoading(true);
    }

    const [searchParams, setSearchParams] = useSearchParams();
    // single-time read
    const params = Object.fromEntries([...searchParams]);

    const loginGG = async () => {
        try {
            await loginGoogleUser(params.token)
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        loginGG()
    },[])

    let body
    if (!authloading && role === "ROLE_USER") {
        body = (<Navigate to="/user/home" />)
    }
    else if (!authloading && role === "ROLE_EMPLOYER") {
        body = (<Navigate to="/employer/home" />)
    }
    else {
        body = (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form className="login100-form">
                            <span className="login100-form-title p-b-43">
                                Login
                            </span>
                            <div>
                                <p className="txt1">
                                    Don’t have an account?
                                    <a className="link-to-register" href="/user/register" >{" Create now"}</a>
                                </p>
                            </div>
                            <div >
                                <label classname="lb-name" for="email" style={{ color: "#207198" }}>Email</label>
                                <input className="input-text-login"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    placeholder={mess}
                                    onChange={onChangeEmail}
                                    required
                                />
                            </div>
                            <div >
                                <label classname="lb-name" for="password" style={{ color: "#207198" }}>Password</label>
                                <input className="input-text-login password"
                                    type={showPassword ? "text" : "password"}
                                    id="pswrd"
                                    name="pwd"
                                    value={pwd}
                                    placeholder={mess}
                                    onChange={onChangePwd}
                                    required
                                />
                                <i className="fa fa-eye" onClick={onClick} style={{ right: "5%", top: "42%" }}></i>
                            </div>
                            <div className="flex-sb-m w-full p-t-3 p-b-32">
                                <span className="recruit">Are you recruiter?</span>
                                <div >
                                    <input className="input-radio-login" type="radio" name="question" value="yes" style={{ cursor: "pointer" }}
                                        onClick={onClickEMPCheck}
                                        checked={checkEMP}
                                    /> Yes
                                </div>
                                <div >
                                    <input className="input-radio-login" type="radio" name="question" value="no" style={{ cursor: "pointer" }}
                                        onClick={onClickUCheck}
                                        checked={checkUser}
                                    /> No
                                </div>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" onClick={onClickLoginBtn} disabled={!waitLogin}>
                                    Login
                                </button>
                            </div>
                            <div>
                                <a href="#_" className="txt3">Forgot a password?</a>
                            </div>
                            <div className="text-center p-t-20 p-b-20">
                                <span className="txt2">
                                    Or
                                </span>
                            </div>

                            <div className="login100-form-social-item">
                                <img src={ggIcon} alt="gg icon" width="18px" height="18px" />
                                <a className="link-to-gg" href="https://career-website.herokuapp.com/oauth2/authorization/google">
                                    Continue with google
                                </a>
                            </div>
                        </form>

                        <div className="login100-more">
                            <img className='logo-login' src={logoBHQ} alt="img logo" height="8%" />
                            <img src={pt3Login} alt="img adv" height="680px" style={{ paddingBottom: "28px", margin: "0 13%" }} />
                        </div>

                    </div>
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
export default LoginGG;