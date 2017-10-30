import React, { Component } from 'react';

class Pokemon extends Component {

  render() {
    let id = Math.floor(Math.random() * 100) + 1;
    return (
      <div className="pokemon">
        <div className="pokemon_wrapper">
          <img src={require(`../assets/sprites/${id}.png`)} width={500} height={500} alt="images of pokemon"/>
        </div>
      </div>
    );
  }
}
export default Pokemon;
