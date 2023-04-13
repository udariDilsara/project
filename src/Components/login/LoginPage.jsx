import React, { useState } from "react";
import { Link, useHistory, useNavigate } from 'react-router-dom';
import axios from "axios";
import './Login.css';

export const LoginPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history =useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    async function login(event) {
      event.preventDefault();
      try {
        await axios.post("http://localhost:8081/api/v1/user/login", {
          email: email,
          password: password,
          }).then((res) =>
          {
           console.log(res.data);
          
           if (res.data.message == "Email not exits")
           {
             alert("Email not exits");
           }
           else if(res.data.message == "Login Success")
           {
              
              history.push('/admin');
           }
            else
           {
              alert("Incorrect Email and Password not match");
           }
        }, fail => {
         console.error(fail); // Error!
});
      }

       catch (err) {
        alert(err);
      }
    
    }
    return (
        <div className="App">
          <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" class="form-control"/>
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" class="form-control" />
                <button type="submit" class="btn btn-primary" onclick={login}>Log In</button>
            </form>
            <button className="link-btn" >Don't have an account? <Link to="/register">Register here.</Link></button>
        </div>
        </div>
    )
}