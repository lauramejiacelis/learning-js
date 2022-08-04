import {
  singInLoading,
  singInSuccess,
  singInError,
  loginSuccess,
  loginError,
  logout,
} from './actionCreators';
import { loginSelector, signInSelector } from './selectors';
import { authFetch, logoutFetch } from '../../services/fetchs';

export const signInThunk = (data) => (dispatch, getState) => {
  /* const state = getState();
  const user = signInSelector(state);
  console.log(state);
  console.log(user); */
  /* if (user.length > 0) {
    return;
  } */
  //dispatch(singInLoading);
  authFetch('register', data)
    .then((user) => {
      dispatch(singInSuccess(user));
    })
    .catch((e) => {
      dispatch(singInError(e));
    });
  //console.log(state);
};

export const loginThunk = (data) => (dispatch, getState) => {
  const state = getState();

  authFetch('login', data)
    .then((user) => {
      dispatch(loginSuccess(user));
    })
    .catch((e) => {
      dispatch(loginError(e));
    });

  console.log(state);
};

export const logoutThunk = () => (dispatch, getState) => {
  logoutFetch().then((message) => {
    dispatch(logout(message));
  });
};
