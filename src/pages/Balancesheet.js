import React, { Component } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

export default class Balancesheet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: "",
            type: "income",
            remark: "",
            transactions: [
                // { amount: 1000, type: "income", remark: "Salary" },                
            ]
        }
    }


    getCalculation = () => {
        let txns = [...this.state.transactions]
        let inc = 0;
        let exp = 0;
        txns.forEach(e => {
            if (e.type == "income") {
                inc += e.amount
            } else {
                exp += e.amount
            }
        })
        return {
            "income": inc,
            "expense": exp,
            "balance": inc - exp
        }
    }

    saveTxns = ()=>{
        let {amount, type, remark, token} = this.state

        if(amount != ""){
            if(type == "expense"){
                amount = parseInt(amount)
                let balance = this.getCalculation().balance
                if(amount > balance){
                    alert("invalid transaction")
                    return
                }                
            }

            let txn = { amount:parseInt(amount), type, remark}
            let txns = [...this.state.transactions]
            txns.push(txn)
            let txnToSave = {amount,  type, remark, token}
            axios.post("http://localhost:8083/transaction", txnToSave).then(data=>{
                toast("Successfully Inserted")
                this.getTransactions()
            }).catch(err=>{
                toast("Something went wrong")
            })
        }       
        
    }

    render() {
        let calc = this.getCalculation()
        return (
            <div className="container">
                <div className="text-right mt-3 text-primary"
                onClick={() => this.logout()}
                >logout</div>
                <div className="row mt-5">
                    <div className="col-md-3">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="amount"
                            value={this.state.amount}
                            onChange={(e) => this.setState({ amount: e.target.value })}
                        ></input>
                    </div>
                    <div className="col-md-3">
                        <select
                            className="form-control"
                            value={this.state.type}
                            onChange={(e) => this.setState({ type: e.target.value })}
                        >
                            <option value="income">Earning</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="remark"
                            value={this.state.remark}
                            onChange={(e) => this.setState({ remark: e.target.value })}
                        ></input>
                    </div>
                    <div className="col-md-3">
                        <button 
                        className="btn btn-block btn-primary"
                        onClick={this.saveTxns}
                        >Save</button>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Amount</th>
                                    <th>Type</th>
                                    <th>Remark</th>
                                </tr>

                            </thead>
                            <tbody>
                                {this.state.transactions.map((e, index) => {
                                    return (<tr key={index}>
                                        <td>{e.amount}</td>
                                        <td>{e.type}</td>
                                        <td>{e.remark}</td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="row mt-5">
                    <div className="col-md-6">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Total Income</td>
                                    <td>{calc.income}</td>
                                </tr>

                                <tr>
                                    <td>Total Expense</td>
                                    <td>{calc.expense}</td>
                                </tr>

                                <tr>
                                    <td>Balance</td>
                                    <td>{calc.balance}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <ToastContainer
                    position="bottom-center"                    
                />
            </div>
        )
    }

    async componentDidMount(){
        let token = await localStorage.getItem("token")
        this.setState({token})        
        this.getTransactions()
    }


    getTransactions = ()=>{
        axios.post("http://localhost:8083/get-transactions", {"token":this.state.token}).then(res=>{
            this.setState({transactions:res.data.data})            
        }).catch(err=>{
            toast(err)
        })
    }

    logout = ()=>{
        localStorage.removeItem("token")
        this.props.history.push('/')
    }
}
