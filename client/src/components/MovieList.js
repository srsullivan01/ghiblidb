import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled  from 'styled-components';
import leftotoro from '../images/leftotoro.png';
import axios from 'axios';

// Styling
const PageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

const StyledLink = styled(Link)`
  font-weight: bold;
  color: #6BA260;
  text-decoration: none;
  &:visited{
    color: #4E988E;
  }
  &:hover{
    color: #4E988E;
  }
`;

const StyledImg = styled.img`
  max-height: 550px;
  max-width: 100%;
`;

const LinkContainer = styled.div`
display: flex;
align-items: right;
background-color: #EBE3D5;
margin-top: 3%;
padding: 2%;
justify-content: space-between;
flex-direction: column;
border-radius: 9px;
border: 1px solid;
border-color: #74787B;
h1{
    color: #072A5A;
  }
`;


// Component
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
      <PageContainer>
      <LinkContainer>
        <h1>All Ghibli Films</h1>
        {this.state.movies.map(movie => (
          <div>
            <StyledLink to={`/movies/${movie.id}`} > {movie.title} </StyledLink>
          </div>
        ))}
      </LinkContainer>
      <StyledImg src= {leftotoro} alt="totoro facing left" />
    </PageContainer>
    );
  }
}
export default MovieList;
