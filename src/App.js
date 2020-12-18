import React, { Component } from 'react'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import './assets/css/style.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/home" component={Home}/>
        <Route path="/portfolio" component={Portfolio} />
      </Router>
    )
  }
}
