import React from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";

function userForm(){
    return (
        <div className=" container mt-3 mb-3">
           <h3>Add user</h3>

           <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="email" placeholder="Enter first name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="password" placeholder="Enter last name" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>E-mail</Form.Label>
        <Form.Control placeholder="aseddfujj@gmail.com" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Username</Form.Label>
          <Form.Control placeholder="username" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Salary</Form.Label>
          <Form.Control placeholder="salary"/>
        </Form.Group>

      </Row>
      
      <Button variant="success" type="submit"><Link to ='./userBox'>Submit</Link>   
      </Button>
    </Form>
        </div>
    )
}
export default userForm