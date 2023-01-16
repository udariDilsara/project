import React from "react"

const Heading = ({ subtitle, title }) => {
  return (
    <>
      <div id='heading'>
        
        <h1>{title} </h1>
        <h2 >{subtitle} </h2>
      </div>
    </>
  )
}

export default Heading
