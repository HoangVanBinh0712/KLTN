import React from 'react'

import tamLogo from "../../assets/picture-banner/tma-logo.png"
import roundheartIcon from "../../assets/icons/round-heart-icon.png"
import heartIcon from "../../assets/icons/heart-icon.png"
import leftArrow from "../../assets/icons/left-arow-icon.png"
import rightArrow from "../../assets/icons/right-arow-grey-icon.png"



const ListPostsHomepage = ({ title, isHaveAi, listPosts }) => {

    const posts = [
        {
            auth: { id: 1, urlAvatar: tamLogo },
            title: "TUYỂN THỰC TẬP SINH SINH VIÊN NGÀNH CNTT, ĐTVT",
            method: "FULL_TIME",
            location: "Công ty: Công ty TNHH Giải Pháp Phần Mềm Tường Minh - Thành phố Hồ Chí Minh",
            like: false
        },
        {
            auth: { id: 1, urlAvatar: tamLogo },
            title: "TUYỂN THỰC TẬP SINH SINH VIÊN NGÀNH CNTT, ĐTVT",
            method: "FULL_TIME",
            location: "Công ty: Công ty TNHH Giải Pháp Phần Mềm Tường Minh - Thành phố Hồ Chí Minh",
            like: false
        },
        {
            auth: { id: 1, urlAvatar: tamLogo },
            title: "TUYỂN THỰC TẬP SINH SINH VIÊN NGÀNH CNTT, ĐTVT",
            method: "FULL_TIME",
            location: "Công ty: Công ty TNHH Giải Pháp Phần Mềm Tường Minh - Thành phố Hồ Chí Minh",
            like: true
        },
        {
            auth: { id: 1, urlAvatar: tamLogo },
            title: "TUYỂN THỰC TẬP SINH SINH VIÊN NGÀNH CNTT, ĐTVT",
            method: "FULL_TIME",
            location: "Công ty: Công ty TNHH Giải Pháp Phần Mềm Tường Minh - Thành phố Hồ Chí Minh",
            like: false
        },
        {
            auth: { id: 1, urlAvatar: tamLogo },
            title: "TUYỂN THỰC TẬP SINH SINH VIÊN NGÀNH CNTT, ĐTVT",
            method: "FULL_TIME",
            location: "Công ty: Công ty TNHH Giải Pháp Phần Mềm Tường Minh - Thành phố Hồ Chí Minh",
            like: false
        },
        {
            auth: { id: 1, urlAvatar: tamLogo },
            title: "TUYỂN THỰC TẬP SINH SINH VIÊN NGÀNH CNTT, ĐTVT",
            method: "FULL_TIME",
            location: "Công ty: Công ty TNHH Giải Pháp Phần Mềm Tường Minh - Thành phố Hồ Chí Minh",
            like: false
        },
    ]
    let body
    if (isHaveAi) {
        body = (
            <div className="hot-job-homepage">
                <div className="hot-job-homepage-titlebox">
                    <div className="post-bx-title-ai">
                        {title}
                    </div>
                    <div className="round-recommend">
                        Recommended by HBQ AI
                    </div>
                    <div className="post-bx-viewall-ai">
                        {`View all >>`}
                    </div>
                </div>
                <div className="list-posts-homepage">
                    {posts.map((p) => (
                        <div className="post-item">
                            <div className="logo-emp-post">
                                <a href="# "><img src={p.auth.urlAvatar} className="img-inpost-homepage" alt="logo" /></a>
                            </div>
                            <div className="info-post-homepage">
                                <div className="post-title-homepage">
                                    <a href="# ">{p.title}</a>
                                </div>
                                <div className="type-of-work">
                                    {p.method === "FULL_TIME" ? "Full time" : "Part time"}
                                </div>
                                <div className="locationg-company-homepage">
                                    {p.location}
                                </div>
                                <div className="follow-post-heart">
                                    <div className="heart-icon">
                                        {p.like ? (<img className="icon-hear-follow" src={heartIcon} alt="heart icon" />)
                                            : (<img className="icon-hear-follow" src={roundheartIcon} alt="heart icon" />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="paging-post">
                    <div className="circle-round">
                        <img src={leftArrow} alt='icon' />
                    </div>
                    <div className="page-num-round" style={{ backgroundColor: "#cfcfcf", border: "2px solid #cfcfcf" }}></div>
                    <div className="page-num-round" style={{ backgroundColor: "#0c62ad", border: "2px solid #0c62ad" }}></div>
                    <div className="page-num-round" style={{ backgroundColor: "#cfcfcf", border: "2px solid #cfcfcf" }}></div>
                    <div className="page-num-round" style={{ backgroundColor: "#cfcfcf", border: "2px solid #cfcfcf" }}></div>
                    <div className="page-num-round" style={{ backgroundColor: "#cfcfcf", border: "2px solid #cfcfcf" }}></div>
                    <div className="page-num-round" style={{ backgroundColor: "#cfcfcf", border: "2px solid #cfcfcf" }}></div>
                    <div className="page-num-round" style={{ backgroundColor: "#cfcfcf", border: "2px solid #cfcfcf" }}></div>
                    <div className="page-num-round" style={{ backgroundColor: "#cfcfcf", border: "2px solid #cfcfcf" }}></div>
                    <div className="page-num-round" style={{ backgroundColor: "#cfcfcf", border: "2px solid #cfcfcf" }} ></div>
                    <div className="circle-round">
                        <img src={rightArrow} alt='icon' />
                    </div>
                </div>
            </div>
        )
    }

    else {
        body = (
            <div className="hot-job-homepage">
                <div className="hot-job-homepage-titlebox">
                    <div className="post-bx-title">
                        {title}
                    </div>
                    <div className="post-bx-viewall">
                        {`View all >>`}
                    </div>
                </div>
                <div className="list-posts-homepage">
                    {posts.map((p) => (
                        <div className="post-item">
                            <div className="logo-emp-post">
                                <a href="# "><img src={p.auth.urlAvatar} className="img-inpost-homepage" alt="logo" /></a>
                            </div>
                            <div className="info-post-homepage">
                                <div className="post-title-homepage">
                                    <a href="# ">{p.title}</a>
                                </div>
                                <div className="type-of-work">
                                    {p.method === "FULL_TIME" ? "Full time" : "Part time"}
                                </div>
                                <div className="locationg-company-homepage">
                                    {p.location}
                                </div>
                                <div className="follow-post-heart">
                                    <div className="heart-icon">
                                        {p.like ? (<img className="icon-hear-follow" src={heartIcon} alt="heart icon" />)
                                            : (<img className="icon-hear-follow" src={roundheartIcon} alt="heart icon" />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="paging-post">
                    <div className="circle-round">
                        <img src={leftArrow} alt='icon' />
                    </div>
                    <div className="page-num-round" style={{ backgroundColor: "#cfcfcf", border: "2px solid #cfcfcf" }}></div>
                    <div className="page-num-round" style={{ backgroundColor: "#0c62ad", border: "2px solid #0c62ad" }}></div>
                    <div className="page-num-round" style={{ backgroundColor: "#cfcfcf", border: "2px solid #cfcfcf" }}></div>
                    <div className="page-num-round" style={{ backgroundColor: "#cfcfcf", border: "2px solid #cfcfcf" }}></div>
                    <div className="page-num-round" style={{ backgroundColor: "#cfcfcf", border: "2px solid #cfcfcf" }}></div>
                    <div className="page-num-round" style={{ backgroundColor: "#cfcfcf", border: "2px solid #cfcfcf" }}></div>
                    <div className="page-num-round" style={{ backgroundColor: "#cfcfcf", border: "2px solid #cfcfcf" }}></div>
                    <div className="page-num-round" style={{ backgroundColor: "#cfcfcf", border: "2px solid #cfcfcf" }}></div>
                    <div className="page-num-round" style={{ backgroundColor: "#cfcfcf", border: "2px solid #cfcfcf" }} ></div>
                    <div className="circle-round">
                        <img src={rightArrow} alt='icon' />
                    </div>
                </div>
            </div>
        )
    }




    return (
        <>
            {body}
        </>
    )
}
export default ListPostsHomepage;