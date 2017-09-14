import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//styles

const StyledEdit = styled.button`
  align-items: space-between;
  margin: 3px;
  padding: 8px 15px 8px 15px;
  background-color: #74787B;
  border: none;
  color: #EBE3D5;
`;

const StyledDelete = styled.button`
  align-items: space-between;
  margin: 3px;
  padding: 8px 15px 8px 15px;
  background-color: #873031;
  border: none;
  color: #EBE3D5;
`;

//component

const CommentCard = (props) => {
  const comment = props.comment;
  return (
    <div>
      <h3>{comment.title}</h3>
      <h3>{comment.body}</h3>
      <StyledEdit>Edit</StyledEdit>
      <StyledDelete>Delete</StyledDelete>
    </div>
  )
}

export default CommentCard;
