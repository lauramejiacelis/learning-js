import { createSlice } from '@reduxjs/toolkit';

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: [],
  reducers: {
    getPokemons(state, action) {
      return action.payload;
    },
  },
});

console.log(pokemonsSlice);

export const { getPokemons } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
