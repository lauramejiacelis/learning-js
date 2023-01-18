import { USER_ACTION_TYPES } from './actionTypes'

export const loading = () => {
  return {
    type: USER_ACTION_TYPES.LOADING
  }
}

export const registerSuccess = (user) => {
  return {
    type: USER_ACTION_TYPES.REGISTER_SUCCESS,
    payload: user
  }
}

export const registerError = (error) => {
  return {
    type: USER_ACTION_TYPES.REGISTER_ERROR,
    payload: error
  }
}

export const loginSuccess = (user) => {
  return {
    type: USER_ACTION_TYPES.LOGIN_SUCCESS,
    payload: user
  }
}

export const loginError = (error) => {
  return {
    type: USER_ACTION_TYPES.LOGIN_ERROR,
    payload: error
  }
}

export const logoutSuccess = () => {
  return {
    type: USER_ACTION_TYPES.LOGOUT_SUCCESS
  }
}

export const logoutError = (error) => {
  return {
    type: USER_ACTION_TYPES.LOGOUT_ERROR,
    payload: error
  }
}

export const setUser = (user)=>{
  return{
    type: USER_ACTION_TYPES.SET_USER,
    payload: user
  }
}

export const googleLoginSuccess = (user) => {
  return {
    type: USER_ACTION_TYPES.GOOGLE_LOGIN_SUCCESS,
    payload: user
  }
}

export const googleLoginError = (error) => {
  return {
    type: USER_ACTION_TYPES.GOOGLE_LOGIN_ERROR,
    payload: error
  }
}

export const facebookLoginSuccess = (user) => {
  return {
    type: USER_ACTION_TYPES.FACEBOOK_LOGIN_SUCCESS,
    payload: user
  }
}

export const facebookLoginError = (error) => {
  return {
    type: USER_ACTION_TYPES.FACEBOOK_LOGIN_ERROR,
    payload: error
  }
}