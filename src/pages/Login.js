import React, { Component } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';



export default class Login extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            email: "",
            password: ""
        }
    }

    render() {
        return (
            <div className="">
                <div className="row h100 d-flex justify-content-center align-items-center m-0">
                    <div className="col-md-4 border p-5">
                        <h2 className="text-center">Login</h2>
                        <label>Email</label>
                        <input
                            type="text" className="form-control"
                            onChange={(e) => { this.setState({ email: e.target.value }) }}
                        />

                        <label className="mt-4">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            onChange={(e) => { this.setState({ password: e.target.value }) }}
                        />

                        <button className="btn btn-primary btn-block mt-5" onClick={() => this.login()}>Login</button>
                    </div>
                </div>

                <ToastContainer
                    position="bottom-center"                    
                />
            </div>
        )
    }


    login = () => {
        let {email, password} = this.state
        let url = "http://localhost:8083/login"
        let data = {
            email, password
        }
      
        axios.post(url, data).then(res => {
            let data = res.data
            if(data.status != "OK"){
                toast(data.msg)
            }else{                
                localStorage.setItem("token", data.data.token)
                this.props.history.push('/balance')
            }
        }).catch(err=>{
            toast("Check Internet connection")
        })


    }
}

