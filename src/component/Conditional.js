import React, { Component } from "react";
class ConditionalRendering extends Component {
    constructor(){
        super();
        this.state = {
            isLoading:true
        }
    }
  render() {
    return (
      <div>
        <h1>test</h1>
        <h2>demo</h2>
      </div>
    );
  }
}
export default ConditionalRendering;
