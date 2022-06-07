// import logo from "./logo.svg";
import "./../App.css";
import React, { Component } from "react";
import jokesData from "./jokesData";
class Header extends Component {
  render() {
    return (
      <header>
        <h3>this is my header</h3>
      </header>
    );
  }
}

class Footer extends Component {
  render() {
    let firstname = "raymond",
      lastname = "yuan";
    return (
      <footer>
        <h3 className="ft">this is {`${firstname} ${lastname}`} footer</h3>
      </footer>
    );
  }
}

class Joke extends Component {
  render() {
    return (
      <div className="joke-card">
        <h3 style={{ display: this.props.detail.question ? "block" : "none" }}>
          questin: {this.props.detail.question}
        </h3>
        <h3>{this.props.detail.answer}</h3>
      </div>
    );
  }
}
class MainContent extends Component {
  render() {
    const date = new Date(2022, 6, 5, 10);
    const hours = date.getHours();
    let daytime;
    // console.log(hours);
    const styles = {
      fontSize: 10,
      color: "#ff0033",
    };
    if (hours > 12) {
      daytime = "afternoon";
      styles.color = "#09050b";
      styles.backgroundColor = "#88aabb";
    } else {
      daytime = "morning";
      styles.color = "#000fff";
      styles.backgroundColor = "#5588bb";
    }
    return (
      <ul>
        <li style={styles}>Good,{daytime}</li>
        <li>2</li>
        <li>3</li>
      </ul>
    );
  }
}

class SmallApp2_ClassEdi extends Component {
  render() {
    // console.log(jokesData);
    // 1.data comes from here
    const jokesComponents = jokesData.map((joke) => (
      // 2.data passes to the Joke component, immutable and unchangable
      <Joke key={joke.id} detail={joke} />
    ));
    // console.log(jokesComponents);
    return (
      <div>
        <Header />
        <MainContent />
        {/* 3. data goes on passing */}
        {jokesComponents}
        <Footer />
      </div>
    );
  }
}
export default SmallApp2_ClassEdi;
