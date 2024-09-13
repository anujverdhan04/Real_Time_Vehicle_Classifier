import React from 'react'
import Header from './Header'
import AboutImage from '../assets/Images/test.png'

function About() {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="text-content">
                    <p className='about-txt'>
                        We're excited to present a novel solution that revolutionizes how we perceive and manage vehicular traffic.
                         Through computer vision and machine learning techniques, RoadEye offers real-time detection and classification 
                         of various vehicle types on the road. From cars to trucks, motorcycles to bicycles, our project provides invaluable 
                         insights for traffic management, parking optimization, law enforcement, and urban planning. Join us on this journey 
                         as we pave the way for the future of smart mobility with RoadEye.
                    </p>
                    <p>
                        {/* it is a major project of B.tech,
                        Team: Riyanshu Negi, Anuj verdhan, Deepak, Vedica */}
                    </p>
                </div>
                <div className="img-content">
                    <img className='about-image' src={AboutImage} alt="" />
                </div>
            </div>
        </div>

    )
}

export default About