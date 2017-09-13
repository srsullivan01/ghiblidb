import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import axios from 'axios';

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
      <div>
        <h3>Comments</h3>
        <form onSubmit={this._handleSubmit}>
          <div>
          <label htmlFor="title"> Title: </label>
          <input onChange={this._handleChange} type="text" name="title" value={this.state.title}/>
          </div>
          <div>
          <label htmlFor="body"> Body: </label>
          <input onChange={this._handleChange} type="textfield" name= "body" value={this.state.body}  />
          </div>
          <button>Submit</button>
        </form>
        {/* {this.state.redirect && (<Redirect to={`/api/movies/${movie_id}/comments`}/>)} */}

      </div>
    );
  }
}

export default Comment;
