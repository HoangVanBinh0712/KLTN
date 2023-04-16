const VerifyEmail = () => {
    return     <div class="free-space" id="free-space">
    <h1>Verify email</h1>
    <div class="content-wrapper">

        <div class="row">
            <div class="code-input">
                <div class="label">Code</div>
                <input type="text"></input>
            </div>
            <div class="email-icon"> <i class="fa fa-envelope-o" aria-hidden="true"></i>
                <div class="label">Send Code</div>
            </div>
        </div>
        <div class="group-buttons">
            <div class="button">
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                Confirm
            </div>
        </div>
    </div>
</div>
}
 
export default VerifyEmail;