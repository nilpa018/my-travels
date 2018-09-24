import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels with React</h1>
        </header>
        <Quote
          ville="Venise"
          pays="Italie"
          image="https://data.fou-de-puzzle.com/grafika.133/grafika-01207-venise-1000-pieces--puzzle.52368-1.jpg"
          distance="706 kms"
        />
        <Quote
          ville="Moscou"
          pays="Russie"
          image="http://data.fou-de-puzzle.com/m21/p60424/p1.jpg"
          distance="2978 kms"
        />
      </div>
    );
  }
}

export default App;
