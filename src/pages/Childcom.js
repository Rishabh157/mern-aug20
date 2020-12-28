import React, { Component } from 'react'

export default class Childcom extends Component {
    constructor(props) {
        console.log("ChildComp :: constructor")
        super(props)
    
        this.state = {
             
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log("ChildComp :: getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("ChildComp :: componentDidMount")
    }

    shouldComponentUpdate(props, state){
        console.log("ChildComp :: componentShouldUpdate")

        return true        
    }

    getSnapshotBeforeUpdate(props, state){
        console.log("ChildComp :: getSnapshotBeforeUpdate")        
        return null
    }

    componentDidUpdate(){
        console.log("ChildComp :: componentDidUpdate")        
    }


    componentWillUnmount(){
        console.log("ChildComp :: componentWillUnmount")        
    }

    
    render() {
        console.log("ChildComp :: render")

        return (
            <div>
                {this.props.count}
            </div>
        )
    }


}
