import React, { Component } from 'react'

export default class Approach extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isClicked:false
        }
    }
    
    render() {
        return (
            <>
                <div className={ this.state.isClicked ? "mydiv bg-red" : "mydiv"}>
                </div>

                <button onClick={()=>{
                    this.setState({isClicked:true})
                }}>change bg</button>
            </>

        )
    }
}
