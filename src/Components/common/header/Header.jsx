import React, { useState } from "react"
import { Link } from "react-router-dom"

import "./Header.css"


const Header = () => {
    const [click, setClick] = useState(false)


  return (
    <>
        
        <header>
        <nav className='flexSB'>
          <div className="logo"><Link to="/"><img src="../LOGO2.png" alt="LOGO"  /></Link></div>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            
            <li>
              <Link to='/program'>Program</Link>
            </li>
            
            <li>
              <Link to='/aboutUs'>About Us</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>

            <li><button ><Link to='/loginPage'>SIGN IN</Link></button></li>
          </ul>
         
            
          
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
 }


export default Header