import { useParams } from 'react-router-dom';
import '../css/submites-sc.css'
import leftArrow from "../../assets/icons/left-arow-icon.png"
import rightArrow from "../../assets/icons/right-arow-grey-icon.png"
import { SingleRowSubmit } from './SingleRowSubmit'
import { useContext, useEffect, useState } from 'react';
import { PostContext } from '../../contexts/PostContext';


const SubmitDetail = () => {

    let { id } = useParams();
    const { getCvSubmited, getPostById } = useContext(PostContext)


    const [listSubmittion, setListSubmiition] = useState([])
    const [postCurrent, setPostCurrent] = useState({})

    const getSubmittion = async () => {
        const res = await getCvSubmited(id)
        if (res.success) setListSubmiition(res.data)
    }

    const getPostId = async () => {
        const res = await getPostById(id)
        if (res.success) setPostCurrent(res.data)
    }

    function chuckPosts(arr, len) {
        const chunks = [];
        let i = 0;
        while (i < arr.length) {
            chunks.push(arr.slice(i, i + len));
            i += len;
        }
        return chunks;
    }

    const allSubmit = chuckPosts(listSubmittion, 8)

    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        getSubmittion()
        getPostId()
    }, [])

    let listData
    if (listSubmittion.length > 0) {
        listData = (<>
            {allSubmit[currentPage].map((sub, id) => (
                <SingleRowSubmit submit={sub} num={id} position={postCurrent.position} key={id} />
            ))
            }
        </>)
    }
    else listData = (
        <div className="row-data-listpost">
            No candidate has applied for this job yet!
        </div>
    )

    const statePost = (status) => {
        let body
        if (status === "ACTIVE")
            body = (<div className='selected-create-appointment state-green'>
                <i className="fa fa-check-circle-o" aria-hidden="true" style={{ marginRight: '5px' }}></i>
                Accepted
            </div>)
        else if (status === "WAIT_FOR_ACCEPT")
            body = (<div className='selected-create-appointment state-yellow'>
                <i className="fa fa-exclamation-circle" aria-hidden="true" style={{ marginRight: '5px' }}></i>
                Pending
            </div>)
        else if (status === "DELETED_BY_ADMIN")
            body = (<div className='selected-create-appointment state-red'>
                <i className="fa fa-times-circle" aria-hidden="true" style={{ marginRight: '5px' }}></i>
                Unaccept
            </div>)
        else {
            body = (<div className='selected-create-appointment state-green'>
                <i className="fa fa-check-circle-o" aria-hidden="true" style={{ marginRight: '5px' }}></i>
                Accepted
            </div>)
        }
        return body
    }

    const toPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const toNextPage = () => {
        if (currentPage < allSubmit.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    const toAnyPage = (page) => {
        setCurrentPage(page)
    }


    return (
        <div style={{ width: "80%" }}>
            <div className="component-title">
                <span>Submitted details</span>
            </div>
            <div className="free-space" id="free-space" style={{ justifyContent: 'flex-start', paddingTop: '35px',paddingBottom:'2%' }}>
                <div className='row-title-status'>
                    <div className='title-and-expoet-btn'>
                        Maketing, sale staff <p>{'('}{'23'}{' '}{'submits'}{')'}</p>
                    </div>
                    {statePost(postCurrent.status)}
                </div>
                <div className='sort-by-date-export-btn'>
                    <div className='select-date'>
                        Sort:
                        <select >
                            <option> Submited time</option>
                        </select>
                    </div>
                    <div className='ex-button' style={{ width: "16%", height: "50px" }}>
                        <div style={{ marginRight: "20px", justifyContent: "center", display: "flex", width: "100%" }}>Export list</div>
                    </div>
                </div>
                <div className="content-wrapper" style={{ height: "580px", padding: "0px", gap: "0" }}>
                    <div className="col-title-listpost" style={{ fontWeight: 500 }}>
                        <div style={{ width: "25px" }}>
                            No.
                        </div>
                        <div style={{ width: "30%" }}>
                            Name profile
                        </div>
                        <div style={{ width: "25%" }}>
                            Position apply
                        </div>
                        <div style={{ width: "12%" }}>
                            Submited time
                        </div>
                        <div style={{ width: "12%", display: "flex", justifyContent: "center" }}>
                            Attached Profile
                        </div>
                        <div style={{ width: "8%", display: "flex", justifyContent: "end" }}>
                            Others
                        </div>
                    </div>
                    {listData}
                </div>
                <div className="paging-post" style={{ marginTop: '15px' }}>
                    <div className="circle-round" onClick={toPreviousPage}>
                        <img src={leftArrow} alt='icon' />
                    </div>
                    {allSubmit.map((p, id) => (
                        <div className="page-num-round" onClick={() => { toAnyPage(id) }} key={id}
                            style={currentPage === id ? { backgroundColor: "#0c62ad", border: "2px solid #0c62ad" } : { backgroundColor: "#cfcfcf", border: "2px solid #cfcfcf" }}
                        >

                        </div>
                    ))}
                    <div className="circle-round" onClick={toNextPage}>
                        <img src={rightArrow} alt='icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SubmitDetail