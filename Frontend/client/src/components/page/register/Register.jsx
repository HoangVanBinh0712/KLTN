import React from 'react'
import "./register.css"
import { useState } from 'react'
import logoBHQ from '../../../assets/img/logo.png'
import pt3Login from '../../../assets/img/cv-picture3.png'


const Register = () => {

    const [showPassword1, setShowPassword1] = useState(false);
    const onClickShow1 = () => {
        setShowPassword1(!showPassword1);
    };
    
    const [showPassword2, setShowPassword2] = useState(false);
    const onClickShow2 = () => {
        setShowPassword2(!showPassword2);
    };

    const [createEMP, setCreateEMP] = useState(false);
    const onClickCheck = () => {
        setCreateEMP(!createEMP);
    };

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <form className="register100-form">
                        <span className="register100-form-title">
                            Create Your Account
                        </span>
                        <div>
                            <p className="txt1">
                                Already have an account? <a href="/user/login" className='link-to-login'>Login</a>
                            </p>
                        </div>
                        <div >
                            <label className="lb-name">Full name</label>
                            <input className='input-reg' type="text" id="lname" name="lname"/>
                        </div>
                        <div >
                            <label className="lb-name" >Email</label>
                            <input className='input-reg' type="email" id="email" name="email"/>
                        </div>
                        <div >
                            <label  className="lb-name">Password</label>
                            <input className="password" type={showPassword1?"text":"password"} id="pswrd" name="pwd"/>
                                <i id="fa" className="fa fa-eye icon-eye" onClick={onClickShow1} ></i>
                        </div>
                        <div >
                            <label className="lb-name" >Confirm Password</label>
                            <input className="password1" type={showPassword2?"text":"password"} id="pswrd1" name="pwd1"/>
                                <i id="fa1" className="fa fa-eye icon-eye" onClick={onClickShow2} style={{top:"68%"}}></i>
                        </div>
                        <div className="flex-sb-m w-full p-t-3 p-b-32">
                            <span className="recruit">Are you recruiter?</span>
                            <div >
                                <input type="radio" name="question" value="yes" id="yes" onClick={onClickCheck} /> Yes
                            </div>
                            <div >
                                <input type="radio" name="question" value="no" id="no" onClick={onClickCheck}  checked /> No
                            </div>
                        </div>
                        <div id="Company" style={createEMP?{display:"block"}:{display:"none"}}>
                            <label for="text" className='lb-name'>Company name</label>
                            <input type="text" id="cname" name="cname"/>
                        </div>
                        <div className="container-register100-form-btn">
                            <button className="register100-form-btn" onClick={""}>
                                Register
                            </button>
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
export default Register;