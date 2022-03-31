import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer flex flex-col px-2 sm:flex-row justify-around py-16 text-white">
            <div className="flex flex-col">
                <a href="/a">About Swaty</a>
                <a href="/b">Policies</a>
                <a href="/c">Teams</a>
                <a href="/d">Returns and refunds</a>
            </div>
            <div className="flex flex-col mt-2 sm:mt-0">
                <a href="/a">Blog</a>
                <a href="/b">FAQ</a>
                <a href="/c">Feed Back</a>
                <a href="/d">Help Center</a>
            </div>
            <div className="mt-2 sm:ml-2">
                <h1 className="sm:text-center text-xl">Download Our App Now</h1>
                <div className="flex mt-4">
                    <a href="/a">
                        <img src={process.env.PUBLIC_URL + "../images/apple.png"} alt="" />
                    </a>
                    <a href="/b" className="ml-5">
                        <img src={process.env.PUBLIC_URL + "../images/android.png"} alt="" />
                    </a>
                </div>
            </div>
            <div className="mt-2 sm:ml-2">
                <h1>Fallow US</h1>
                <img src={process.env.PUBLIC_URL + "../images/social.png"} alt="" />
            </div>
        </div>
    )
}

export default Footer
