import React, { Component } from 'react'
import Header from '../components/Header'
import Portfolioitem from '../components/Portfolioitem'

export default class Portfolio extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            projects:[
                { imgURL: "https://images.unsplash.com/photo-1606851094291-6efae152bb87?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", projectName: "Heartbeat Sensor mobile 1 ", category:"mobile" },
                { imgURL: "https://images.unsplash.com/photo-1606851094291-6efae152bb87?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", projectName: "Heartbeat Sensor mobile 2 ", category:"mobile" },
                { imgURL: "https://images.unsplash.com/photo-1606851094291-6efae152bb87?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", projectName: "Heartbeat Sensor web 1", category:"web" },
                { imgURL: "https://images.unsplash.com/photo-1606851094291-6efae152bb87?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", projectName: "Heartbeat Sensor iot 1 ", category:"iot" },
                { imgURL: "https://images.unsplash.com/photo-1606851094291-6efae152bb87?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", projectName: "Heartbeat Sensor web 2", category:"web" },
                { imgURL: "https://images.unsplash.com/photo-1606851094291-6efae152bb87?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", projectName: "Heartbeat Sensor iot 2", category:"iot" },
            ],
            filter:"iot"
        }
    }
    


    render() {       
        
        return (
            <div className="container">
                <Header />
                <hr/>
                <ul className="list-unstyled d-flex justify-content-between px-5 portfolio-cats">
                    <li className={"list-unstyled-item", this.state.filter == "mobile" ? "portfolio-active" : ""} onClick={
                        ()=>{
                            this.setState({filter:"mobile"})
                        }
                    }>Mobile</li>
                    <li className={"list-unstyled-item", this.state.filter == "web" ? "portfolio-active" : ""}
                    onClick={()=>{
                        this.setState({filter:"web"})
                    }}
                    >Website</li>
                    <li className={"list-unstyled-item", this.state.filter == "iot" ? "portfolio-active" : ""} onClick={()=>{
                        this.setState({filter:"iot"})
                    }}>IOT</li>
                </ul>
                <hr/>
                <div className="row mt-5">
                    {this.state.projects.map((elem, index, arr) => {
                        return (elem.category == this.state.filter ? (<div className="col-md-3">
                        <Portfolioitem
                            img={elem.imgURL}
                            projectName={elem.projectName}
                        />
                    </div>): null)
                    })}
                </div>
            </div>



        )
    }
}
