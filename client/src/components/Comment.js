import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

// styles
const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  flex: 1;
  h3{
    color: #072A5A;
  }
`;

const StyledForm = styled.form`
  justify-content: flex-end;
  flex-flow: column-wrap;
  margin:10px auto;
  max-width: 400px;
  padding: 20px 12px 10px 20px;
  label{
    margin:0 0 3px 0;
    padding:0px;
    display:block;
    font-weight: bold;
  }

`;

const StyledTitle = styled.div`
  input[type="text"] {
      width: 400px;
  }
`;

const StyledBody = styled.div`
  input[type="textarea"]{
    width: 400px;
    height: 250px;
  }
`;

const StyledButton = styled.button`
  align-items: space-between;
  margin: 3px;
  padding: 8px 15px 8px 15px;
  background-color: #6BA260;
  border: none;
  color: #EBE3D5;
`;



// component
class Comment extends Component {
  constructor(){
    super();
    this.state = {
      movie: {},
      comment: {
      title: '',
      body: ''
    },
      redirect: false
    }


  }

  _handleChange = (e) => {
    e.preventDefault();
    const newState = {...this.state.comment};
    newState[e.target.name] = e.target.value;
    this.setState({
      comment: newState
    });
  }

  _handleSubmit = async (e) => {
    e.preventDefault();
    const movie_id = this.props.movieId
    const payload = this.state.comment
    const res = await axios.post(`/api/movies/${movie_id}/comments`, payload)
    const comments = res.data
    this.setState({redirect: true})
  }



  render(){
// const movie_id = this.props.match.params.id
    return(
      <CommentContainer>
        <h3>Comments</h3>
        <StyledForm onSubmit={this._handleSubmit}>
          <StyledTitle>
          <label htmlFor="title"> Title: </label>
          <input onChange={this._handleChange} type="text" name="title" value={this.state.title}/>
        </StyledTitle>
        <StyledBody>
          <label htmlFor="body"> Body: </label>
          <input onChange={this._handleChange} type="textarea" name= "body" value={this.state.body}  />
        </StyledBody>
          <StyledButton>Submit</StyledButton>

        </StyledForm>
        {/* {this.state.redirect && (<Redirect to={`/api/movies/${movie_id}/comments`}/>)} */}

      </CommentContainer>
    );
  }
}

export default Comment;
