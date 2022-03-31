import React from 'react'

const VendorData = () => {
    return (
        <div className=" w-1/5 flex flex-col items-center">
            <h1 className="text-2xl">Vendor Name</h1>
            <p className="mt-6">2734 subscriber</p>
            <div className="flex flex-col">
            <button className="bg-gray-400 px-10  text-xl rounded-full  mt-4">subscribe</button>
            <button className="bg-gray-400 px-10   text-xl  rounded-full mt-4">Message</button>
            </div>
            
        </div>
    )
}

export default VendorData
