import React, { Component } from "react";
import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
class App extends Component {
  render() {
    return (
      <div>
        <Header username="hhh" />
        <Greeting />
      </div>
    );
  }
}
class Header extends Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}</p>
      </header>
    );
  }
}
class Greeting extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    console.log(hours);
    let timeOfDay;
    if (hours < 12) {
      timeOfDay = "Morning";
    } else {
      timeOfDay = "Afternoon";
    }
    return <h1>Good {timeOfDay} to you, Sir or Madam!</h1>;
  }
}
// ReactDom.render(<App />, document.getElementById("root"));

// const container = document.getElementById("root");
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);
