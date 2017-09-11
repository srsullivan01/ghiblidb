import React, { Component } from 'react';
import axios from 'axios';

class Character extends Component {
  constructor() {
    super();
    this.state = {
      character: {},
      characters: [],
    };
  }

  componentWillMount() {
    const characterId = this.props.match.params.id;
    this._fetchCharacters(characterId)
  }

  _fetchCharacters - async (characterId) => {
    try {
      const response = await axios.get(`/api/characters/${characterId}/`)
      await this.setState({character: response,data,character, characters: response.data.characters});
      return response.data;
    }
    catch (err) {
      await this.setState({error: err.message})
      return err.message
    }
  }

  render() {
    return (
      <div>
          <img src={this.state.character.url} alt={this.state.character.name} />
          <h1>{this.state.character.name}</h1>
          <div>
          <h3>{this.state.character.age}</h3>
          <h3>{this.state.character.gender}</h3>
          <h3>{this.state.character.hair_color}</h3>
          <h3>{this.state.character.eye_color}</h3>
          <h3>{this.state.character.films}</h3>
          <h3>{this.state.character.species}</h3>
        </div>
          ))}
      </div>
    );
  }
}

export default Character;
