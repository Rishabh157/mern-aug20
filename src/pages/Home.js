import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                     <Header/>      
                     <div className="row">
                         <div className="col-md-6 about-img">
                             <img src="https://images.unsplash.com/photo-1608093602525-45b7d7b320e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="suyash-kumar"/>
                         </div>
                         <div className="col-md-6">
                             <p>
                             Currently:

                                Software Engineer at Google, bringing modern technologies to healthcare.
                                Previously:

                                Co-founder & CTO Gradient Health, a healthcare company that built a platform for clinical machine learning.
                                Associate Instructor in the Duke Dept. of Biomedical Engineering, where I taught Medical Software Design
                                CTO of MicroElastic Ultrasound Systems which, spun out of research I was involved in during undergrad. Company won NIH STTR ph I & II grants.
                                Software Engineer at Uber where I built scalable systems and products using Go, React, Cassandra, Python, and more.
                                I graduated from Duke University where I double-majored in Biomedical Engineering and Computer Science.

                                Previous research work:

                                CRISPR/Cas9 mediated genome editing to probe appendage morphogenesis in Parhyale Hawaiensis
                                The genome of the crustacean Parhyale hawaiensis...
                                Ultrasonic Elastography Device Development (undergrad ind. study)
                                <br/>
                                <Link to="/portfolio">See my portfolio</Link>
                             </p>
                         </div>
                     </div>
            </div>
        )
    }
}
