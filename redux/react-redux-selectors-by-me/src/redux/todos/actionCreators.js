import {ADD_TODO, REMOVE_TODO} from './actionTypes'

export function addTodo(todo){
  return{
    type: ADD_TODO,
    payload: todo
  }
}