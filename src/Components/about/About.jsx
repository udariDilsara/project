import React from 'react'
import Back from "../common/back/Back"
import AboutBody from './AboutBody'
const About = () => {
  return (
    <>
      <div className='back'>
      <Back subtitle='Educational Daycare, Childcare, Preschool & After-School in Sri Lanka' title='About Us' />
      </div>
      <div className='margin'></div>
      <AboutBody/>
    </>
  )
}

export default About