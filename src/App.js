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

import LoginPage from './Components/login/LoginPage'


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
          
          <Route path='/loginPage' exact component={LoginPage}/>

      </Switch>
      <Footer/>
      </Router>
    </>
  )
}

export default App