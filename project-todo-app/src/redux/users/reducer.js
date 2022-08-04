import { USER_ACTION_TYPES } from './actionTypes';

const initialStateLoading = false;

const initialStateSignin = [];

const initialStateSigninError = null;

const initialStateLogin = [];

const initialStateLoginError = null;

const initialStateLogout = null;

export const signInLoadingReducer = (state = initialStateLoading, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.LOADING:
      console.log('is loading');
      return true;
    case USER_ACTION_TYPES.SIGNIN_SUCCESS:
      return [];
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
      console.log('signIn success');
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
      return [];
    case USER_ACTION_TYPES.SIGNIN_ERROR:
      console.log('signIn error');
      return action.payload;
    default:
      return state;
  }
};

export const loginReducer = (state = initialStateLogin, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.LOGIN_SUCCESS:
      console.log('login success');
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
      return []; //creo que es por esto que me saca errores
    case USER_ACTION_TYPES.LOGIN_ERROR:
      console.log('login error');
      return action.payload;
    default:
      return state;
  }
};

export const logoutReducer = (state = initialStateLogout, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.LOGIN_SUCCESS:
      return [];
    case USER_ACTION_TYPES.LOGIN_ERROR:
      return null;
    case USER_ACTION_TYPES.LOGOUT:
      console.log('Logout Success');
      return state;
    default:
      return state;
  }
};
