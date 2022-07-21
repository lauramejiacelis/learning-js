import TODOS_ACTION_TYPES from './actionTypes'

export const ADD_TODO = (description) => ({
    type: TODOS_ACTION_TYPES.ADD_TODO,
    payload: description,
})