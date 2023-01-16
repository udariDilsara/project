import React from 'react'
import "../home/Home.css"
import { Hblogdata } from '../../dummydata'

const Hblog = () => {
  return (
    <>
      <div className='margin1'></div>
      <div className='title'> <h2>A Few from blog...</h2></div>
      <div className='container flexSB'>
      <div className='grid'>
      {Hblogdata.map((val) => (
          
          <div className='hblogImage '>
            <img src={val.image} alt="" />
          </div>
        ))}
      </div>
      </div>
      <div className='margin1'></div>
    </>
  )
}

export default Hblog