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
    font-family: 'PT Sans Caption', sans-serif;
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
    font-family: 'PT Sans Caption', sans-serif;
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
  color: white;
  max-width: 30%;
`;

const StyledInput = styled.input`
  border-radius: 5px;
  width: 50%;
  height: 35px;
  color: black;
  font-weight: bold;
  &:focus{
    outline-color: #4E988E;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  };
`;



// component
class CommentForm extends Component {
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
    const movie_id = this.props.api_id
    const payload = {
      movie_id: movie_id,
      comment: this.state.comment
    }

    const res = await axios.post(`/api/comments`, payload)
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
          <StyledInput onChange={this._handleChange} type="text" name="title" value={this.state.title}/>
        </StyledTitle>
        <StyledBody>
          <label htmlFor="body"> Body: </label>
          <StyledInput onChange={this._handleChange} type="textarea" name= "body" value={this.state.body}  />
        </StyledBody>
          <StyledButton>Submit</StyledButton>

        </StyledForm>
        {/* {this.state.redirect && (<Redirect to={`/api/movies/${movie_id}/comments`}/>)} */}

      </CommentContainer>
    );
  }
}

export default CommentForm;
