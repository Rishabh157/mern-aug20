import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'

export default class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             email:"",
             password:""
        }
    }
    
    register = ()=>{
        let {username, email, password} = this.state
        axios.post('http://localhost:8083/register', {username, email, password}).then(data=>{
            let resData = data.data
            if(resData.status != "OK"){
                //err msg
                toast(resData.msg)
            }else{
                //scs 
                this.props.history.push('/')
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    async componentDidMount(){
        let token = await localStorage.getItem("token")
        if(token != undefined){
            this.props.history.push('/balance')
        }
    }

    render() {
        return (
            
                 <div className="">
                <div className="row h100 d-flex justify-content-center align-items-center m-0">
                    <div className="col-md-4 border p-5">
                        <h2 className="text-center">Register</h2>
                        
                        <label>Username</label>
                        <input
                            type="text" className="form-control"
                            value={this.state.username}
                            onChange={(e) => { this.setState({ username: e.target.value }) }}
                        />

                        <label className="mt-4"> Email </label>
                        <input
                            type="text" className="form-control"
                            value={this.state.email}
                            onChange={(e) => { this.setState({ email: e.target.value }) }}
                        />

                        <label className="mt-4">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={this.state.password}
                            onChange={(e) => { this.setState({ password: e.target.value }) }}
                        />
                        <button className="btn btn-primary btn-block mt-5" onClick={() => this.register()}>Register</button>
                        Already registered? <Link to="/">Login here</Link>
                    </div>
                </div>

                <ToastContainer
                    position="bottom-center"                    
                />
            </div>
            
        )
    }
}
