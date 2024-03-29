import React, { Component } from "react";
import logo from "./ga.png";
import Account from "./Account";

class App extends Component {
  render() {
    return (
      <div id="content">
        <div id="nav">
          <div id="logo">
            <img src={logo} alt="General Assembly logo" />
          </div>
          <div id="title">Bank of GA</div>
        </div>
        <Account name={"Checkings"} />
        <Account name={"Savings"} />
        <div className="clear" />
      </div>
    );
  }
}

export default App;
