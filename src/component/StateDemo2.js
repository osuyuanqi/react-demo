import React, { Component } from "react";
class StateDemo2 extends Component {
  //method
  constructor() {
    super();
    this.state = { login: true };

    console.log(this);
  }
  render() {
    return (
      <div>
        <h1>you're currently logged {this.state.login ? "in" : "out"}</h1>
      </div>
    );
  }
}
export default StateDemo2;
