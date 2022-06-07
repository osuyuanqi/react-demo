import react, { Component } from "react";
class StateDemo1 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    console.log(this);
  }
  handleClick() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }
  render() {
    return (
      <div>
        <h1> {this.state.count}</h1>
        <button onClick={this.handleClick}>click me</button>
      </div>
    );
  }
}
export default StateDemo1;
