import React from 'react'
import "../home/Home.css"
import {Hprogramdata} from "../../dummydata"
import { Link } from "react-router-dom"

const Hprogram = () => {
  return (
    <>
        <div className='title'> <h2>our programs</h2></div>
        <div className='container flexSB'>
          
        <div className='grid3'>
        {Hprogramdata.map((val) => (
           
           <div className='hProgramImg'>
           <img  src={val.cover} alt="" />
           <h1>{val.title}</h1>
           <div className=' outline-btn ' >
                <h1><Link to='/program'>Read more <i className='fa fa-long-arrow-alt-right'></i></Link></h1>
                
            </div>
           </div>
       
       

        ))}   
        </div>

          
        </div>
        
    </>
  )
}

export default Hprogram