import React from "react"
import "./Program.css"
import { programCard } from "../../dummydata"

const ProgramCard = () => {
  return (
    <>
      <section className='programCard '>
        <div className="title"><h2>Our Program</h2></div>
        <div className='container grid2 '>
          {programCard.map((val) => (
            <div className='items '>
              <div className='content '>
                <div className='colomn'>
                  
                    <img src={val.cover} alt='' />
                  
                </div>
                <div className='text '>
                  <h1>{val.programName}</h1>
                  <div className='discription'>
                    <h3>{val.programDiscription}</h3>
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          
                          <img src={details.dcover} alt="" />
                          
                          
                        </div>
                        
                        <div className="inchage">
                        <h1 className="border1">{details.name}</h1>
                        
                        <h2 ><i className="fa fa-phone icon"></i>{details.tp}</h2>
                        <h2 ><i className="fa fa-envelope icon"></i>{details.email}</h2>
                        </div>
                        
                      </>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default ProgramCard
