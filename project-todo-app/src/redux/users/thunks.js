import { registerFetch, loginFetch } from '../../services/fetchs';
import {
  postSingin,
  postSinginError,
  postLogin,
  postLoginError,
} from './actionCreators';
import {
  signinSelector,
  signinErrorSelector,
  loginSelector,
  loginErrorSelector,
} from './selectors';

export const signinThunk = () => (dispatch, getState) => {
  const state = getState();
  const user = signinSelector(state);
  console.log(state);
};
