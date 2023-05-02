import React from 'react'

import tamLogo from "../../assets/picture-banner/tma-logo.png"

const TopEmployer = () => {

    const topEmPs = [
        {
            id:1,
            urlAvatar:tamLogo
        },
        {
            id:1,
            urlAvatar:tamLogo
        },
        {
            id:1,
            urlAvatar:tamLogo
        },
        {
            id:1,
            urlAvatar:tamLogo
        },
        {
            id:1,
            urlAvatar:tamLogo
        },
        {
            id:1,
            urlAvatar:tamLogo
        },
        {
            id:1,
            urlAvatar:tamLogo
        },
        {
            id:1,
            urlAvatar:tamLogo
        },
        {
            id:1,
            urlAvatar:tamLogo
        },
        {
            id:1,
            urlAvatar:tamLogo
        },
    ]

  return (
    <div className="top-emp-homepage">
        <div className="top-emp-title">
            Top Employers
        </div>
        <div className="list-emp-homepage">
            {topEmPs.map((emp=>
                <img src={emp.urlAvatar} className="logo-top-emp" alt='logo'/>
                ))}
        </div>
    </div>
  )
}
export default TopEmployer;