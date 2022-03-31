import React from 'react'

const Notification = () => {
    return (
        <div className="w-full">
            <h1 className=" text-center text-2xl">Notifications</h1>
            <div className="mt-3">
                <div className="flex items-center hover:bg-gray-300 pl-3">
                    <img src={process.env.PUBLIC_URL + "../images/delvr.png"} alt="" />
                    <p className="ml-3">ready to Deliver today</p>
                </div>
                <div className="flex items-center mt-2 hover:bg-gray-300 pl-3">
                    <img src={process.env.PUBLIC_URL + "../images/ghopa.png"} alt="" />
                    <p className="ml-3">Price Drop Grab Now</p>
                </div>
                <div className="flex items-center mt-2 hover:bg-gray-300 pl-3">
                    <img src={process.env.PUBLIC_URL + "../images/ghopa.png"} alt="" />
                    <p className="ml-3">35% of flat discount</p>
                </div>
                <div className="flex items-center mt-2 hover:bg-gray-300 pl-3">
                    <img src={process.env.PUBLIC_URL + "../images/spc.png"} alt="" />
                    <p className="ml-3">special product's</p>
                </div>
            </div>
            <a href="/b" className="text-center text-2xl block mt-4 bg-gray-500 py-1 text-white">All Notifications</a>
        </div>
    )
}

export default Notification
