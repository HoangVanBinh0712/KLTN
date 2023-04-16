const ChangePassword = () => {
    return       <div class="free-space" id="free-space">
    <div class="content-wrapper">
        <h1>Change password</h1>

        <div class="input-wrapper">
            <div class="label">Old Password</div>
            <input type="password"></input>
        </div>

        <div class="input-wrapper">
            <div class="label">New Password</div>
            <input type="password"></input>
        </div>
        <div class="input-wrapper">
            <div class="label">Confirm password</div>
            <input type="password"></input>
        </div>
        <div class="group-buttons">
            <div class="button">
                
                <i class="fa fa-floppy-o" aria-hidden="true"></i>

                Confirm
            </div>
        </div>
    </div>
</div>
}
 
export default ChangePassword;