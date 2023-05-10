import '../css/search-page.css'
import TopBar from '../../components/global/TopBar'
import Footer from '../../components/global/Footer'
import bannerSearch from '../../assets/picture-banner/banner-search.png'
import logoIcon from "../../assets/icons/logo.png"
import tamLogoIcon from "../../assets/picture-banner/tma-logo.png"
import roundheartIcon from "../../assets/icons/round-heart-icon.png"
import heartIcon from "../../assets/icons/heart-icon.png"
import updPic from '../../assets/picture-banner/update-cv.png'

const SearchPageComponent = () => {


    return (
        <>
            <TopBar />

            <div className="search-page">

                <img className="banner" src={bannerSearch} alt="" />
                <div className="search-bar">
                    <div className="row-flex-horizon" style={{marginBottom:'1em'}}>
                        <input className="search-text" type="text" placeholder="Job title, position you want ..." />
                        <select className="search-select option-select-page-search" >
                            <option value="">All industries</option>
                            <option value="">1</option>
                        </select>
                        <select className="search-select option-select-page-search">
                            <option value="">All areas</option>
                            <option value="">1</option>
                        </select>
                        <div className="button styling-btn-search">
                            <i className="fa fa-search" aria-hidden="true" style={{ color: 'white' }}></i>
                            Search
                        </div>
                    </div>
                    <div className="row-flex-horizon row-filter" >
                        <select className="search-select blue-border-select">
                            <option value="">All experience</option>
                            <option value="">1</option>
                        </select>
                        <select className="search-select blue-border-select">
                            <option value="">All salary</option>
                            <option value="">1</option>
                        </select>
                        <select className="search-select blue-border-select">
                            <option value="">All levels</option>
                            <option value="">1</option>
                        </select>
                        <select className="search-select blue-border-select">
                            <option value="">Type of work</option>
                            <option value="">1</option>
                        </select>
                        <select className="search-select blue-border-select">
                            <option value="">Time</option>
                            <option value="">1</option>
                        </select>
                        <select className="search-select blue-border-select">
                            <option value="">Gender</option>
                            <option value="">1</option>
                        </select>

                        <a href="# ">Clear selection</a>
                    </div>

                </div>
                <div className='quantity-number-rusult'> Found <p> {'1234'} </p> jobs matching your request.</div>
                <div className="search-content">
                    <div className="list-post">
                        <div className="cart">
                            <img className="avatar" src={logoIcon} alt="" />
                            <div className="cart-info">
                                <p className="title">Tuyển Developer C#, ASP .Net lương cao</p>
                                <div className="cart-description">
                                    Công Ty TNHH ABC
                                </div>
                                <div className="row-flex-horizon flex-wrap">
                                    <div className='list-item-flex-start'>
                                        <div className="item">
                                            <p>5 triệu</p>
                                        </div>
                                        <div className="item">
                                            <p>Tp HCM</p>
                                        </div>
                                        <div className="item">
                                            <p>1 ngày trước</p>
                                        </div>
                                        <div className="item">
                                            <p>Còn 10 ngày</p>
                                        </div>
                                    </div>
                                    <div style={{ height: '30px', width: '30px', cursor: 'pointer' }}>
                                        <img src={heartIcon} alt='' style={{ height: '100%', width: 'auto' }} />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="cart">
                            <img className="avatar" src={logoIcon} alt="" />
                            <div className="cart-info">
                                <p className="title">Tuyển Developer C#, ASP .Net lương cao</p>
                                <div className="cart-description">
                                    Công Ty TNHH ABC
                                </div>
                                <div className="row-flex-horizon flex-wrap">
                                    <div className='list-item-flex-start'>
                                        <div className="item">
                                            <p>5 triệu</p>
                                        </div>
                                        <div className="item">
                                            <p>Tp HCM</p>
                                        </div>
                                        <div className="item">
                                            <p>1 ngày trước</p>
                                        </div>
                                        <div className="item">
                                            <p>Còn 10 ngày</p>
                                        </div>
                                    </div>
                                    <div style={{ height: '30px', width: '30px', cursor: 'pointer' }}>
                                        <img src={heartIcon} alt='' style={{ height: '100%', width: 'auto' }} />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="cart">
                            <img className="avatar" src={logoIcon} alt="" />
                            <div className="cart-info">
                                <p className="title">Tuyển Developer C#, ASP .Net lương cao</p>
                                <div className="cart-description">
                                    Công Ty TNHH ABC
                                </div>
                                <div className="row-flex-horizon flex-wrap">
                                    <div className='list-item-flex-start'>
                                        <div className="item">
                                            <p>5 triệu</p>
                                        </div>
                                        <div className="item">
                                            <p>Tp HCM</p>
                                        </div>
                                        <div className="item">
                                            <p>1 ngày trước</p>
                                        </div>
                                        <div className="item">
                                            <p>Còn 10 ngày</p>
                                        </div>
                                    </div>
                                    <div style={{ height: '30px', width: '30px', cursor: 'pointer' }}>
                                        <img src={heartIcon} alt='' style={{ height: '100%', width: 'auto' }} />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="cart">
                            <img className="avatar" src={logoIcon} alt="" />
                            <div className="cart-info">
                                <p className="title">Tuyển Developer C#, ASP .Net lương cao</p>
                                <div className="cart-description">
                                    Công Ty TNHH ABC
                                </div>
                                <div className="row-flex-horizon flex-wrap">
                                    <div className='list-item-flex-start'>
                                        <div className="item">
                                            <p>5 triệu</p>
                                        </div>
                                        <div className="item">
                                            <p>Tp HCM</p>
                                        </div>
                                        <div className="item">
                                            <p>1 ngày trước</p>
                                        </div>
                                        <div className="item">
                                            <p>Còn 10 ngày</p>
                                        </div>
                                    </div>
                                    <div style={{ height: '30px', width: '30px', cursor: 'pointer' }}>
                                        <img src={heartIcon} alt='' style={{ height: '100%', width: 'auto' }} />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="cart">
                            <img className="avatar" src={logoIcon} alt="" />
                            <div className="cart-info">
                                <p className="title">Tuyển Developer C#, ASP .Net lương cao</p>
                                <div className="cart-description">
                                    Công Ty TNHH ABC
                                </div>
                                <div className="row-flex-horizon flex-wrap">
                                    <div className='list-item-flex-start'>
                                        <div className="item">
                                            <p>5 triệu</p>
                                        </div>
                                        <div className="item">
                                            <p>Tp HCM</p>
                                        </div>
                                        <div className="item">
                                            <p>1 ngày trước</p>
                                        </div>
                                        <div className="item">
                                            <p>Còn 10 ngày</p>
                                        </div>
                                    </div>
                                    <div style={{ height: '30px', width: '30px', cursor: 'pointer' }}>
                                        <img src={heartIcon} alt='' style={{ height: '100%', width: 'auto' }} />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="cart">
                            <img className="avatar" src={logoIcon} alt="" />
                            <div className="cart-info">
                                <p className="title">Tuyển Developer C#, ASP .Net lương cao</p>
                                <div className="cart-description">
                                    Công Ty TNHH ABC
                                </div>
                                <div className="row-flex-horizon flex-wrap">
                                    <div className='list-item-flex-start'>
                                        <div className="item">
                                            <p>5 triệu</p>
                                        </div>
                                        <div className="item">
                                            <p>Tp HCM</p>
                                        </div>
                                        <div className="item">
                                            <p>1 ngày trước</p>
                                        </div>
                                        <div className="item">
                                            <p>Còn 10 ngày</p>
                                        </div>
                                    </div>
                                    <div style={{ height: '30px', width: '30px', cursor: 'pointer' }}>
                                        <img src={heartIcon} alt='' style={{ height: '100%', width: 'auto' }} />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="cart">
                            <img className="avatar" src={logoIcon} alt="" />
                            <div className="cart-info">
                                <p className="title">Tuyển Developer C#, ASP .Net lương cao</p>
                                <div className="cart-description">
                                    Công Ty TNHH ABC
                                </div>
                                <div className="row-flex-horizon flex-wrap">
                                    <div className='list-item-flex-start'>
                                        <div className="item">
                                            <p>5 triệu</p>
                                        </div>
                                        <div className="item">
                                            <p>Tp HCM</p>
                                        </div>
                                        <div className="item">
                                            <p>1 ngày trước</p>
                                        </div>
                                        <div className="item">
                                            <p>Còn 10 ngày</p>
                                        </div>
                                    </div>
                                    <div style={{ height: '30px', width: '30px', cursor: 'pointer' }}>
                                        <img src={roundheartIcon} alt='' style={{ height: '100%', width: 'auto' }} />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="cart">
                            <img className="avatar" src={logoIcon} alt="" />
                            <div className="cart-info">
                                <p className="title">Tuyển Developer C#, ASP .Net lương cao</p>
                                <div className="cart-description">
                                    Công Ty TNHH ABC
                                </div>
                                <div className="row-flex-horizon flex-wrap">
                                    <div className='list-item-flex-start'>
                                        <div className="item">
                                            <p>5 triệu</p>
                                        </div>
                                        <div className="item">
                                            <p>Tp HCM</p>
                                        </div>
                                        <div className="item">
                                            <p>1 ngày trước</p>
                                        </div>
                                        <div className="item">
                                            <p>Còn 10 ngày</p>
                                        </div>
                                    </div>
                                    <div style={{ height: '30px', width: '30px', cursor: 'pointer' }}>
                                        <img src={roundheartIcon} alt='' style={{ height: '100%', width: 'auto' }} />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="cart">
                            <img className="avatar" src={logoIcon} alt="" />
                            <div className="cart-info">
                                <p className="title">Tuyển Developer C#, ASP .Net lương cao</p>
                                <div className="cart-description">
                                    Công Ty TNHH ABC
                                </div>
                                <div className="row-flex-horizon flex-wrap">
                                    <div className='list-item-flex-start'>
                                        <div className="item">
                                            <p>5 triệu</p>
                                        </div>
                                        <div className="item">
                                            <p>Tp HCM</p>
                                        </div>
                                        <div className="item">
                                            <p>1 ngày trước</p>
                                        </div>
                                        <div className="item">
                                            <p>Còn 10 ngày</p>
                                        </div>
                                    </div>
                                    <div style={{ height: '30px', width: '30px', cursor: 'pointer' }}>
                                        <img src={heartIcon} alt='' style={{ height: '100%', width: 'auto' }} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="intro">
                        <h3>May be you are interested</h3>
                        <div className="cart-v1">
                            <p className="title">Tuyển thực tập sinh ngành CNTT...</p>
                            <div className="row-flex-horizon align-items-unset">
                                <img className="avatar" src={tamLogoIcon} alt="" style={{ borderRadius: '5px', height:'150px' }} />
                                <div className="cart-info">
                                    <p className="method">Bán thời gian</p>
                                    <div className="cart-description">
                                        Công ty: Công Ty TNHH Giải Pháp Tường Minh
                                    </div>
                                    <div className="row-flex-horizon" style={{gap:'0.8em', alignItems:'center'}}>
                                        <div className="item-v1 salary-item">
                                            12 triệu
                                        </div>
                                        <div className="item-v1 time-item">
                                           30/05/2023
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="cart-v1">
                            <p className="title">Tuyển thực tập sinh ngành CNTT...</p>
                            <div className="row-flex-horizon align-items-unset">
                                <img className="avatar" src={tamLogoIcon} alt="" style={{ borderRadius: '5px', height:'150px' }} />
                                <div className="cart-info">
                                    <p className="method">Bán thời gian</p>
                                    <div className="cart-description">
                                        Công ty: Công Ty TNHH Giải Pháp Tường Minh
                                    </div>
                                    <div className="row-flex-horizon" style={{gap:'0.8em', alignItems:'center'}}>
                                        <div className="item-v1 salary-item">
                                            12 triệu
                                        </div>
                                        <div className="item-v1 time-item">
                                           30/05/2023
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="cart-v1">
                            <p className="title">Tuyển thực tập sinh ngành CNTT...</p>
                            <div className="row-flex-horizon align-items-unset">
                                <img className="avatar" src={tamLogoIcon} alt="" style={{ borderRadius: '5px', height:'150px' }} />
                                <div className="cart-info">
                                    <p className="method">Bán thời gian</p>
                                    <div className="cart-description">
                                        Công ty: Công Ty TNHH Giải Pháp Tường Minh
                                    </div>
                                    <div className="row-flex-horizon" style={{gap:'0.8em', alignItems:'center'}}>
                                        <div className="item-v1 salary-item">
                                            12 triệu
                                        </div>
                                        <div className="item-v1 time-item">
                                           30/05/2023
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='flex-update-baner-in-search-page'>
                            <img className="banner-left" src={updPic} alt="" />
                            <div className='upd-profile-btn'>
                                <div className='button'> Update Profile</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default SearchPageComponent;