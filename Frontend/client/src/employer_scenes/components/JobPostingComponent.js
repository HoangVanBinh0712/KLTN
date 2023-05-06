import { useState } from "react"
import Paging from "./PagingComponent";
import SingleRowPost from "./SingleRowPost";
import leftArrow from "../../assets/icons/left-arow-icon.png"
import rightArrow from "../../assets/icons/right-arow-grey-icon.png"

const JobPostingComponent = () => {

    const listPost = [
        {
            "id": 1,
            "title": "Second title",
            "description": "Mặc áo vào thứ anh cần là nụ cười của em ?",
            "method": "FULL_TIME",
            "position": "Manager",
            "experience": "THREE_YEAR",
            "gender": "MALE",
            "requirement": "Toeic 650+ or Ielts 6.0+",
            "benifit": "Bao hiem suc khoe",
            "contact": "MrBinh: 0337445599",
            "salary": null,
            "currency": "AGREEMENT",
            "location": "Binh An, Di an",
            "recruit": 15,
            "createDate": "2023-01-07 10:56:01",
            "expirationDate": "2023-06-06 00:00:00",
            "status": "ACTIVE",
            "viewCount": 7,
            "service": {
                "id": 3,
                "name": "Premiun Serivce",
                "description": "Premium service will allow employer to post a job recruitment and allow job seeker to submit their Resume to the post. Beside that employer are able to search for job seeker public resume and filter resume submit to their job recruitment.",
                "type": "PREMIUM",
                "price": 30,
                "currency": "USD",
                "postDuration": 2,
                "active": true,
                "canSearchCV": true,
                "canFilterCVSubmit": true
            }
        },
        {
            "id": 2,
            "title": "First title",
            "description": "Mặc áo vào thứ anh cần là nụ cười của em ?",
            "method": "FULL_TIME",
            "position": "Staff",
            "experience": "NONE",
            "gender": "MALE",
            "requirement": "Toeic 550+ or Ielts 5.5+",
            "benifit": "Bao hiem suc khoe",
            "contact": "MrBinh: 0337445596",
            "salary": 1000,
            "currency": "USD",
            "location": "Binh An, Di an",
            "recruit": 5,
            "createDate": "2023-02-07 11:02:28",
            "expirationDate": "2023-06-06 00:00:00",
            "status": "ACTIVE",
            "viewCount": 8,
            "service": {
                "id": 3,
                "name": "Premiun Serivce",
                "description": "Premium service will allow employer to post a job recruitment and allow job seeker to submit their Resume to the post. Beside that employer are able to search for job seeker public resume and filter resume submit to their job recruitment.",
                "type": "PREMIUM",
                "price": 30,
                "currency": "USD",
                "postDuration": 2,
                "active": true,
                "canSearchCV": true,
                "canFilterCVSubmit": true
            }
        },
        {
            "id": 4,
            "title": "First title",
            "description": "Mặc áo vào thứ anh cần là nụ cười của em ?",
            "method": "FULL_TIME",
            "position": "Staff",
            "experience": "NONE",
            "gender": "MALE",
            "requirement": "Toeic 550+ or Ielts 5.5+",
            "benifit": "Bao hiem suc khoe",
            "contact": "MrBinh: 0337445596",
            "salary": 1000,
            "currency": "USD",
            "location": "Binh An, Di an",
            "recruit": 5,
            "createDate": "2023-03-06 16:40:59",
            "expirationDate": "2023-06-06 00:00:00",
            
            "status": "ACTIVE",
            "viewCount": 0,
            "service": {
                "id": 3,
                "name": "Premiun Serivce",
                "description": "Premium service will allow employer to post a job recruitment and allow job seeker to submit their Resume to the post. Beside that employer are able to search for job seeker public resume and filter resume submit to their job recruitment.",
                "type": "PREMIUM",
                "price": 30,
                "currency": "USD",
                "postDuration": 2,
                "active": true,
                "canSearchCV": true,
                "canFilterCVSubmit": true
            }
        },
        {
            "id": 5,
            "title": "First title",
            "description": "Mặc áo vào thứ anh cần là nụ cười của em ?",
            "method": "FULL_TIME",
            "position": "Staff",
            "experience": "NONE",
            "gender": "MALE",
            "requirement": "Toeic 550+ or Ielts 5.5+",
            "benifit": "Bao hiem suc khoe",
            "contact": "MrBinh: 0337445596",
            "salary": 1000,
            "currency": "USD",
            "location": "Binh An, Di an",
            "recruit": 5,
            "createDate": "2023-03-06 16:42:01",
            "expirationDate": "2023-06-06 00:00:00",
            
            "status": "ACTIVE",
            "viewCount": 0,
            "service": {
                "id": 3,
                "name": "Premiun Serivce",
                "description": "Premium service will allow employer to post a job recruitment and allow job seeker to submit their Resume to the post. Beside that employer are able to search for job seeker public resume and filter resume submit to their job recruitment.",
                "type": "PREMIUM",
                "price": 30,
                "currency": "USD",
                "postDuration": 2,
                "active": true,
                "canSearchCV": true,
                "canFilterCVSubmit": true
            }
        },
        {
            "id": 8,
            "title": "First title",
            "description": "Mặc áo vào thứ anh cần là nụ cười của em ?",
            "method": "FULL_TIME",
            "position": "Staff",
            "experience": "NONE",
            "gender": "MALE",
            "requirement": "Toeic 550+ or Ielts 5.5+",
            "benifit": "Bao hiem suc khoe",
            "contact": "MrBinh: 0337445596",
            "salary": 1000,
            "currency": "USD",
            "location": "Binh An, Di an",
            "recruit": 5,
            "createDate": "2023-01-06 16:45:40",
            "expirationDate": "2023-06-06 00:00:00",
            
            "status": "ACTIVE",
            "viewCount": 0,
            "service": {
                "id": 3,
                "name": "Premiun Serivce",
                "description": "Premium service will allow employer to post a job recruitment and allow job seeker to submit their Resume to the post. Beside that employer are able to search for job seeker public resume and filter resume submit to their job recruitment.",
                "type": "PREMIUM",
                "price": 30,
                "currency": "USD",
                "postDuration": 2,
                "active": true,
                "canSearchCV": true,
                "canFilterCVSubmit": true
            }
        },
        {
            "id": 9,
            "title": "string",
            "description": "string",
            "method": "FULL_TIME",
            "position": "Staff",
            "experience": "NONE",
            "gender": "MALE",
            "requirement": "string",
            "benifit": "string",
            "contact": "string",
            "salary": 1000,
            "currency": "AGREEMENT",
            "location": "Di An",
            "recruit": 10,
            "createDate": "2023-01-14 21:02:28",
            "expirationDate": "2023-06-06 00:00:00",
            
            "status": "ACTIVE",
            "viewCount": 0,
            "service": {
                "id": 3,
                "name": "Premiun Serivce",
                "description": "Premium service will allow employer to post a job recruitment and allow job seeker to submit their Resume to the post. Beside that employer are able to search for job seeker public resume and filter resume submit to their job recruitment.",
                "type": "PREMIUM",
                "price": 30,
                "currency": "USD",
                "postDuration": 2,
                "active": true,
                "canSearchCV": true,
                "canFilterCVSubmit": true
            },
            
        },
        {
            "id": 1,
            "title": "Second title",
            "description": "Mặc áo vào thứ anh cần là nụ cười của em ?",
            "method": "FULL_TIME",
            "position": "Manager",
            "experience": "THREE_YEAR",
            "gender": "MALE",
            "requirement": "Toeic 650+ or Ielts 6.0+",
            "benifit": "Bao hiem suc khoe",
            "contact": "MrBinh: 0337445599",
            "salary": null,
            "currency": "AGREEMENT",
            "location": "Binh An, Di an",
            "recruit": 15,
            "createDate": "2023-01-07 10:56:01",
            "expirationDate": "2023-06-06 00:00:00",
            "status": "ACTIVE",
            "viewCount": 7,
            "service": {
                "id": 3,
                "name": "Premiun Serivce",
                "description": "Premium service will allow employer to post a job recruitment and allow job seeker to submit their Resume to the post. Beside that employer are able to search for job seeker public resume and filter resume submit to their job recruitment.",
                "type": "PREMIUM",
                "price": 30,
                "currency": "USD",
                "postDuration": 2,
                "active": true,
                "canSearchCV": true,
                "canFilterCVSubmit": true
            }
        },
        {
            "id": 2,
            "title": "First title",
            "description": "Mặc áo vào thứ anh cần là nụ cười của em ?",
            "method": "FULL_TIME",
            "position": "Staff",
            "experience": "NONE",
            "gender": "MALE",
            "requirement": "Toeic 550+ or Ielts 5.5+",
            "benifit": "Bao hiem suc khoe",
            "contact": "MrBinh: 0337445596",
            "salary": 1000,
            "currency": "USD",
            "location": "Binh An, Di an",
            "recruit": 5,
            "createDate": "2023-02-07 11:02:28",
            "expirationDate": "2023-06-06 00:00:00",
            "status": "ACTIVE",
            "viewCount": 8,
            "service": {
                "id": 3,
                "name": "Premiun Serivce",
                "description": "Premium service will allow employer to post a job recruitment and allow job seeker to submit their Resume to the post. Beside that employer are able to search for job seeker public resume and filter resume submit to their job recruitment.",
                "type": "PREMIUM",
                "price": 30,
                "currency": "USD",
                "postDuration": 2,
                "active": true,
                "canSearchCV": true,
                "canFilterCVSubmit": true
            }
        },
        {
            "id": 4,
            "title": "First title",
            "description": "Mặc áo vào thứ anh cần là nụ cười của em ?",
            "method": "FULL_TIME",
            "position": "Staff",
            "experience": "NONE",
            "gender": "MALE",
            "requirement": "Toeic 550+ or Ielts 5.5+",
            "benifit": "Bao hiem suc khoe",
            "contact": "MrBinh: 0337445596",
            "salary": 1000,
            "currency": "USD",
            "location": "Binh An, Di an",
            "recruit": 5,
            "createDate": "2023-03-06 16:40:59",
            "expirationDate": "2023-06-06 00:00:00",
            
            "status": "ACTIVE",
            "viewCount": 0,
            "service": {
                "id": 3,
                "name": "Premiun Serivce",
                "description": "Premium service will allow employer to post a job recruitment and allow job seeker to submit their Resume to the post. Beside that employer are able to search for job seeker public resume and filter resume submit to their job recruitment.",
                "type": "PREMIUM",
                "price": 30,
                "currency": "USD",
                "postDuration": 2,
                "active": true,
                "canSearchCV": true,
                "canFilterCVSubmit": true
            }
        },
        {
            "id": 5,
            "title": "First title",
            "description": "Mặc áo vào thứ anh cần là nụ cười của em ?",
            "method": "FULL_TIME",
            "position": "Staff",
            "experience": "NONE",
            "gender": "MALE",
            "requirement": "Toeic 550+ or Ielts 5.5+",
            "benifit": "Bao hiem suc khoe",
            "contact": "MrBinh: 0337445596",
            "salary": 1000,
            "currency": "USD",
            "location": "Binh An, Di an",
            "recruit": 5,
            "createDate": "2023-03-06 16:42:01",
            "expirationDate": "2023-06-06 00:00:00",
            
            "status": "ACTIVE",
            "viewCount": 0,
            "service": {
                "id": 3,
                "name": "Premiun Serivce",
                "description": "Premium service will allow employer to post a job recruitment and allow job seeker to submit their Resume to the post. Beside that employer are able to search for job seeker public resume and filter resume submit to their job recruitment.",
                "type": "PREMIUM",
                "price": 30,
                "currency": "USD",
                "postDuration": 2,
                "active": true,
                "canSearchCV": true,
                "canFilterCVSubmit": true
            }
        },
        {
            "id": 8,
            "title": "First title",
            "description": "Mặc áo vào thứ anh cần là nụ cười của em ?",
            "method": "FULL_TIME",
            "position": "Staff",
            "experience": "NONE",
            "gender": "MALE",
            "requirement": "Toeic 550+ or Ielts 5.5+",
            "benifit": "Bao hiem suc khoe",
            "contact": "MrBinh: 0337445596",
            "salary": 1000,
            "currency": "USD",
            "location": "Binh An, Di an",
            "recruit": 5,
            "createDate": "2023-01-06 16:45:40",
            "expirationDate": "2023-06-06 00:00:00",
            
            "status": "ACTIVE",
            "viewCount": 0,
            "service": {
                "id": 3,
                "name": "Premiun Serivce",
                "description": "Premium service will allow employer to post a job recruitment and allow job seeker to submit their Resume to the post. Beside that employer are able to search for job seeker public resume and filter resume submit to their job recruitment.",
                "type": "PREMIUM",
                "price": 30,
                "currency": "USD",
                "postDuration": 2,
                "active": true,
                "canSearchCV": true,
                "canFilterCVSubmit": true
            }
        },
        {
            "id": 9,
            "title": "string",
            "description": "string",
            "method": "FULL_TIME",
            "position": "Staff",
            "experience": "NONE",
            "gender": "MALE",
            "requirement": "string",
            "benifit": "string",
            "contact": "string",
            "salary": 1000,
            "currency": "AGREEMENT",
            "location": "Di An",
            "recruit": 10,
            "createDate": "2023-01-14 21:02:28",
            "expirationDate": "2023-06-06 00:00:00",
            
            "status": "ACTIVE",
            "viewCount": 0,
            "service": {
                "id": 3,
                "name": "Premiun Serivce",
                "description": "Premium service will allow employer to post a job recruitment and allow job seeker to submit their Resume to the post. Beside that employer are able to search for job seeker public resume and filter resume submit to their job recruitment.",
                "type": "PREMIUM",
                "price": 30,
                "currency": "USD",
                "postDuration": 2,
                "active": true,
                "canSearchCV": true,
                "canFilterCVSubmit": true
            },
            
        },
        
    ]

    const [approvedPost, setApprovedPost] = useState(0)
    const [pendingPost, setPendingPost] = useState(0)
    const [deniedPost, setDeniedPost] = useState(0)

    const post = listPost

    function chuckPosts(arr, length) {
        const chunks = [];
        let i = 0;
        while (i < arr.length) {
            chunks.push(arr.slice(i, i + length));
            i += length;
        }
        return chunks;
    }

    const allPost = chuckPosts(post, 8)

    const [currentPage, setCurrentPage] = useState(0)

    const toPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const toNextPage = () => {
        if (currentPage < allPost.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    const toAnyPage =(page) =>{
        setCurrentPage(page)
    }

    return (
        <div style={{ width: "80%" }}>
            <div className="component-title">
                <span>Your job posting</span>
            </div>
            <div className="free-space" id="free-space">
                <div className='overal-group-chose'>
                    <div className='title-group-overal group-manager-post-title'>
                        Overal:
                    </div>
                    <div className='title-group-overal group-manager-post button'>
                        <div>
                            <p>Total post</p>
                            <span style={{ color: "#0c62ad", fontFamily: " Roboto-Medium" }}>{listPost.length}</span>
                        </div>
                    </div>
                    <div className='title-group-overal group-manager-post button'>
                        <div>
                            <p>Approved</p>
                            <span style={{ color: "#0c62ad", fontFamily: " Roboto-Medium" }}>{approvedPost}</span>
                        </div>
                    </div>
                    <div className='title-group-overal group-manager-post button'>
                        <div>
                            <p>Pending</p>
                            <span style={{ color: "#0c62ad", fontFamily: " Roboto-Medium" }}>{pendingPost}</span>
                        </div>
                    </div>
                    <div className='title-group-overal group-manager-post button'>
                        <div>
                            <p>Denied</p>
                            <span style={{ color: "#0c62ad", fontFamily: " Roboto-Medium" }}>{deniedPost}</span>
                        </div>
                    </div>
                </div>
                <div className='select-filer-row'>
                    <div className='select-filer-group'>
                        <div className='title-filter'>
                            Filter:
                        </div>
                        <div className='select-item'>
                            <select>
                                <option> All post</option>
                            </select>
                        </div>
                        <div className='select-item'>
                            <select>
                                <option> All level</option>
                            </select>
                        </div>
                        <div className='select-item'>
                            <select>
                                <option> Type of work</option>
                            </select>
                        </div>
                        <div className='clear-select-item'>
                            <p href=" ">Clear selection </p>
                        </div>
                    </div>
                    <div className='ex-button' style={{ width: "16%", height:"80%" }}>
                        <div style={{ marginRight: "20px", justifyContent: "center", display: "flex", width: "100%" }}>Export list</div>
                    </div>
                </div>
                <div className="content-wrapper" style={{ height: "580px", padding: "0px", gap: "0" }}>
                    <div className="col-title-listpost">
                        <div style={{ width: "25px" }}>
                            No.
                        </div>
                        <div style={{ width: "30%" }}>
                            Post title
                        </div>
                        <div style={{ width: "12%" }}>
                            Create date
                        </div>
                        <div style={{ width: "12%" }}>
                            Expiration
                        </div>
                        <div style={{ width: "8%", display: "flex", justifyContent: "center" }}>
                            Applied
                        </div>
                        <div style={{ width: "8%", display: "flex", justifyContent: "center" }}>
                            Viewed
                        </div>
                        <div style={{ width: "10%", display: "flex", justifyContent: "center" }}>
                            State
                        </div>
                        <div style={{ width: "8%", display: "flex", justifyContent: "end" }}>
                            Others
                        </div>
                    </div>
                    {listPost.length === 0 ? (
                        <div style={{ display: "flex", justifyContent: "center" }}> You don't have any posts yet</div>)
                        : (allPost[currentPage].map((p) => (
                            <SingleRowPost post={p} />))
                        )
                    }

                </div>
                <div className="paging-post" style={{marginTop:'-10px'}}>
                    <div className="circle-round" onClick={toPreviousPage}>
                        <img src={leftArrow} alt='icon' style={{height: "95%"}}/>
                    </div>
                    {allPost.map((p, id) => (
                        <div className="page-num-round" onClick={()=>{toAnyPage(id)}}
                            style={currentPage === id ? { backgroundColor: "#0c62ad", border: "2px solid #0c62ad" } : { backgroundColor: "#cfcfcf", border: "2px solid #cfcfcf" }}
                        >

                        </div>
                    ))}
                    <div className="circle-round" onClick={toNextPage}>
                        <img src={rightArrow} alt='icon' style={{height: "95%"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default JobPostingComponent