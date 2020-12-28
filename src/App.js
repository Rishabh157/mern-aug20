import React, { Component } from 'react'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Addportfolio from './pages/Addportfolio'
import Balancesheet from './pages/Balancesheet'
import Lifecycle from './pages/Lifecycle'
import Childcom from './pages/Childcom'
import './assets/css/style.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends Component {
  constructor(props) {
    console.log("Parent(App) :: constructor")
    super(props)
  
    this.state = {
       isDisplay:true,
       count:0
    }
  }


  static getDerivedStateFromProps(props, state){
    console.log("Parent(App) :: getDerivedStateFromProps")
    return null
}

componentDidMount(){
    console.log("Parent(App) :: componentDidMount")
}

shouldComponentUpdate(props, state){
    console.log("Parent(App) :: componentShouldUpdate")

    return true        
}

getSnapshotBeforeUpdate(props, state){
    console.log("Parent(App) :: getSnapshotBeforeUpdate")        
    return null
}

componentDidUpdate(){
    console.log("Parent(App) :: componentDidUpdate")        
}


componentWillUnmount(){
    console.log("Parent(App) :: componentWillUnmount")        
}

  
  render() {
    console.log("Parent(App) :: render")        

    return (
      <>
      {this.state.isDisplay ? <Childcom count={this.state.count}/> : null}
      <button onClick={this.handleCounter}>Increse Counter</button>
      <button onClick={()=>{
        this.setState({isDisplay:false})
      }}>Hide Counter</button>
      </>
    )
  }

  handleCounter = ()=>{
    let oldCounter = this.state.count
    oldCounter++
    this.setState({count:oldCounter})
  }


  

}





 // <Router>
      //   <Route path="/balance" component={Balancesheet}/>
      //   <Route path="/" component={Home} exact/>        
      //   <Route path="/portfolio" component={Portfolio} />
      //   <Route path="/add-portfolio" component={Addportfolio} />
      // </Router>