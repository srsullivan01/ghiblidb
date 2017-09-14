import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

_searchMovie = async (e) => {
    e.preventDefault();
    const search = this.state.search
    const url = `https://ghibliapi.herokuapp.com/films?title=${search}`
    try {
        const res = await axios.get(url,
          { transformRequest: [(data, headers) => {
            delete headers['access-token']
            delete headers['uid']
            delete headers['client']
            delete headers['expiry']
            delete headers['token-type']
            delete headers.common
            return data;
          }]
        });
        await this.setState({movies: res.data.results})
    } catch (err) {
        console.log(err);
    }
};

_addMovie = (movie) => {
  const id = this.props.match.params.id
  const payload ={
      title: movie.title,
      director: movie.director,
      movie_id: movie.id,
      producer: movie.producer,
      release: movie.release_date,
  }
  try {
      const res = axios.post(`/api/movies/${id}/movies`, payload)
  } catch (err) {
      console.log(err);
  }
};

_handleChange = (e) => {
    const newState = {...this.state}
    newState[e.target.name] = e.target.value
    this.setState(newState)
};


render() {
  const id = this.props.match.params.id
  return (
  <div>
      <div className="row justify-content-center">
          Search for Movie
      </div>

      <div style={{textAlign: "center", marginBottom: "20px"}}>
          <Link to={`/movie_lists/${id}`}><button className="default-button">Back</button></Link>
      </div>

      <div className="row justify-content-center">
          <form>
              <div>
                  <input onChange={this._handleChange} type="text" name="search" value={this.state.search} />
                  <button onClick={this._searchMovie} className="default-button">Submit</button>
              </div>
          </form>
      </div>
      <div>Movies Found</div>
      <div className="row justify-content-center">
          {this.state.movies.map( (movie) => {
          return (
              <div key={movie.id}>
                  <div movie={movie} />
                  <div style={{display: "flex", justifyContent: "center"}}>
                      <button onClick={() => this._addMovie(movie)} className="default-button">Add Movie to List</button>
                  </div>
              </div>
          )
          })}
      </div>

    <div className="row justify-content-center">
        <Link to={`/movie_lists/${id}`}><button className="default-button">Back</button></Link>
    </div>
</div>
    );
  }
}
export default MovieSearch;
