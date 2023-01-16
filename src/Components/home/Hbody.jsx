import React from 'react'
import "../about/about.css"
import { Hbodydata } from '../../dummydata'

const Hbody = () => {
  return (
    <>
        <section className='aboutHome'>
        <div className="margin1"></div>
        
        {Hbodydata.map((val) => (
            <>
                <div className='margin1'></div>
                <div className='title'><h2>{val.titl}</h2></div>
                <div className='container flexSB'>
                <div className='row '>
                    <img className='leftImage' src={val.cover} alt='' />
                </div>
                <div className='right row'>
                    <p>{val.Description}</p>
                </div>

        
                </div>
                <div className='margin1'></div>
            </>
            
            
        ))}
            
            
      
        
    
          
        
      </section>
    </>
  )
}

export default Hbody