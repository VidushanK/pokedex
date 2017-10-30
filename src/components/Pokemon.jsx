import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
      return (
        <div className="pokemon">
          <div className="pokemon_wrapper">
            <img src={require(`../assets/sprites/1.png`)} width={500} height={500}/>
          </div>
        </div>
      );
  }
}
export default Pokemon;
