import { USER_ACTION_TYPES } from './actionTypes';

const initialState = {
  user: {},
  register: {},
  loginError: null,
  signInError: null,
};

//refactorizar este reducer
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.LOADING:
      console.log('is loading');
      return {};
    case USER_ACTION_TYPES.SIGNIN_SUCCESS:
      console.log('signIn success');
      return {
        ...state,
        register: action.payload,
        signInError: null,
      };
    case USER_ACTION_TYPES.SIGNIN_ERROR:
      console.log('signIn error');
      return {
        ...state,
        signInError: action.payload,
      };
    case USER_ACTION_TYPES.LOGIN_SUCCESS:
      console.log('logIn success');
      return {
        ...state,
        user: action.payload,
        loginError: null,
      };
    case USER_ACTION_TYPES.LOGIN_ERROR:
      console.log('logIn error');
      return {
        ...state,
        loginError: action.payload,
      };
    case USER_ACTION_TYPES.LOGOUT:
      console.log('Logout Success');
      return state;
    default:
      return state;
  }
};
