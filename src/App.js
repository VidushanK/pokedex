import React, { Component } from 'react';
import logo from './assets/logo.svg';
import Pokemon from './components/Pokemon.jsx';
import PokemonList from './components/PokemonList.jsx';
import './assets/styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pokédex</h1>
        </header>
        <Pokemon />
        <PokemonList />
      </div>
    );
  }
}

export default App;
