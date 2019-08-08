import React, { Component } from "react";

class Account extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0
    };
  }

  depositCash = e => {
    const cashIn = parseInt(this.refs.amount.value);

    this.setState({
      balance: this.state.balance + cashIn
    });
  };

  withdrawCash = e => {
    const cashOut = parseInt(this.refs.amount.value);
    if (cashOut > this.state.balance) {
      return false;
    }

    this.setState({
      balance: this.state.balance - cashOut
    });
  };

  render() {
    let balanceClass = "balance";
    if (this.state.balance === 0) {
      balanceClass = "zero";
    }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>{this.state.balance}</div>
        <input type="text" ref="amount" placeholder="enter an amount" />
        <button onClick={this.depositCash}>Deposit</button>
        <button onClick={this.withdrawCash}>Withdraw</button>
      </div>
    );
  }
}

export default Account;
