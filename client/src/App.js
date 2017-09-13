import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/:id" component={Movie} />
      </div>
    </Router>
    );
  }
}

export default App;
