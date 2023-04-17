import React from 'react'
import  { useEffect, useState } from "react";
import { Button } from 'react-bootstrap'
import { Link,useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import axios from "axios";

export default function UserBox() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8081/api/v1/user/getUsers");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8081/api/v1/user/delete/${id}`);
    loadUsers();
  };

  return (
    <div className='container mt-3'><h3>View Users</h3>
      <div className='mt-3 mb-5'>
        <Button variant="success"><Link to ='./addUser'>Add User</Link></Button>
      </div>

    <Table bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Role</th>
          <th>E-mail</th>
          <th>Salary</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {users.map((user, index) => (
        <tr >
          
          <th scope="row" key={index}> {index + 1} </th>
          <td>{user.userId}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.role}</td>
          <td>{user.email}</td>
          <td>{user.salary}</td>
          <td>{user.address}</td>
          <td>
          
            <Button variant="warning" to={`/edituser/${user.id}`}>Edit</Button>&nbsp;
            <Button variant="danger" className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.userId)}>Delete</Button>&nbsp;
          </td>
        </tr>
        ))}
        
      </tbody>
    </Table>
    </div>
  )
}

//export default userBox