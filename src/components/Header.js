import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-md-12 bg-banner mb-5 d-flex justify-content-center align-self-end">
                <div className="circle positioned text-center" >
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHpr1C7TMYWaw/profile-displayphoto-shrink_200_200/0/1517343646289?e=1613606400&v=beta&t=8Ah34s5h3eWNvRSuBXN8jQgZT7A6bqMYabIHt36i1SI" />
                </div>                    
            </div>

            <div className="col-md-12">
            <p className="display-3 mt-5 text-center"> Suyash Kumar</p>
            <p className="text-center">Entrepreneur | Tech Lover | Tech Coach | Traveller</p>
            {/* <ul>
                <li>
                    <Link to="/home"> Home </Link>                    
                </li>
                <li>
                <Link to="/portfolio"> Portfolio </Link>
                </li>
            </ul> */}
            </div>
            
        </div>   
        )
    }
}
