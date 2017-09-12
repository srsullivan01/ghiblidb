import React, { Component } from 'react';
import axios from 'axios';


class Movie extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      characters: [],
    };
  }

  componentWillMount() {
    const movieId = this.props.match.params.id;
    this._fetchMovies(movieId)
  }

  _fetchMovies = async (movieId) => {
    try {
      const response = await axios.get(`/api/movies/${movieId}/characters`)
      await this.setState({movie: response.data.movie, characters: response.data.characters});
      return response.data;
    }
    catch (err) {
      await this.setState({error: err.message})
      return err.message
    }
  }

  render() {
    return (
      <div>
          <img src={this.state.movie.url} alt={this.state.movie.title} />
          <h1>{this.state.movie.title}</h1>
          <p>{this.state.movie.description}</p>
          <h2>Characters</h2>
          {this.state.characters.map(character => (
            <div key={character.id}>
              <h4>{character.name}</h4>
            </div>
          ))}
      </div>
    );
  }
}

export default Movie;
