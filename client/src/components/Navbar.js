import React from "react";
import { Link } from 'react-router-dom';
import styled  from 'styled-components';

const Navbar = () => {
  return (
    <div>
      <Link to="/"> <h1>GhibliDB</h1></Link>
      <div>
        <Link to="/movies/1">Movies</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/addmovie">Add a Movie</Link>
      </div>
    </div>
  );
};

export default Navbar;
