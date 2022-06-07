// import logo from "./logo.svg";
import "./../App.css";
import React, { Component } from "react";

import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Joke from "./Joke";
import jokesData from "./jokesData";

class SmallApp1_FuncEdi extends Component {
  render() {
    // console.log(jokesData);
    // 1.data comes from here
    const jokesComponents = jokesData.map((joke) => (
      // 2.data passes to the Joke component, immutable and unchangable
      <Joke key={joke.id} detail={joke} />
    ));
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
export default SmallApp1_FuncEdi;
