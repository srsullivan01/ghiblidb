import React from "react";
import { Link } from 'react-router-dom';
// import SearchBar from "./SearchBar";
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
font-family: 'Patua One', cursive;
}
a{
  text-decoration: none;
  font-family: 'PT Sans Caption', sans-serif;
  color: #6BA260;
  margin: 0 5px;
  &:visited{
    color: #4E988E;
  }
  &:hover{
    color: #4E988E;
  }
}
`;

const Search = styled.div`

`;

const Container1 = styled.div`
width: 300px;
vertical-align: middle;
white-space: nowrap;
position: relative;
.icon{
  position: absolute;
  top: 50%;
  margin-left: 17px;
  margin-top: 17px;
  color: #4f5b66;
};
`;

const StyledInput = styled.input`
  border-radius: 3px;
  width: 50%;
  height: 30px;
  &:focus{
    outline-color: #4E988E;
    border-radius: 3px;
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  };
`;

const Navbar = () => {
  return (
    <Nav>
      <Link to="/"> <h1>GhibliDB</h1></Link>
      <Search>
            <Container1>
              <span class="icon"><i class="fa fa-search"></i></span>
              <StyledInput type="search" id="search" placeholder="Coming Soon..." />
            </Container1>
      </Search>
      <div>
        <Link to="/">Movies</Link>
        <Link to="/signUp">Sign Up</Link>
      </div>
    </Nav>
  );
};

export default Navbar;
