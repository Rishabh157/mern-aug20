import React, { Component } from 'react'

export default class Portfolioitem extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="portfolio-item">
                    <img src={this.props.img} width="100%" />
                </div>
                <div>
                    <p className="text-center">{this.props.projectName}</p>
                </div>
            </React.Fragment>
        )
    }
}
