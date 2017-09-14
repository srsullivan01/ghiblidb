import React from "react";
import { Link } from 'react-router-dom';
import styled  from 'styled-components';

const Nav = styled.div`
background-color: #EBE3D5;
color: #6BA260;
display: flex;
justify-content: space-between;
align-items: center;
padding: 2.5% 2.5%
box-shadow: 0px 1px 6px black;
h1{
color: #072A5A;
}
a{
  text-decoration: none;
  color: #6BA260;
  margin: 0 5px;
  &:visited{
    color: #4E988E;
  }
  &:hover{
    color: #4E988E;
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
        <Link to="api/movies">Movies</Link>
        <Link to="/signUp">Sign Up</Link>
        <Link to="/addmovie">Add a Movie</Link>
      </div>
    </Nav>
  );
};

export default Navbar;
