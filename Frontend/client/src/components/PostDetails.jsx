import { useParams } from 'react-router-dom'
import TopBar from './global/TopBar';
import Footer from './global/Footer';
import "./css/postdetail.css"

import logoIcon from '../assets/icons/logo.png'
import salaryIcon from '../assets/icons/money-blue-icon.png'
import accIcon from '../assets/icons/account-icon.png'
import workIcon from '../assets/icons/work-blue-icon.png'
import certIcon from '../assets/icons/certificate-blue-icon.png'
import genderIcon from '../assets/icons/gender-icon.png'
import chartIcon from '../assets/icons/chart-icon.png'
import questionIcon from '../assets/picture-banner/question.png'
import pingIcon from '../assets/icons/location-ping.png'

const PostDetails = () => {

    let { id } = useParams();

    const data = {
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
        "author": {
            "id": 3,
            "email": "19110170@student.hcmute.edu.vn",
            "emailConfirm": true,
            "name": "Binh Company",
            "phone": "0337445596",
            "city": {
                "id": 1,
                "name": "TP Hồ Chí Minh"
            },
            "industry": {
                "id": 1,
                "name": "IT"
            },
            "urlAvatar": null,
            "urlCover": null,
            "address": "Ba Ria",
            "description": "Phiên bản V583 - Lễ Hội Giáng Sinh sẽ được cập nhật vào ngày 22/12/2022 với các tính năng được mở rộng cùng trang bị mới với sức mạnh chiến đấu lớn. Nhanh tay tham gia cùng Võ Lâm Chi Mộng trải nghiệm các hoạt động mới.",
            "role": "ROLE_EMPLOYER",
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
            "serviceExpirationDate": "2025-01-07 00:00:00"
        },
        "industry": {
            "id": 1,
            "name": "IT"
        },
        "city": {
            "id": 1,
            "name": "TP Hồ Chí Minh"
        },
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
    }

    return (<>
        <TopBar />
        <div className="post-detail">
            <div className='post-title-intop'>Digital Marketing Specialist</div>
            <div className="post">
                <img className="avatar" src={logoIcon} alt="" />
                <div className="post-info">
                    <p className="title">Digital Marketing Specialist</p>
                    <div className="post-description">
                        ABC Company
                    </div>
                    <div className="post-deadline-submit">
                        Deadline for submission: 30/06/2023
                    </div>
                </div>
                <div className="group-buttons">
                    <div className="button">
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        APPLY
                    </div>
                    <div className="button btn-save">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                        SAVE
                    </div>
                </div>
            </div>
            <div className="recruitment">
                <div className='recruitment-title'>Recruitment</div>
                <div className="content-wrapper">
                    <h1 style={{fontSize:'26px'}}>Details</h1>
                    <div className="row-space-between">
                        <div className="left-group">
                            <h3 style={{ fontWeight: "600" }}>Overal</h3>
                            <div className="row-flex">
                                <div className="item" style={{ backgroundColor: "inherit" }}>
                                    <div className="icon-wrapper">
                                        <img src={salaryIcon} alt="" />
                                    </div>
                                    <div className="item-detail">
                                        <h4>Salary</h4>
                                        <p>12 Milion</p>
                                    </div>
                                </div>
                                <div className="item" style={{ backgroundColor: "inherit" }} >
                                    <div className="icon-wrapper">
                                        <img src={accIcon} alt="" />
                                    </div>
                                    <div className="item-detail">
                                        <h4>Quantity</h4>
                                        <p>12 people</p>
                                    </div>
                                </div>
                                <div className="item" style={{ backgroundColor: "inherit" }}>
                                    <div className="icon-wrapper">
                                        <img src={workIcon} alt="" />
                                    </div>
                                    <div className="item-detail">
                                        <h4>Type of work</h4>
                                        <p>Full time</p>
                                    </div>
                                </div>
                                <div className="item" style={{ backgroundColor: "inherit" }}>
                                    <div className="icon-wrapper">
                                        <img src={certIcon} alt="" />
                                    </div>
                                    <div className="item-detail">
                                        <h4>Level</h4>
                                        <p>Staff</p>
                                    </div>
                                </div>
                                <div className="item" style={{ backgroundColor: "inherit" }}>
                                    <div className="icon-wrapper">
                                        <img src={genderIcon} alt="" />
                                    </div>
                                    <div className="item-detail">
                                        <h4>Gender</h4>
                                        <p>Not required</p>
                                    </div>
                                </div>
                                <div className="item" style={{ backgroundColor: "inherit" }}>
                                    <div className="icon-wrapper">
                                        <img src={chartIcon} alt="" />
                                    </div>
                                    <div className="item-detail">
                                        <h4>Experience</h4>
                                        <p>1 year</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-group">

                            <h3>Share Recruitment</h3>
                            <div className="row-flex">
                                <p>Copy link:</p>

                                <div className="button-copy"><i className="fa fa-clone" aria-hidden="true"></i>
                                </div>
                            </div>
                            <p>Share with:</p>
                            <div className="row-flex justify-start">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.55DCXbXlKDgEBoZhKxpzLAHaHa&pid=Api&P=0" alt="" />
                                <img src="https://clipground.com/images/png-messenger-5.png" alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="row-space-between">
                        <div className="list-left-group">

                            <div className="left-group">
                                <h3 style={{ fontWeight: "600" }}>Workplace</h3>
                                <div className='workplace-inpost-detail'> Số 1 võ văn Ngân, phường linh chiểu</div>
                            </div>
                            <div className="detail">
                                <h3 style={{ fontSize: "20px" }}>Description</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, eius. Voluptatem est
                                    hic,
                                    inventore, porro quod dolorum sed perspiciatis at mollitia quae debitis nobis veniam
                                    odio
                                    aspernatur sunt ipsum vel!</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, eius. Voluptatem est
                                    hic,
                                    inventore, porro quod dolorum sed perspiciatis at mollitia quae debitis nobis veniam
                                    odio
                                    aspernatur sunt ipsum vel!</p>
                            </div>
                            <div className="detail">
                                <h3 style={{ fontSize: "20px" }}>Requirement</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, eius. Voluptatem est
                                    hic,
                                    inventore, porro quod dolorum sed perspiciatis at mollitia quae debitis nobis veniam
                                    odio
                                    aspernatur sunt ipsum vel!</p>
                            </div>
                            <div className="detail">
                                <h3 style={{ fontSize: "20px" }}>Benifit</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, eius. Voluptatem est
                                    hic,
                                    inventore, porro quod dolorum sed perspiciatis at mollitia quae debitis nobis veniam
                                    odio
                                    aspernatur sunt ipsum vel!</p>
                            </div>
                            <div className="detail">
                                <h3 style={{ fontSize: "20px" }}>How to apply</h3>
                                <p>Candidates apply online by clicking <span><a href="">Apply</a></span> below</p>
                                <div className="group-buttons flex-row">
                                    <div className="button">
                                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                                        APPLY
                                    </div>
                                    <div className="button btn-save">
                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                        SAVE
                                    </div>
                                </div>
                                <div className="post-deadline-submit">
                                    Deadline for submission: 30/06/2023
                                </div>
                            </div>
                        </div>
                        <div className="list-right-group">
                            <div className="right-group">
                                <h3 style={{ marginLeft: "-10px" }}>Report Recruitment</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis fuga magnam vero!
                                    Earum
                                    eum
                                    culpa</p>
                                <img src={questionIcon} alt="" />
                                <div className="button">
                                    Report
                                </div>
                            </div>
                            <div>
                                <h3 style={{ fontSize: "20px", fontWeight:700 }}>Industry</h3>
                                <div className="mark">
                                    Marketing
                                </div>
                                <h3 style={{ fontSize: "20px", fontWeight:700 }}>Area</h3>
                                <div className="mark">
                                    Ho Chi Minh City
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-footer">
                    <h1 style={{fontSize:'26px', fontWeight:"600"}}>ABC COMPANY information <span><a href="">View company {" >>"}</a></span></h1>

                    <div className="row-flex flex-column">

                        <div className="item" style={{width:"24%"}}>
                            <div className="icon-wrapper">
                                <img src={accIcon} alt="" />
                            </div>
                            <div className="item-detail">
                                <h4>Company Size</h4>
                                <p>100 people</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon-wrapper">
                                <img src={pingIcon} alt="" />
                            </div>
                            <div className="item-detail">
                                <h4>Headquarters</h4>
                                <p>Số 1 võ văn ngân</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-line">
                        <img src={workIcon} alt="" />
                        <h3 style={{ fontSize: "20px", fontWeight:600 }}>Jobs with the company</h3>
                        <span><a href="# " style={{fontSize:'20px', color:'#0c62ad'}}>View More</a></span>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default PostDetails
