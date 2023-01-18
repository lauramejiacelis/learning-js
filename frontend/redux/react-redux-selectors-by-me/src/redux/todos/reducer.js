import { ADD_TODO } from './actionTypes'

const initialState = [];

export function todosReducer(state= initialState, action){
  switch (action.type){
    case ADD_TODO:
      return [...state, action.payload]
    default:
      return state; 
  }
}