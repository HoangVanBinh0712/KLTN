const ChangePassword = () => {
    return       <div className="free-space" id="free-space">
    <div className="content-wrapper">
        <h1>Change password</h1>

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
}
 
export default ChangePassword;