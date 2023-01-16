import React from "react"
//import Heading from "../common/heading/Heading"
import "./about.css"
//import { homeAbout } from "../../dummydata"
//import Awrapper from "./Awrapper"
//import "./frontend/public/about/pic5.png"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className="margin1"></div>
        
            <h2  className="title">About Us</h2>
        
      
        <div className='container flexSB'>
            
          <div className='left row'>
            <img src='.\about\pic5.png' alt='' />
          </div>
          <div className='right row'>
          
            <p>We believe in providing a safe and nurturing environment for every child and while allowing children to express 
themselves however they wish. At Educare's Preschool and Daycare, we foster early childhood development by allowing our 
tiny ones to be who they 
are "children".</p>
            
               
          </div>
        </div>
        <div className="margin1"></div>
        <div className='container flexSB'>
          <p>Our Child Care and Pre School Centre provide an informal atmosphere 
          and a child-oriented, developmentally appropriate curriculum where 
          children learn through play and the exploration of their environment. We 
          believe in giving children opportunities to become independent and 
          successful in his/her environment. This will enable them to successfully 
          solve problems and to learn expressing their ideas and feelings.</p>
      </div>
      ​<div className='container flexSB'>
        <p>
        As research has shown, children's play is the essential component of a 
        developmentally appropriate curriculum. We plan, promote and deliver 
        activities that consider the developmental stage, individual ability and 
        interest of each child.</p>
                </div>
      </section>
      
    </>
  )
}

export default AboutCard
