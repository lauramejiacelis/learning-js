import {
  singInSuccess,
  singInError,
  loginSuccess,
  loginError,
  logout,
} from './actionCreators';
import { authFetch, logoutFetch } from '../../services/fetchs';

export const signInThunk = (user) => (dispatch) => {
  
  authFetch('register', {user})// {user:data}
    .then((data) => {
      dispatch(singInSuccess(data));
    })
    .catch((e) => {
      dispatch(singInError(e));
    });
  
};

export const loginThunk = (data) => (dispatch) => {

  authFetch('login', data)
    .then((user) => {
      dispatch(loginSuccess(user));
    })
    .catch((e) => {
      dispatch(loginError(e));
    });

};

export const logoutThunk = () => (dispatch) => {
  logoutFetch().then((message) => {
    dispatch(logout(message));
  });
};
