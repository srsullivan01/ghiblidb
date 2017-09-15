import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


//styling
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


//component
class SearchBar extends Component {


  render(){
    return(
<Search>
      <Container1>
        <span class="icon"><i class="fa fa-search"></i></span>
        <StyledInput type="search" id="search" placeholder="Coming Soon..." />
      </Container1>
</Search>
    );
  }
}
export default SearchBar;
