const ChangePassword = () => {
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
                            <input type="password"></input>
                        </div>

                        <div className="input-wrapper">
                            <div className="label">New Password</div>
                            <input type="password"></input>
                        </div>
                        <div className="input-wrapper">
                            <div className="label">Confirm password</div>
                            <input type="password"></input>
                        </div>
                        <div className="group-buttons">
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