import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Header from './Header.jsx'
import '../assets/Css/styles.css'
import RoadEyeHomeLogo from '../assets/Images/Logo4home.svg'
import HomeImage from '../assets/Images/imagehomepage.jpeg'
import Footer from './Footer.jsx'



function Home() {
  return (
    <div >
      <div className="mainContainer">

        <Header/>
        <div className="container">
        <div className="text-content">
            <p className="intro">Introducing</p>
            <img src={RoadEyeHomeLogo} alt="" className="home_logo" />
            <p className="second-intro">Smart Vehicle Classifier</p>
            <p className="intro-info">
                we're excited to present smart vehicle classifier through computer vision and machine learning techniques,
                RoadEye offers real-time detection and classification of various vehicle types on the road.
                Join us on this journey as we pave the way for the future of smart mobility with RoadEye.
            </p>
            <Link to="/webapp" className="btn trynowbtn">Try Now</Link>
        </div>
        <div className="img-content">
            <img src={HomeImage} alt="" className="homeBackImage" />
            <div className="imageBlender"></div>
        </div>
            
      </div>
      </div>
      <Footer></Footer>
    </div>

  )
}

export default Home