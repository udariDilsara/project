import React from 'react' 
import "./App.css"
import Header from  "./Components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Components/home/Home" 
import About from "./Components/about/About"
import ProgramHome from './Components/programs/ProgramHome'
import Blog from "./Components/blog/Blog"
import Contact from './Components/contact/Contact'
import Footer from './Components/common/footer/Footer'

import {LoginPage} from './Components/login/LoginPage'
import {Register} from './Components/login/Register'
import Admin from './Components/users/admin'
import activityBox from './Components/users/Admin/activityBox'
import childBox from './Components/users/Admin/childBox'
import UserBox from './Components/users/Admin/Usertab/UserBox'
import staffBox from './Components/users/Admin/staffBox'
import paymentBox from './Components/users/Admin/paymentBox'
import classBox from './Components/users/Admin/classBox'
import AddUser from './Components/users/Admin/Usertab/AddUser'
import ViewUser from './Components/users/Admin/Usertab/ViewUse'

const App = () => {
  
  return (
    <>
      <Router>
      <Header/>
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/aboutus' exact component={About}/>
          <Route path='/program' exact component={ProgramHome}/>
          <Route path='/blog' exact component={Blog}/>
          <Route path='/contact' exact component={Contact}/>
          <Route path='/register' exact component={Register}/>
          <Route path='/login' exact component={LoginPage}/>
          <Route path='/admin' exact component={Admin}/>
          <Route path='/activityBox' exact component={activityBox}/>
          <Route path='/childBox' exact component={childBox}/>
          <Route path='/userBox' exact component={UserBox}/>
          <Route path='/addUser' exact component={AddUser}/>
          <Route path='/staffBox' exact component={staffBox}/>
          <Route path='/classBox' exact component={classBox}/>
          <Route path='/paymentBox' exact component={paymentBox}/>
          <Route exact path="/viewuser/:id" element={ViewUser} />
      </Switch>
      <Footer/>
      </Router>
    </>
  )
}

export default App