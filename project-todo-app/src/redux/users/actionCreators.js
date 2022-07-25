import { USER_ACTION_TYPES } from './actionTypes';

export const postSingin = (user) => {
  return {
    type: USER_ACTION_TYPES.POST_SIGNIN,
    payload: user,
  };
};

export const postSinginError = (error) => {
  return {
    type: USER_ACTION_TYPES.POST_SIGNIN_ERROR,
    payload: error,
  };
};

export const postLogin = (user) => {
  return {
    type: USER_ACTION_TYPES.POST_LOGIN,
    payload: user,
  };
};

export const postLoginError = (error) => {
  return {
    type: USER_ACTION_TYPES.POST_LOGIN_ERROR,
    payload: error,
  };
};
