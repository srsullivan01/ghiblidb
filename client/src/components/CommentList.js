import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comment from "./Comment";
import axios from 'axios';

class CommentList extends Component {
  constructor(){
    super();
    this.state = {
      comments: [],
      error: '',
      banana: ''
    };
  }

componentWillMount(){
  // this._fetchComments();
}
_fetchComments = async () => {
  console.log(this.props.movieId)
  const movie_id = this.props.movieId
  // console.log(this.props.movieId)
  // const id = this.state.commentId
  try {
    const res = await axios.get(`/api/movies/${this.props.movieId}/comments`);
    this.setState({comments: res.data});
    return res.data
  }
  catch (err) {
    await this.setState({error: err.message})
    return err.message
  }
}

render(){
  if (this.state.error){
    return <div>{this.state.error}</div>
  }
  return (
    <div>
      <button onClick={this._fetchComments}>Fetch</button>
    {this.state.comments.map(comment => (
      <div>
        {comment.title} <br/>
        {comment.body}

      </div>
    ))}
  </div>
    );
  }
}
CommentList.defaultProps = {
  banana: ''
}
export default CommentList;
