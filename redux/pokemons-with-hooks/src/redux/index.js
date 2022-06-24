import { configureStore, combineReducers } from '@reduxjs/toolkit';
import pokemons from './pokemons';

const reducer = combineReducers({
  pokemons,
});

const store = configureStore({
  reducer,
});

export default store;
