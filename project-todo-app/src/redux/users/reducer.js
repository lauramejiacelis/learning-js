import { USER_ACTION_TYPES } from './actionTypes';

const initialStateLoading = false;

const initialStateSignin = [];

const initialStateSigninError = null;

const initialStateLogin = [];

const initialStateLoginError = null;

export const signInLoadingReducer = (state = initialStateLoading, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.LOADING:
      return true;
    case USER_ACTION_TYPES.SIGNIN_SUCCESS:
    case USER_ACTION_TYPES.SIGNIN_ERROR:
      return false;
    default:
      return state;
  }
};

export const signInReducer = (state = initialStateSignin, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.LOADING:
      return false;
    case USER_ACTION_TYPES.SIGNIN_SUCCESS:
      return action.payload;
    case USER_ACTION_TYPES.SIGNIN_ERROR:
      return null;
    default:
      return state;
  }
};

export const signInErrorReducer = (state = initialStateSigninError, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.LOADING:
      return false;
    case USER_ACTION_TYPES.SIGNIN_SUCCESS:
      return null;
    case USER_ACTION_TYPES.SIGNIN_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export const loginReducer = (state = initialStateLogin, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.LOGIN_SUCCESS:
      return action.payload;
    case USER_ACTION_TYPES.LOGIN_ERROR:
      return null;
    default:
      return state;
  }
};

export const loginErrorReducer = (state = initialStateLoginError, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.LOGIN_SUCCESS:
      return null;
    case USER_ACTION_TYPES.LOGIN_ERROR:
      return action.payload;
    default:
      return state;
  }
};
