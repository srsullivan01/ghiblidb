import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

class CharacterList extends Component {
constructor(){
  super();
  this.state = {
    error: '',
    characters: []
  }
}
componentWillMount(){
  this._fetchCharacters();
}
_fetchCharacters = async () => {
  try{
    const res = await axios.get('https://ghibliapi.herokuapp.com/films')
  }
}
<h2>Characters</h2>
{this.state.characters.map((character) => (
  <div key={character.id}>
    <h4>{character.name}</h4> */}

))}
<div>

{this.state.comments.map((comment) => (
  <div>


  </div>
))}
</div>
}
