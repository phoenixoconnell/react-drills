import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: ["bread", "milk", "butter"]
    };
  }
  
  render() {
    let listDisplay = this.state.list.map((element, index) => {
      return <h2 key = {index}>{element}</h2>
    });
      return <div className="App">{listDisplay}</div>
  }
}

export default App;
