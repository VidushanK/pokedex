import React, { Component } from 'react';
import Pokemon from './Pokemon.jsx'

class PokemonList extends Component{
  constructor(){
    super()
    this.state = {
      type: [],
      loading: false,
      fetched: false,

    };
  }
  componentWillMount(){
    this.setState({
      loading: true
    });
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then((data) =>{
      console.log(data.results)
      this.setState({
        type: data.results
      });
    });
  }
  render(){
    const {type} = this.state;
    return(<div className="pokemon--species--list">{type.map((pokemon,index)=><Pokemon key={pokemon.name} id={index+1} pokemon={pokemon}/>)}</div>)
  }
}
export default PokemonList;
