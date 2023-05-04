import React from 'react'
import "../../employee_scenes/css/Homepage.css";
import { useState } from 'react';
import banner1 from "../../assets/img/banner-home.png"
import banner2 from "../../assets/img/banner-home-or.png"
import banner3 from "../../assets/img/banner-home-or2.png"


const Baner = () => {

    const banner = [banner1,banner2,banner3]
    const [currentSlide, setCurrentSlide] = useState(0);
    
    function nextImage() {
        if (currentSlide+1 >= banner.length) {
            setCurrentSlide(0);
        }
        else {
            setCurrentSlide(currentSlide + 1);
        }
    }

    setInterval(nextImage, 20000); 

    let body = (
        <div className="banner-top">
            <img src={banner[currentSlide]} alt="Banner" />
            {/* <img src={banner2} alt="Banner 2" />
            <img src={banner3} alt="Banner 3" /> */}

            <div className="search-bar-home">
                <div className="mg-input-searchbar keyword-search-inhome">
                    <input className="input-search-homepage"
                        type="text"
                        name="keyword"
                        value=""
                        placeholder="Enter jobs, skills,..." 
                        onChange={''}
                        />
                </div>
                <div className="mg-input-searchbar location-search-inhome">
                    <select className="input-search-homepage custom-select"
                        name="location"
                        placeholder="All location"
                        onChange={''}>
                        <option>All location</option>
                        <option>Ho Chi Minh City</option>
                        <option>Ha Noi City</option>
                    </select>
                </div>
                <div className="btn-search-inhome">
                    <div className="custome-btn-search">
                        <div className="icon-ssearch">
                        </div>
                        <span>Search</span>
                    </div>
                </div>
            </div>
        </div>
    )



    return (
        <>
            {body}
        </>
    )
}
export default Baner;