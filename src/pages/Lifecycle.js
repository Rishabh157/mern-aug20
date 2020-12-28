import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(props){
        super(props)
        console.log("Lifecycle ::: Constructor")
        this.state = {
            data:[],
            isLoading:true,
        }

        //init state 
        //method binding with this

    }

    render() {
        //declare UI 
        console.log("Lifecycle ::: Render")
        return (
            <div>
                {this.state.isLoading ? "Loading..." :
                this.state.data.map(e=>{
                    return(<p>{e}</p>)
                })}
            </div>
        )
    }


    componentDidMount(){
        console.log("Lifecycle ::: ComponentDidMount")

        setTimeout(()=>{
            this.setState({data:['suyash', "deepti", "mayank", "priyanka"], isLoading:false})
        }, 5000)

        //network call
        //dom binding
        //loader disable
    }


    static getDerivedStateFromProps(props, state){        
        console.log("Lifecycle :: getDerivedStateFromProps")     
        return null
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Lifecycle ::: shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProp, preState){
        console.log("Lifecycle ::: getSnapshotBeforeUpdate")
    }

    componentDidUpdate(){
        console.log("Lifecycle ::: Component did update")
    }

    componentWillUnmount(){
        console.log("Lifecycle ::: Component will unmount")
    }
    
    

 


}


// Birth   => mount
// Update  => update
// Death   => unmount