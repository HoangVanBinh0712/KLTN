const AddResume = () => {
    return (         <div className="free-space" id="free-space">
    <h1>Add Resume</h1>
    <div className="content-wrapper">

        <div className="input-wrapper">
            <div className="label">Name</div>
            <input type="text"></input>
        </div>
        <div className="double-select">
            <div className="select">
                <div className="label">Public</div>
                <select name="" id="">
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
            </div>
            <div className="select">
                <div className="label">Experience</div>
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
        <div className="double-select">
            <div className="select">
                <div className="label">Expected Position</div>
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
            <div className="select">
                <div className="label">Working method</div>
                <select name="" id="">
                    <option value="INTERN">Intern</option>
                    <option value="FULL_TIME">Full-time</option>
                    <option value="PART_TIME">Part-time</option>
                </select>
            </div>
        </div>
        <small>Give us more details !</small>
        <div className="text-area-group">
            <div className="label">Your work history</div>
            <textarea></textarea>
        </div>

        <div className="text-area-group">
            <div className="label">Your skills</div>
            <textarea></textarea>
        </div>

        <div className="label">Resume pdf</div>
        <div className="button">
                                    <i className="fa fa-upload" aria-hidden="true"></i>

            Upload image
        </div>
        <small>Format for PDF only.</small>

        <div className="group-buttons">
            <div className="button">
                
                <i className="fa fa-floppy-o" aria-hidden="true"></i>

                Confirm
            </div>
            <div className="button cancel">
                
                <i className="fa fa-times" aria-hidden="true"></i>

                Cancel
            </div>
        </div>
    </div>
</div> );
}
 
export default AddResume;