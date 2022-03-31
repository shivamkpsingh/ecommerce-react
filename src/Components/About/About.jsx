import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className="about p-2 md:p-4 rounded-tl-3xl rounded-tr-3xl">
            <p className=" md:px-10">Quisque eget semper leo. Vivamus sed mi ut massa viverra ultricies non a purus. Cras dolor risus, ullamcorper quis tempor eget, vulputate ut arcu. Suspendisse sapien arcu, volutpat nec porttitor ut, tempus eu felis. Mauris quis sem varius, molestie lorem nec, maximus turpis. </p>
            <p className="mt-5  md:px-10">Quisque eget semper leo. Vivamus sed mi ut massa viverra ultricies non a purus. Cras dolor risus, ullamcorper quis tempor eget, vulputate ut arcu. Suspendisse sapien arcu,</p>
            <h1 className="text-center text-lg sm:text-2xl">Become a Partner with Swaty</h1>
            <a href="/a" className=" flex justify-center py-2 px-12 fit text-lg">JOIN US</a>
        </div>
    )
}

export default About
