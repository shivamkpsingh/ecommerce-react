import React from 'react'

const ButtonGroup = () => {
    return (
        <div className="flex sm:justify-between flex-col sm:flex-row">
            <button className="bg-yellow-300 px-6 py-2 rounded shadow-xl mt-3">ADD TO CARD</button>
            <button className="bg-yellow-300 px-6 py-2 rounded shadow-xl mt-3">BUY NOW</button>
            <button className="bg-red-400 px-6 py-2 rounded shadow-xl mt-3">VIRTUAL TRYON</button>
            <button className="bg-yellow-300 px-6 py-2 rounded shadow-xl mt-3">CUSTOMISE</button>
        </div>
    )
}

export default ButtonGroup
