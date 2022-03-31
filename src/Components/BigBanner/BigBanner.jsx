import React from 'react'
import './BigBanner.css'

const BigBanner = () => {
    return (
        <div className=" BigBanner mt-4">
            <img src={process.env.PUBLIC_URL + "../images/bigBanner.png"} alt="" className="" />
        </div>
    )
}

export default BigBanner
