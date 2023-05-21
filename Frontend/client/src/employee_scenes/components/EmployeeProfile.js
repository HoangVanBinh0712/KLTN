import '../css/u-profile.css'
import { useParams } from 'react-router-dom';
import TopBar from '../../components/global/TopBar';
import Footer from '../../components/global/Footer';

import cameraIcon from '../../assets/icons/camera-icon.png'
import logoIcon from '../../assets/icons/logo.png'
import checkIcon from '../../assets/icons/check-icon.png'
import locationIcon from '../../assets/icons/location-ping.png'
import threeDotIcon from '../../assets/icons/3dot-icon.png'
import cerIcon from '../../assets/icons/certificate-icon.png'
import actIcon from '../../assets/icons/activities.png'
import addIcon from '../../assets/icons/add-icon.png'




const EmployeeProfile = () => {

    let { id } = useParams();

    const data = {
        "user": {
            "id": 1,
            "email": "thebest11447@gmail.com",
            "emailConfirm": false,
            "name": "Hoang Van Binh",
            "phone": "0422995300",
            "city": {
                "id": 1,
                "name": "TP Hồ Chí Minh"
            },
            "industry": {
                "id": 3,
                "name": "BANKING"
            },
            "urlAvatar": "https://res.cloudinary.com/dh0hs3o2a/image/upload/v1682658630/iolgjegkzo5t87xr8uhu.png",
            "urlCover": "https://res.cloudinary.com/dh0hs3o2a/image/upload/v1682658948/mlmxay2y7ecd5v40wcyy.png",
            "address": "574/45 Trần Hưng Đạo",
            "description": "<p><br></p>",
            "role": "ROLE_USER",
            "service": null,
            "serviceExpirationDate": null
        },
        "achievements": [
            {
                "id": 3,
                "name": "Achievement 1 Technology",
                "user": {
                    "id": 1,
                    "email": "thebest11447@gmail.com",
                    "emailConfirm": false,
                    "name": "Hoang Van Binh",
                    "phone": "0422995300",
                    "city": {
                        "id": 1,
                        "name": "TP Hồ Chí Minh"
                    },
                    "industry": {
                        "id": 3,
                        "name": "BANKING"
                    },
                    "urlAvatar": "https://res.cloudinary.com/dh0hs3o2a/image/upload/v1682658630/iolgjegkzo5t87xr8uhu.png",
                    "urlCover": "https://res.cloudinary.com/dh0hs3o2a/image/upload/v1682658948/mlmxay2y7ecd5v40wcyy.png",
                    "address": "574/45 Trần Hưng Đạo",
                    "description": "<p><br></p>",
                    "role": "ROLE_USER",
                    "service": null,
                    "serviceExpirationDate": null
                },
                "imageUrl": "https://res.cloudinary.com/dh0hs3o2a/image/upload/v1682911452/zdr27b7lskxualtebfup.png",
                "type": "ACTIVITY",
                "url": "https://www.youtube.com/watch?v=xypzmu5mMPY&list=RDMMZuk5zGv5Un4&index=10",
                "createDate": null
            },
            {
                "id": 4,
                "name": "Running Viet Race",
                "user": {
                    "id": 1,
                    "email": "thebest11447@gmail.com",
                    "emailConfirm": false,
                    "name": "Hoang Van Binh",
                    "phone": "0422995300",
                    "city": {
                        "id": 1,
                        "name": "TP Hồ Chí Minh"
                    },
                    "industry": {
                        "id": 3,
                        "name": "BANKING"
                    },
                    "urlAvatar": "https://res.cloudinary.com/dh0hs3o2a/image/upload/v1682658630/iolgjegkzo5t87xr8uhu.png",
                    "urlCover": "https://res.cloudinary.com/dh0hs3o2a/image/upload/v1682658948/mlmxay2y7ecd5v40wcyy.png",
                    "address": "574/45 Trần Hưng Đạo",
                    "description": "<p><br></p>",
                    "role": "ROLE_USER",
                    "service": null,
                    "serviceExpirationDate": null
                },
                "imageUrl": "https://res.cloudinary.com/dh0hs3o2a/image/upload/v1673534466/spa99evbuz1p5nn8rqqb.jpg",
                "type": "CERTIFICATE",
                "url": "https://www.youtube.com/watch?v=X7sSE3yCNLI&list=RDMMZuk5zGv5Un4&index=11",
                "createDate": null
            },
            {
                "id": 14,
                "name": "Olypic mathematic asian44",
                "user": {
                    "id": 1,
                    "email": "thebest11447@gmail.com",
                    "emailConfirm": false,
                    "name": "Hoang Van Binh",
                    "phone": "0422995300",
                    "city": {
                        "id": 1,
                        "name": "TP Hồ Chí Minh"
                    },
                    "industry": {
                        "id": 3,
                        "name": "BANKING"
                    },
                    "urlAvatar": "https://res.cloudinary.com/dh0hs3o2a/image/upload/v1682658630/iolgjegkzo5t87xr8uhu.png",
                    "urlCover": "https://res.cloudinary.com/dh0hs3o2a/image/upload/v1682658948/mlmxay2y7ecd5v40wcyy.png",
                    "address": "574/45 Trần Hưng Đạo",
                    "description": "<p><br></p>",
                    "role": "ROLE_USER",
                    "service": null,
                    "serviceExpirationDate": null
                },
                "imageUrl": "https://res.cloudinary.com/dh0hs3o2a/image/upload/v1682708297/eopse7okt960ociemoxe.png",
                "type": "CERTIFICATE",
                "url": "https://www.youtube.com",
                "createDate": "2023-04-28 18:58:16"
            }
        ]
    }

    return (
        <>
            <TopBar />
            <div className='background-grey-profile'>
                <div className="body-container">
                    <p id="notice">{`${data.user.name} information`}</p>
                    <div className="profile-head">
                        <div className="cover">
                            <div id="change-image" style={{ display: 'none' }}>
                                <img id="camera-icon" src={cameraIcon} alt='' />
                                <div>Change image</div>
                            </div>
                        </div>
                        <div className="profile-info">
                            <div className="avatarTop" >
                                <div className="transparent-camera" style={{ display: 'none' }}><img id="camera-icon" src={cameraIcon} alt='' /></div>
                            </div>
                            <div className="name-viewer-wrapper">
                                <div className="name">{data.user.name}</div>
                                <div className="viewer-info">
                                    <div className="viewer-icon"></div>
                                    <div className="viewer-count">
                                        {data.user.city===null?('Not updated yet!'):(data.user.city.name)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-parent">
                        <div className="left-side-content">
                            <div className="info-area">
                                <p className="area-title">Introduction</p>
                                <div className="area-content" dangerouslySetInnerHTML={{ __html: data.user.description }} >
                                    
                                </div>
                                <div className="edit-button" style={{ display: 'none' }}></div>
                            </div>
                            <div id="employer-seen" className="info-area">
                                <p className="area-title">Employers seen CV</p>
                                <div className="content-wrapper" style={{ display: 'block' }}>
                                    <div className="employer-seen-info">
                                        <img id="employer-logo" src={logoIcon} alt='' />
                                        <div className="info-employee-wrapper">
                                            <div id="employer-seen-name">Nguyen Sy Manh <img id="tick" src={checkIcon} alt='' /></div>
                                            <div id="company-name">CÔNG TY TNHH ABC</div>
                                        </div>
                                        <div id="day-viewed">2 ngày trước</div>
                                    </div>
                                    <div className="employer-seen-info">
                                        <img id="employer-logo" src={logoIcon} alt='' />
                                        <div className="info-employee-wrapper">
                                            <div id="employer-seen-name">Nguyen Sy Manh <img id="tick" src={checkIcon} alt='' /></div>
                                            <div id="company-name">CÔNG TY TNHH ABC</div>
                                        </div>
                                        <div id="day-viewed">2 ngày trước</div>
                                    </div>
                                    <div className="employer-seen-info">
                                        <img id="employer-logo" src={logoIcon} alt='' />
                                        <div className="info-employee-wrapper">
                                            <div id="employer-seen-name">Nguyen Sy Manh <img id="tick" src={checkIcon} alt='' /></div>
                                            <div id="company-name">CÔNG TY TNHH ABC</div>
                                        </div>
                                        <div id="day-viewed">2 ngày trước</div>
                                    </div>
                                    <div className="employer-seen-info">
                                        <img id="employer-logo" src={logoIcon} alt='' />
                                        <div className="info-employee-wrapper">
                                            <div id="employer-seen-name">Nguyen Sy Manh <img id="tick" src={checkIcon} alt='' /></div>
                                            <div id="company-name">CÔNG TY TNHH ABC</div>
                                        </div>
                                        <div id="day-viewed">2 ngày trước</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-side-content">
                            <div className="info-area">
                                <p className="area-title">Address</p>
                                <p className="area-content"><img id="location-ping" src={locationIcon} alt='' /> Số 1 Võ Văn Ngân, Phường Linh Chiểu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh</p>
                                <div className="edit-button" style={{ display: 'none' }}></div>
                            </div>
                            <div className="info-area" id="achivement-area">
                                <div className="title-include-add">
                                    <p className="area-title">Achivement</p>
                                    <img id="add-button" src={addIcon} alt='' style={{ display: 'none' }} />
                                </div>
                                <div className="area-content">
                                    <div className="achive-item">
                                        <img id="achive-icon" src={cerIcon} alt='' />
                                        <div className="achive-name">Achivement 1</div>
                                        <img id="achive-more" src={threeDotIcon} alt='' style={{ display: 'none' }} />
                                    </div>
                                    <div className="achive-item">
                                        <img id="achive-icon" src={cerIcon} alt='' />
                                        <div className="achive-name">Achivement 1</div>
                                        <img id="achive-more" src={threeDotIcon} alt='' style={{ display: 'none' }} />
                                    </div>
                                    <div className="achive-item">
                                        <img id="achive-icon" src={cerIcon} alt='' />
                                        <div className="achive-name">Achivement 1</div>
                                        <img id="achive-more" src={threeDotIcon} alt='' style={{ display: 'none' }} />
                                    </div>
                                    <div className="achive-item">
                                        <img id="achive-icon" src={cerIcon} alt='' />
                                        <div className="achive-name">Achivement 1</div>
                                        <img id="achive-more" src={threeDotIcon} alt='' style={{ display: 'none' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="info-area" id="activities-area">
                                <div className="title-include-add">
                                    <p className="area-title">Activities</p>
                                    <img id="add-button" src={addIcon} alt='' style={{ display: 'none' }} />
                                </div>
                                <div className="area-content">
                                    <div className="achive-item">
                                        <img id="clock-icon" src={actIcon} alt='' />
                                        <div className="achive-name" id="activity-title">
                                            <div id="activity-name">Activity 1</div>
                                            <div id="activity-time">06/2021-06-2022</div>
                                        </div>
                                        <img id="achive-more" src={threeDotIcon} alt='' style={{ display: 'none' }} />
                                    </div>
                                    <div className="achive-item">
                                        <img id="clock-icon" src={actIcon} alt='' />
                                        <div className="achive-name" id="activity-title">
                                            <div id="activity-name">Activity 1</div>
                                            <div id="activity-time">06/2021-06-2022</div>
                                        </div>
                                        <img id="achive-more" src={threeDotIcon} alt='' style={{ display: 'none' }} />
                                    </div>
                                    <div className="achive-item">
                                        <img id="clock-icon" src={actIcon} alt='' />
                                        <div className="achive-name" id="activity-title">
                                            <div id="activity-name">Activity 1</div>
                                            <div id="activity-time">06/2021-06-2022</div>
                                        </div>
                                        <img id="achive-more" src={threeDotIcon} alt='' style={{ display: 'none' }} />
                                    </div>
                                    <div className="achive-item">
                                        <img id="clock-icon" src={actIcon} alt='' />
                                        <div className="achive-name" id="activity-title">
                                            <div id="activity-name">Activity 1</div>
                                            <div id="activity-time">06/2021-06-2022</div>
                                        </div>
                                        <img id="achive-more" src={threeDotIcon} alt='' style={{ display: 'none' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default EmployeeProfile;