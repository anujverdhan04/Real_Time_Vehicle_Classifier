import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {

    const GitLink = () => {
        window.open('https://github.com/RiyanshuNegi/RoadEye', '_blank');
      };
    
  return (
    
      
      <div className='footer-github-link' onClick={GitLink}>Github 
        
        <img className='github-icon' width="24" height="24" 
        src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/FFFFFF/external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo.png"
        alt="external-github-with-cat-logo-an-online-community-for-software-development-logo-bold-tal-revivo"/>
        
         </div>
  )
}

export default Footer