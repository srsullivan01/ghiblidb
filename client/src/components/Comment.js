import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Comment extends Component {
  constructor(){
    super();
    this.state = {
      title: {},
      body: {},
      value: {},
      error: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
   event.preventDefault();
 }


  render(){
    return(
      <div>
        <h3>Comments</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" name="title"/>
          </label>
          <label>
            Body:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}

export default Comment;
