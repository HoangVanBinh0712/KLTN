import '../css/emp-profile.css'
import { useParams, useLocation } from 'react-router-dom';
import TopBar from '../../components/global/TopBar';
import Footer from '../../components/global/Footer';

import earthIcon from '../../assets/icons/earth-icon.png'
import logoIcon from '../../assets/icons/logo.png'
import copyicon from '../../assets/icons/copy-icon.png'
import locationIcon from '../../assets/icons/location-ping.png'
import toweIcon from '../../assets/icons/tower-icon.png'
import heartIcon from '../../assets/icons/round-heart-icon.png'
import heartBleIcon from '../../assets/icons/heart-icon.png'
import faceIcon from '../../assets/icons/face-icon.png'
import messIcon from '../../assets/icons/messenger-icon.png'
import checkIcon from '../../assets/icons/check-icon.png'

const EmployerProfile = () => {
    let { id } = useParams();
    const location = useLocation();
    const currentUrl = location.pathname;

    return (
        <>
            <TopBar />
            <div className='background-grey-profile'>
                <div className="body-container">
                    <p id="notice">Please add information to have a complete profile</p>
                    <div className="profile-head">
                        <div className="cover"></div>
                        <div className="profile-info">
                            <div className="avatarTop"></div>
                            <div className="name-viewer-wrapper">
                                <div className="name">Công ty TNHH ABC</div>
                                <div className="company-short-info">
                                    <div className="wrapped-title">
                                        <img src={earthIcon} alt='' id="company-icon" />
                                        <div className="info">https://google.com</div>
                                    </div>
                                    <div className="wrapped-title" id="total-empl-wrap">
                                        <img src={toweIcon} alt='' id="company-icon" />
                                        <div className="info">50 - 100 employees</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="follow-company">Theo dõi công ty</div>
                    </div>
                    <div className="content-parent">
                        <div className="left-side-content">
                            <div className="info-area">
                                <p className="area-title">Company Introduction</p>
                                <div className="area-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                </div>
                            </div>
                            <div id="employer-seen" className="info-area">
                                <p className="area-title">Recruitment</p>
                                <div className="content-wrapper">
                                    <div className="employer-seen-info" style={{padding:"10px"}}>
                                        <img id="employer-logo" src={logoIcon} alt='' style={{width:"20%"}}/>
                                        <div className="info-employee-wrapper">
                                            <div id="employer-seen-name" style={{fontFamily:"Arial", color:"#000"}}>Tuyển Nhân Viên Làm Fulltime (Lương cứng 8-10 Triệu + Hoa Hồng) Upto 25 Triệu/Tháng<img id="tick" src={checkIcon} alt='' /></div>
                                            <div id="company-name"style={{fontFamily:"Arial", fontWeight:'regular'}}>CÔNG TY TNHH ABC</div>
                                            <div className="keyword-wrapper" style={{fontFamily:"Arial", fontWeight:'regular'}}>
                                                <div className="keyword" id="fist-keyword">15 Triệu</div>
                                                <div className="keyword">15 Triệu</div>
                                                <div className="keyword">15 Triệu</div>
                                                <div className="keyword">15 Triệu</div>
                                                <div className="keyword">15 Triệu</div>
                                            </div>
                                            <div className='favorite-info'><img src={heartBleIcon} alt='' className="favorite" /></div>
                                        </div>
                                    </div>
                                    <div className="employer-seen-info" style={{padding:"10px"}}>
                                        <img id="employer-logo" src={logoIcon} alt='' style={{width:"20%"}}/>
                                        <div className="info-employee-wrapper">
                                            <div id="employer-seen-name" style={{fontFamily:"Arial", color:"#000"}}>Tuyển Nhân Viên Làm Fulltime (Lương cứng 8-10 Triệu + Hoa Hồng) Upto 25 Triệu/Tháng<img id="tick" src={checkIcon} alt='' /></div>
                                            <div id="company-name" style={{fontFamily:"Arial", fontWeight:'regular'}}>CÔNG TY TNHH ABC</div>
                                            <div className="keyword-wrapper" style={{fontFamily:"Arial", fontWeight:'regular'}}>
                                                <div className="keyword" id="fist-keyword">15 Triệu</div>
                                                <div className="keyword">15 Triệu</div>
                                                <div className="keyword">15 Triệu</div>
                                                <div className="keyword">15 Triệu</div>
                                                <div className="keyword">15 Triệu</div>
                                            </div>
                                            <div className='favorite-info'><img src={heartIcon} alt='' className="favorite" /></div>
                                        </div>
                                    </div>
                                    
                                    <div className="employer-seen-info" style={{padding:"10px"}}>
                                        <img id="employer-logo" src={logoIcon} alt='' style={{width:"20%"}}/>
                                        <div className="info-employee-wrapper">
                                            <div id="employer-seen-name" style={{fontFamily:"Arial", color:"#000"}}>Tuyển Nhân Viên Làm Fulltime (Lương cứng 8-10 Triệu + Hoa Hồng) Upto 25 Triệu/Tháng <img id="tick" src={checkIcon} alt='' /></div>
                                            <div id="company-name" style={{fontFamily:"Arial", fontWeight:'regular'}}>CÔNG TY TNHH ABC</div>
                                            <div className="keyword-wrapper" style={{fontFamily:"Arial", fontWeight:'regular'}}>
                                                <div className="keyword" id="fist-keyword">15 Triệu</div>
                                                <div className="keyword">15 Triệu</div>
                                                <div className="keyword">15 Triệu</div>
                                                <div className="keyword">15 Triệu</div>
                                                <div className="keyword">15 Triệu</div>
                                            </div>
                                            <div className='favorite-info'><img src={heartIcon} alt='' className="favorite" /></div>
                                        </div>
                                    </div>

                                    <div className='view-all-click-link'> <a href=' '>View All {' >>'} </a></div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="right-side-content">
                            <div className="info-area">
                                <p className="area-title">Location</p>
                                <p className="area-content"><img id="location-ping" src={locationIcon} alt='' /> Số 1 Võ Văn Ngân, Phường Linh Chiểu, Thành phố Thủ Đức, Thành phố Hồ Chí Minh</p>
                            </div>
                            <div className="info-area" id="achivement-area">
                                <div className="title-include-add">
                                    <p className="area-title">Share company</p>
                                </div>
                                <div className="area-content" id="share-company">
                                    <div style={{fontFamily:'Arial', fontSize:"22px"}}>Copy link:</div>
                                    <div className="link-area">
                                        <div className="paste-link">http://ten-deploy{currentUrl}</div>
                                        <img className="copy-icon" src={copyicon} alt='' />
                                    </div>
                                    <div style={{fontFamily:'Arial', fontSize:"22px"}}>Share with:</div>
                                    <div className="social-media">
                                        <img className="media-icon" src={faceIcon} alt='' />
                                        <img className="media-icon" src={messIcon} alt='' />
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
export default EmployerProfile