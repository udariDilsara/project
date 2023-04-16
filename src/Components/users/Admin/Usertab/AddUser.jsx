import React, { useState } from "react";
import axios from "axios";
//import '';
import { Link } from "react-router-dom";

export default function AddUser () {
    const [firstname,setFirstName]= useState('');
    const [lastname,setLastName]= useState('');
    const [role,setRole]= useState('');
    const [username,setUserName]= useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [salary, setSalary] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8081/api/v1/user/save", {
          firstName: firstname,
          lastName:lastname,
          role:role,
          login_usename:username,
          login_pw:password,
          email: email,
          salary:salary,
          address:address
          
          });
          alert("User save Successfully");
 
        } catch (err) {
          alert(err);
        }
      }
  

    return (
        <div className="container">
            <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2>Add User</h2>
            <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">First name</label>
            <input value={firstname} name="firstname" onChange={(e) => setFirstName(e.target.value)} id="firstname" placeholder="first Name" class="form-control" />
            <label htmlFor="name">Last name</label>
            <input value={lastname} name="laststname" onChange={(e) => setLastName(e.target.value)} id="lastname" placeholder="last Name" class="form-control" />
            <label htmlFor="name">Role</label>
            <input value={role} name="role"  onChange={(e) => setRole(e.target.value)}id="role" placeholder="admin/guardian/childminder" class="form-control" />
            
            <label htmlFor="login-usename">Username</label>
            <input value={username} name="username" onChange={(e) => setUserName(e.target.value)} id="username" placeholder="username" class="form-control" />
            
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" class="form-control" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" class="form-control"  />
            <label htmlFor="address">Address</label>
            <input value={address} name="salary" onChange={(e) => setAddress(e.target.value)} id="address" placeholder="address" class="form-control" />
            <label htmlFor="salary">Salary</label>
            <input value={salary} name="salary" onChange={(e) => setSalary(e.target.value)} id="salary" placeholder="salary" class="form-control" />
            <Link to="/userBox"><button className="btn btn-outline-primary" type="submit" onClick={save}>Submit</button></Link>
            <Link  to="/userBox">
              <button className="btn btn-outline-danger ">Cancel</button>
            </Link>
            </form>
            </div>
        
         </div>
        </div>
    )
}