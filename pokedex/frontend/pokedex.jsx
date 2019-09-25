import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon, receiveAllPokemon } from './actions/pokemon_actions';

document.addEventListener("DOMContentLoaded", () => {
  //TEST //
  window.fetchAllPokemon = fetchAllPokemon();
  window.receiveAllPokemon = receiveAllPokemon();

  // TEST //

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Hi</h1>, root);
});
