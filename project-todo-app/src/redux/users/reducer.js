import { USER_ACTION_TYPES } from './actionTypes';

const initialStateSignin = [];

const initialStateSigninError = null;

const initialStateLogin = [];

const initialStateLoginError = null;

export const signinReducer = (state = initialStateSignin, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.POST_SIGNIN:
      return action.payload;
    case USER_ACTION_TYPES.POST_SIGNIN_ERROR:
      return null;
    default:
      return state;
  }
};

export const signinErrorReducer = (state = initialStateSigninError, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.POST_SIGNIN:
      return null;
    case USER_ACTION_TYPES.POST_SIGNIN_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export const loginReducer = (state = initialStateLogin, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.POST_LOGIN:
      return action.payload;
    case USER_ACTION_TYPES.POST_LOGIN_ERROR:
      return null;
    default:
      return state;
  }
};

export const loginErrorReducer = (state = initialStateLoginError, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.POST_LOGIN:
      return null;
    case USER_ACTION_TYPES.POST_LOGIN_ERROR:
      return action.payload;
    default:
      return state;
  }
};
