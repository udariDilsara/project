import React from "react"
import { online } from "../../dummydata"
import "../home/Home.css"

const Hcard = () => {
  return (
    <>
      <div className="margin1"></div>
      <div className=" container flexSB">
      <section className='online'>
        <div className='container'>
        
          <div className='content grid4'>
            {online.map((val) => (
              <div className='box'>
                <div className="iconRound" >
                  <img src={val.cover}  alt='icon'/>
                  
                </div>
                <h1>{val.programName}</h1>
                <span>{val.describe}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Hcard
