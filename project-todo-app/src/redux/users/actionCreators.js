import { USER_ACTION_TYPES } from './actionTypes';

export const singInSuccess = (user) => {
  return {
    type: USER_ACTION_TYPES.SIGNIN_SUCCESS,
    payload: user,
  };
};

export const singInError = (error) => {
  return {
    type: USER_ACTION_TYPES.SIGNIN_ERROR,
    payload: error,
  };
};

export const loginSuccess = (user) => {
  return {
    type: USER_ACTION_TYPES.LOGIN_SUCCESS,
    payload: user,
  };
};

export const loginError = (error) => {
  return {
    type: USER_ACTION_TYPES.LOGIN_ERROR,
    payload: error,
  };
};
