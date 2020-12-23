import React, { Component } from 'react'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Addportfolio from './pages/Addportfolio'
import Balancesheet from './pages/Balancesheet'

import './assets/css/style.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/balance" component={Balancesheet}/>
        <Route path="/" component={Home} exact/>        
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/add-portfolio" component={Addportfolio} />
      </Router>
    )
  }
}
