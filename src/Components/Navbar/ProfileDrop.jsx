import React from 'react'
import { Link } from 'react-router-dom'

const ProfileDrop = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-xl">Profile</h1>
            <div className="flex flex-col pl-6 mt-2">
                <Link to="/userprofile" className="">Edit Profile</Link>
                <Link to="/myorder" className="mt-2">My Orders</Link>
                <Link to="/track-my-order" className="mt-2">Track My Orders</Link>
                <Link to="/saveforlater" className="mt-2">Save for later</Link>
                <Link to="/wallet" className="mt-2">Wallet</Link>
                <Link to="/measurnment" className="mt-2 mb-2">Measurnment</Link>
            </div>
        </div>
    )
}

export default ProfileDrop
