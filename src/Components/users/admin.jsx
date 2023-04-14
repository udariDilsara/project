import React from 'react'
import { Link } from "react-router-dom"

function admin() {
  return (
    <div className='App'>
            <div className='container'>
            <div name ="user">
                <h2>User</h2>
                <div name = "admin"></div>
                <div name = "childMinder"></div>
                <div name = "guardian"></div>
            </div>
            <div name = "staff">
                <h2><Link to = './staffBox'>Staff</Link></h2>
            </div>
            <div name = "class">
                <h2>Class</h2>
            </div>
            <div name = "child">
                <h2>Child</h2>
            </div>
            <div name="activity">
                <h2>Activity</h2>
            </div>
            <div name ="payment">
                <h2>Payment</h2>
            </div>
            </div>
        
    </div>
  )
}

export default admin