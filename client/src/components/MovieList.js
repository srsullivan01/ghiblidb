import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class MovieList extends Component {
  constructor(){
    super();
    this.state = {
      error: '',
      movies: []
    }
  }
  componentWillMount(){
    this._fetchMovies();
  }

  _fetchMovies = async () => {
    try {
      const res = await axios.get('https://ghibliapi.herokuapp.com/films');
      await this.setState({movies: res.data});
      return res.data
    }
    catch (err) {
      console.log(err)
      await this.setState({error: err.message})
      return err.message
    }

  }
  render() {
    if (this.state.error){
      return <div>{this.state.error}</div>
    }
    return (
      <div>
        <h1>All Ghibli Films</h1>
        {this.state.movies.map(movie => (
          <div>
            <Link to={`/movies/${movie.id}`} > {movie.title} </Link>
          </div>
        ))}
      </div>
    );
  }
}
export default MovieList;
