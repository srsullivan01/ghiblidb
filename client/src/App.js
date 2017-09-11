import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div>
          <h1>Studio Ghibli Database</h1>
          <div>
            <Link to="/">Movies</Link>
            <Link to="/movie/1">Specific Movie</Link>
          </div>
        </div>
        <Route exact path="/" component={MovieList} />
        <Route path="/moive/:id" component={Movie} />
      </div>
    </Router>
    );
  }
}

export default App;
