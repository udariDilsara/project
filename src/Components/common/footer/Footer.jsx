//import React, { useState } from "react"
import { Link } from "react-router-dom"
//import Head from "./Head"
//import "../header/Header.css"
import "../footer/footer.css"



const Footer = () => {
    


  return (
    <>
        
        <footer>
        <nav className='flexSB'>
            <div className="left row">
            <div className="logo"><img src="../LOGO2.png" alt="LOGO"  /></div>
            </div>
            <div className="right row">
            <ul className="flex">  
                <li>
                <Link to='/contact'>Contact</Link>
                </li>
                
                <li>
                <Link to='/aboutUs'>About Us</Link>
                </li>
                <li>
                <Link to='/aboutUs'>FAQs</Link>
                </li>
                <li><i className="fab fa-facebook-f icon"></i></li>
                <li><i className="fab fa-instagram icon"></i></li>
                <li><i className="fab fa-twitter icon"></i></li>
                
                <li><i className="fab fa-tiktok icon"></i></li>
            </ul>
            </div>
            
            
          
   
          
        </nav>
      </footer>
    </>
  )
 }


export default Footer