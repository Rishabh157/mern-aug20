import React, { Component } from 'react'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Addportfolio from './pages/Addportfolio'
import Balancesheet from './pages/Balancesheet'
import Lifecycle from './pages/Lifecycle'
import Childcom from './pages/Childcom'
import Posts from './pages/Posts'
import Login from './pages/Login'
import './assets/css/style.css'
import 'react-toastify/dist/ReactToastify.css';


import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <Route path="/" component={Login} exact/>        
        <Route path="/balance" component={Balancesheet} />                
      </Router>
    )
  }






}



