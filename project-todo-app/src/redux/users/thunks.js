import { registerFetch, loginFetch } from '../../services/fetchs';
import {
  postSingin,
  postSinginError,
  postLogin,
  postLoginError,
} from './actionCreators';
import {
  signInSelector,
  signInErrorSelector,
  loginSelector,
  loginErrorSelector,
} from './selectors';
import { authFetch } from '../../services/fetchs';

export const signInThunk = () => (dispatch, getState) => {
  const state = getState();
  const user = signInSelector(state);
  console.log(`state: ${state}`);
  console.log(`user: ${user}`);
};
