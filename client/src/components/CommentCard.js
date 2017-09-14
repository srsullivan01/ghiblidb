import React from 'react';
import { Link } from 'react-router-dom';
import Comment from "./Comment";

const CommentCard = (props) => {
  const comment = props.comment;
  return (
    <div>
      <h3>{comment.title}</h3>
      <h3>{comment.body}</h3>
    </div>
  )
}

export default CommentCard;
