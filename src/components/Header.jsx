import React from 'react'
import RoadEyeLogo from '../assets/Images/Logo.svg'
import {Link, NavLink} from 'react-router-dom'
import '../assets/Css/styles.css'

function Header() {
  return (
    <div>
        <div className="header">
            <div className="logo" >
                <Link to="/" >
                    <img  className='logoImage' src={RoadEyeLogo} alt="" />
                </Link>
            </div>
            <Link to="/about" className='about-btn'>About</Link>

        </div>    
    </div>

  )
}

export default Header