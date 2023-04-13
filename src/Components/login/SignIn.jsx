import React, { useState } from "react";
//import logo from './logo.svg';
import './Login.css';
import { LoginPage } from './LoginPage';
import { Register } from './Register';

function SignIn() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <LoginPage onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default SignIn;