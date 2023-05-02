import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const ChangePassword = () => {
    const { changePassword } = useContext(AuthContext)

    const [pw, setPw] = useState({
        newPassword: '',
        oldPassword: '',
        confirmPassword: '',
    })
    const { oldPassword, newPassword, confirmPassword } = pw

    const onChangPw = (event) => {
        setPw({
            ...pw,
            [event.taget.name]: event.taget.value,
        })
    }

    const [showPassword, setShowPassword] = useState(false);
    const onClickShow = () => {
        setShowPassword(!showPassword);
    };

    const onClickSave = () => {

    }
    return (
        <>
            <div style={{ width: "80%" }}>
                <div className="component-title">
                    <span>Change password</span>
                </div>
                <div className="free-space" id="free-space">
                    <div className="content-wrapper">

                        <div className="input-wrapper">
                            <div className="label">Old Password</div>
                            <input type="password" name="oldPassword" value={oldPassword}></input>
                        </div>

                        <div className="input-wrapper">
                            <div className="label">New Password</div>
                            <input type="password" name="newPassword" value={newPassword}></input>
                        </div>
                        <div className="input-wrapper">
                            <div className="label">Confirm password</div>
                            <input type="password" name="confirmPassword" value={confirmPassword}></input>
                        </div>
                        <div className="group-buttons">
                            {/* <div >
                                <label className="checkbox-showpass">
                                    <input
                                        type="checkbox"
                                        checked={""}
                                        onChange={""}
                                    />
                                    Show password
                                </label>
                            </div> */}
                            <div className="button">

                                <i className="fa fa-floppy-o" aria-hidden="true"></i>

                                Confirm
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangePassword;