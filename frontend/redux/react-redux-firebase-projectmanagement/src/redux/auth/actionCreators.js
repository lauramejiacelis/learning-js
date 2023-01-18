import { AUTH_ACTION_TYPES } from './actionTypes';

export const signInLoading = () => {
  return {
    type: AUTH_ACTION_TYPES.LOADING,
  };
};

export const signInSuccess = () => {
  return {
    type: AUTH_ACTION_TYPES.SIGNIN_SUCCESS,
  };
};

export const signInError = () => {
  return {
    type: AUTH_ACTION_TYPES.SIGNIN_ERROR,
  };
};

export const logInSuccess = () => {
  return {
    type: AUTH_ACTION_TYPES.LOGIN_SUCCESS,
  };
};

export const logInError = () => {
  return {
    type: AUTH_ACTION_TYPES.LOGIN_ERROR,
  };
};

export const logout = () => {
  return {
    type: AUTH_ACTION_TYPES.LOGOUT,
  };
};
