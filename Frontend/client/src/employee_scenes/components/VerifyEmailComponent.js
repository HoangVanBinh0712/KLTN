const VerifyEmail = () => {
    return     <div className="free-space" id="free-space">
    <h1>Verify email</h1>
    <div className="content-wrapper">

        <div className="row">
            <div className="code-input">
                <div className="label">Code</div>
                <input type="text"></input>
            </div>
            <div className="email-icon"> <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <div className="label">Send Code</div>
            </div>
        </div>
        <div className="group-buttons">
            <div className="button">
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                Confirm
            </div>
        </div>
    </div>
</div>
}
 
export default VerifyEmail;