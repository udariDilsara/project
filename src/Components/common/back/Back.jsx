import React from "react"

const Back = ({ subtitle, title }) => {
  return (
    <>

      <div className='back flex'>
      <div id='heading'>
        <h1>{title} </h1>
        <h2 >{subtitle} </h2>
        
      </div>
      </div>
      <div className='margin'></div>
    </>
  )
}

export default Back
