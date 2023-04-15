import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom"

function admin() {
  return (
    <div className='App'>
        
            <div className='container'>
            {<h2>Admin Dashborad</h2> }
            <div name ="user">
                {/* <h2>User</h2> */}
                <Button variant="light"><Link to = './userBox'>User</Link></Button>
                
            </div>
            <br/>
            <div name = "staff">
            <Button variant="light"><Link to = './staffBox'>Staff</Link></Button>
            </div><br/>
            <div name = "class">
            <Button variant="light"><Link to = './classBox'>Class</Link></Button>
            </div><br/>
            <div name = "child">
            <Button variant="light"><Link to = './childBox'>Child</Link></Button>
            </div><br/>
            <div name="activity">
            <Button variant="light"><Link to = './activityBox'>Activity</Link></Button>
            </div><br/>
            <div name ="payment">
            <Button variant="light"><Link to = './paymentBox'>Payment</Link></Button>
            </div>
            </div>
                
    </div>
  )
}

export default admin