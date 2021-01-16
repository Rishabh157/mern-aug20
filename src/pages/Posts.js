import React, { Component } from 'react'
import axios from 'axios';

export default class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    render() {
        return (
            <div>
                {this.state.posts.map(e => {
                    return (<div>
                        <h1>{e.title}</h1>
                        <p>{e.body}</p>
                    </div>)
                })}
            </div>
        )
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            console.log("Response recieved")
            console.log(res.data)
            this.setState({posts:res.data})
        }).catch(err=>{
            console.log(err)
        })
    }
}
