import React, { Component } from 'react';

class Pokemon extends Component {

  render() {
    // sets id to a random digit in order to use a different picture each type the page is refereshed
    // this is a temporary
    let id = Math.floor(Math.random() * 100) + 1;
    return (
      <div className="pokemon">
        <div className="pokemon_wrapper">
          <img src={require(`../assets/sprites/${id}.png`)} width={500} height={500} alt="images of pokemon"/>
          <div className="pokemon_name"></div>
        </div>
      </div>
    );
  }
}
export default Pokemon;
