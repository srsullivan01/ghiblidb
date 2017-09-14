import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Comment from "./Comment";
import CommentCard from "./CommentCard";
import CommentList from "./CommentList";
import styled from 'styled-components';
import axios from 'axios';


const MovieContainer = styled.div`
display: flex;
justify-content: space-around;
flex-direction: row;
flex: 1;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  border: 1px solid;
  border-color: #74787B;
  background-color: rgba(235, 227, 213, 0.5);
  color: #000000;
  flex: 0 0 12em;
  margin: 2.5%;
`;

const Synopsis = styled.div`
display: flex;
flex-direction: column;
padding: 2.5%;
flex: 1;
h1{
  color: #072A5A;
}
`;



// Component
class Movie extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      comments: [],
      error: ''
    }
  }

  componentWillMount() {
    const movieId = this.props.match.params.id;
    // console.log(props);
    this._fetchMovies(movieId);
    this._fetchComments(movieId)
  }

  _fetchComments = async (movieId) => {
    // console.log(movieId);
    try {
      const res = await axios.get(`/api/movies/${movieId}/comments`);
      this.setState({comments: res.data});
      return res.data
    }
    catch (err) {
      await this.setState({error: err.message})
      return err.message
    }
  }

  _fetchMovies = async (movieId) => {
    try {
      const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${movieId}`)
      // console.log(response)
      this.setState({movie: res.data, characters: res.data.people, api_id: res.data.id});
      const payload = this.state.movie;
      const response = await axios.post(`https://ghibliapi.herokuapp.com/films/${movieId}`, payload)
      this.setState({movie: response.data})
    }
    catch (err) {
      await this.setState({error: err.message})
      return err.message
    }
  }

  render() {
    return (
    <div>
      <MovieContainer>
        <Details>
          {/* <img src={this.state.movie.url} alt={this.state.movie.title} /> */}
          <ul>
            <li> Released: <p>{this.state.movie.release_date}</p> </li>
          <li>Director: <p>{this.state.movie.director}</p> </li>
          <li>Producer: <p>{this.state.movie.producer}</p> </li>
        </ul>
      </Details>
      <Synopsis>
          <h1>{this.state.movie.title}</h1>
          <p>{this.state.movie.description}</p>
      </Synopsis>
      </MovieContainer>

          {/* <h2>Characters</h2>
          {this.state.characters.map((character) => (
            <div key={character.id}>
              <h4>{character.name}</h4> */}

          {/* // ))} */}
          <div>

          {this.state.comments.map((comment) => (
            <div>


            </div>
          ))}
        </div>
          <CommentList api_id= {this.state.api_id} />
          <Comment movieId={this.state.movie.api_id}  />

    </div>
    );
  }
}

export default Movie;
