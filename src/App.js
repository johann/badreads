import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookContainer from "./containers/BookContainer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/books" render={props => <BookContainer {...props} />} />
      </div>
    );
  }
}

export default App;
