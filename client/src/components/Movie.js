import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import CommentForm from "./CommentForm";
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
  font-family: 'PT Sans Caption', sans-serif;
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
font-family: 'PT Sans Caption', sans-serif;
padding: 2.5%;
flex: 1;
h1{
  color: #072A5A;
  font-family: 'Patua One', cursive;
}
`;

const StyledButton = styled.button`
  align-items: space-between;
  margin: 3px;
  padding: 8px 15px 8px 15px;
  max-width: 10%;
  background-color: #6BA260;
  border: none;
  color: #EBE3D5;
  &:active {
    outline-color: transparent;
    outline-style: none;
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  };
  &:select {
    outline-color: transparent;
    outline-style: none;
  };
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
    // this._fetchComments(movieId)
  }

  // _fetchComments = async (movieId) => {
  //   // console.log(movieId);
  //   try {
  //     const res = await axios.get(`/api/movies/${movieId}/comments`);
  //     this.setState({comments: res.data});
  //     return res.data
  //   }
  //   catch (err) {
  //     await this.setState({error: err.message})
  //     return err.message
  //   }
  // }

  _fetchMovies = async (movieId) => {
    try {
      const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${movieId}`)
      // console.log(response)
      this.setState({movie: res.data, characters: res.data.people, api_id: res.data.id});
      const payload = this.state.movie;
      const response = await axios.post(`/api/movies/${movieId}`, payload)
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
          <ul>
            <li> Released: <p>{this.state.movie.release_date}</p> </li>
          <li>Director: <p>{this.state.movie.director}</p> </li>
          <li>Producer: <p>{this.state.movie.producer}</p> </li>
        </ul>
      </Details>
      <Synopsis>
          <h1>{this.state.movie.title}</h1>
          <p>{this.state.movie.description}</p>
          <StyledButton>Add To Favorites </StyledButton>
      </Synopsis>
      </MovieContainer>

          <CommentList api_id= {this.props.match.params.id} />
          <CommentForm api_id={this.props.match.params.id}  />

    </div>
    );
  }
}

export default Movie;
