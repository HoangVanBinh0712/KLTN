import logoPost from "../../assets/icons/logo.png"

const SingleCandidateProfile = ({ data }) => {

    const onClickImagePost = (empId) => {
        window.open(`/employer/candidates/${empId}`, "_blank");
    }

    const onClickPostTitle = (url) => {
        window.open(url, "_blank");
    }

    const onClickCvTitle = (url) => {
        window.open(url, "_blank");
    }

    const getTypeJob = (type) => {
        if (type === "FULL_TIME")
            return 'Full time'
        if (type === "PART_TIME")
            return 'Part time'
        if (type === "INTERN")
            return 'Intern'
    }

    const getPostDate = (date) => {
        const myDate = new Date(date);
        const day = ("0" + myDate.getDate()).slice(-2);
        const month = ("0" + (myDate.getMonth() + 1)).slice(-2);
        const year = myDate.getFullYear();

        return (`${day}/${month}/${year}`)
    }

    const getExpUser = (value) => {
        let body
        if (value === 'NONE') {
            body = (<>
                Experience: None
            </>)
        }
        if (value === 'UNDER_ONE_YEAR') {
            body = (<>
                Experience: Under one year
            </>)
        }
        if (value === 'ONE_YEAR') {
            body = (<>
                Experience: One year
            </>)
        }
        if (value === 'TWO_YEAR') {
            body = (<>
                Experience: Two years
            </>)
        }
        if (value === 'THREE_YEAR') {
            body = (<>
                Experience: Three years
            </>)
        }
        if (value === 'FOUR_YEAR') {
            body = (<>
                Experience: Four years
            </>)
        }
        if (value === 'FIVE_YEAR') {
            body = (<>
                Experience: Five years
            </>)
        }
        if (value === 'ABOVE_FIVE_YEAR') {
            body = (<>
                Experience: Above five years
            </>)
        }
        return body
    }
    
    return (
        <div className="cart" style={{ height: '200px' }}>
            <img className="avatar"
                src={data.user.urlAvatar === null ? logoPost : data.user.urlAvatar}
                alt=""
                onClick={() => { onClickImagePost(data.user.id) }} />
            <div className="cart-info">
                <div className='gr-name-btn-view'>
                    <div>
                        <p className="title" onClick={() => onClickImagePost(data.user.id)} style={{ color: '#0c62ad' }}>
                            {data.user.name}
                        </p>
                        <p style={{ fontSize: '16px' }}>Last modified: {getPostDate(data.lastModified)}</p>
                    </div>
                    <div className='btn-view' onClick={() => 'onClickImagePost(data.user.id)'}>
                        View profile
                    </div>
                </div>
                <div className="cart-description-profile" style={{cursor:'pointer'}} onClick={()=>onClickCvTitle(data.url)}>
                    <i className="fa fa-file-text-o" aria-hidden="true" style={{ margin: '0 5px', color: '#0c62ad' }}></i>
                    {data.name}
                </div>
                <div className="row-flex-horizon flex-wrap">
                    <div className='list-item-flex-start'>
                        <div className="item">
                            <p>{getExpUser(data.experience)}</p>
                        </div>
                        <div className="item">
                            <p>Position: {data.position}</p>
                        </div>
                        <div className="item">
                            <p>{getTypeJob(data.method)}</p>
                        </div>
                        <div className="item">
                            <p>{data.user.city !== null ? data.user.city.name : 'Location: Not update'}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SingleCandidateProfile;