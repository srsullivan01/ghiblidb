import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CommentCard from "./CommentCard";
import axios from 'axios';



class CommentList extends Component {
  constructor(){
    super();
    this.state = {
      comments: [],
      error: ''
    };
  }

componentWillMount(){
  this._fetchComments();
}
_fetchComments = async () => {

  const movie_id = this.props.api_id
  const id = this.props.id
  // console.log(this.props.movieId)
  // const id = this.state.commentId
  console.log(this.props.api_id)
  try {
    const res = await axios.get(`/api/movies/${this.props.api_id}/comments`);
    console.log(res.data)
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

export default CommentList;
