import React from "react";
import { Link } from 'react-router-dom';
import styled  from 'styled-components';

const Nav = styled.div`
background-color: #F7EEE9;
color: grey;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 2.5%
box-shadow: 0px 1px 6px black;
a{
  text-decoration: none;
  color: #666666;
  margin: 0 5px;
  &:visited{
    color: #666666;
  }
  &:hover{
    color: #85D3DE;
  }
}
`

const Navbar = () => {
  return (
    <Nav>
      <Link to="/"> <h1>GhibliDB</h1></Link>
      <div>
        <image src= "client/public/images/totologo.jpg" />
      </div>
      <div>
        <Link to="/movies/1">Movies</Link>
        <Link to="/sign_up">Sign Up</Link>
        <Link to="/addmovie">Add a Movie</Link>
      </div>
    </Nav>
  );
};

export default Navbar;
