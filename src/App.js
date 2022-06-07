import "./App.css";
import React, { Component } from "react";
// import SmallApp1_FuncEdi from "./component/SmallApp1_FuncEdi";
// import SmallApp2_ClassEdi from "./component/SmallApp2_ClassEdi";
import StateDemo1 from "./component/StateDemo1";
import StateDemo2 from "./component/StateDemo2";
import Conditional from './component/Conditional'

class App extends Component {
  //method
  constructor() {
    super();
    this.state = { login: false };

    console.log(this);
  }
  render() {
    return (
      <div>
        {/* <SmallApp1_FuncEdi />
        <SmallApp2_ClassEdi /> */}
        <StateDemo1 />
        <StateDemo2 />
      </div>
    );
  }
}
export default App;
