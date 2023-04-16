const AddResume = () => {
    return (         <div class="free-space" id="free-space">
    <h1>Add Resume</h1>
    <div class="content-wrapper">

        <div class="input-wrapper">
            <div class="label">Name</div>
            <input type="text"></input>
        </div>
        <div class="double-select">
            <div class="select">
                <div class="label">Public</div>
                <select name="" id="">
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
            </div>
            <div class="select">
                <div class="label">Experience</div>
                <select name="" id="">
                    <option value="NONE">No Experience</option>
                    <option value="UNDER_ONE_YEAR">Under 1 Year</option>
                    <option value="ONE_YEAR">1 Year</option>
                    <option value="TWO_YEAR">2 Years</option>
                    <option value="THREE_YEAR">3 Years</option>
                    <option value="FOUR_YEAR">4 Years</option>
                    <option value="FIVE_YEAR">5 Years</option>
                    <option value="ABOVE_FIVE_YEAR">5+ Years</option>
                </select>
            </div>
        </div>
        <div class="double-select">
            <div class="select">
                <div class="label">Expected Position</div>
                <select name="" id="">
                    <option value="Staff">Staff</option>
                    <option value="Leader">Leader</option>
                    <option value="Manager">Manager</option>
                    <option value="Deputy">Deputy</option>
                    <option value="Vice_President">Vice President</option>
                    <option value="Interns">Interns</option>
                    <option value="Branch_Manager">Branch Manager</option>
                </select>
            </div>
            <div class="select">
                <div class="label">Working method</div>
                <select name="" id="">
                    <option value="INTERN">Intern</option>
                    <option value="FULL_TIME">Full-time</option>
                    <option value="PART_TIME">Part-time</option>
                </select>
            </div>
        </div>
        <small>Give us more details !</small>
        <div class="text-area-group">
            <div class="label">Your work history</div>
            <textarea></textarea>
        </div>

        <div class="text-area-group">
            <div class="label">Your skills</div>
            <textarea></textarea>
        </div>

        <div class="label">Resume pdf</div>
        <div class="button">
                                    <i class="fa fa-upload" aria-hidden="true"></i>

            Upload image
        </div>
        <small>Format for PDF only.</small>

        <div class="group-buttons">
            <div class="button">
                
                <i class="fa fa-floppy-o" aria-hidden="true"></i>

                Confirm
            </div>
            <div class="button cancel">
                
                <i class="fa fa-times" aria-hidden="true"></i>

                Cancel
            </div>
        </div>
    </div>
</div> );
}
 
export default AddResume;