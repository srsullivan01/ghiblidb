import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";
import SignUpLogIn from "./components/SignUpLogIn";

import { setAxiosHeaders } from './util';
import './App.css';

class App extends Component {
  componentWillMount(){
    setAxiosHeaders();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

        <Route exact path="/signUp" component={SignUpLogIn}/>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/:id" component={Movie} />
      </div>
    </Router>
    );
  }
}

export default App;
