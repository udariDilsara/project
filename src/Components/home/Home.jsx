import React from 'react'
import Hbody from './Hbody'
import Hero from "./hero/Hero"
import Hprogram from './Hprogram'
import Hblog from './Hblog'
import Hcard from './Hcard'

const Home = () => {
  return (
    <>
        <Hero/>
        <Hbody/>
        <Hprogram/>
        
        <Hcard/>
        <Hblog/>
        
    </>
  )
}

export default Home