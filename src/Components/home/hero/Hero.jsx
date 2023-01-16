import React from 'react'
import "./Hero.css"
import Heading from "../../common/heading/Heading"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <>
    <section className='hero'>
      <div className='container flex'>
        <div  >
          <Heading subtitle='Educational Daycare, Childcare, Preschool & After-School in Sri Lanka' title='Play, Grow and Learn with L&U Child Care' />  
        </div>
      </div>
      <div className='button' id='heroButton'>
            <li><button>
                <Link to='/about'>Read more<i className='fa fa-long-arrow-alt-right'></i></Link>
            </button></li>
        </div>
    </section>
    <div className='margin'></div>
  </>
  )
}

export default Hero