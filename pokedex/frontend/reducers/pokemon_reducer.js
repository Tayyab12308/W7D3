import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'react-redux'

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_POKEMON: {
      return merge({}, state, action.pokemon);
    }
    default: {
      return state;
    }
  }
};

export default pokemonReducer;
