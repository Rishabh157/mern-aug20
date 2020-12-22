import React, { Component } from 'react'

export default class Addportfolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imgUrl: "",
            category: "",
            projectName: "",
            portfolio: [
                // { projecrtName: "abc", imgUrl: "", category: "" }
            ]

        }
    }

    handleSumbit = () => {
        let { imgUrl, category, projectName } = this.state
        let portfolio = { imgUrl, category, projectName }
        let prevPort = [...this.state.portfolio]
        prevPort.push(portfolio)
        this.setState({portfolio:prevPort, imgUrl:"", category:"", projectName:""})
    }

    render() {
        return (
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Image URL</label>
                    <input
                        type="url"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="example.com"
                        value={this.state.imgUrl}
                        onChange={(e) => {
                            this.setState({ imgUrl: e.target.value })
                        }}
                    />
                </div>


                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput2" className="form-label">Category</label>
                    <select className="form-control"
                        value={this.state.category}
                        onChange={(e) => {
                            this.setState({ category: e.target.value })
                        }}>
                        <option value="web">Web</option>
                        <option value="mobile">Mobile</option>
                        <option value="iot">IOT</option>
                    </select>
                </div>


                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput3" className="form-label">Project Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput3"
                        placeholder="Project Name"
                        value={this.state.projectName}
                        onChange={(e) => {
                            this.setState({ projectName: e.target.value })
                        }}
                    />
                </div>

                <div>
                    <button
                        className="btn btn-block btn-primary"
                        onClick={this.handleSumbit}
                    >Save</button>
                </div>

                <div className="col-md-12 mt-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Project Img</th>
                                <th>Project Name</th>
                                <th>Project Category</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.portfolio.map((el, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img
                                                src={el.imgUrl}
                                                width="50px"
                                                height="50px"
                                            ></img>
                                        </td>

                                        <td>
                                            {el.projectName}
                                        </td>

                                        <td>
                                            {el.category}
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>

                    </table>
                </div>

            </div>
        )
    }
}
