import { loading, registerSuccess, registerError, loginSuccess, loginError, logoutSuccess, logoutError } from "./actionCreators";
import { auth, googleAuthProvider, facebookAuthProvider } from "../../firebase";
import { createUserWithEmailAndPassword,  updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const registerInitiateThunk = (email, password, displayName) => (dispatch) => {
  dispatch(loading())
  createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
    //console.log(userCredential.user)
    //console.log(auth.currentUser)
    updateProfile(auth.currentUser, {
      displayName,
    })
    dispatch(registerSuccess(userCredential.user))
  })
  .catch((error) => dispatch(loginError(error.message)))
}

export const loginInitiateThunk = (email, password) => (dispatch) => {
  dispatch(loading())
  signInWithEmailAndPassword(auth, email, password).then(({user})=>{
    console.log(user)
    console.log(auth.currentUser)
    dispatch(loginSuccess(user))
  })
  .catch((error) => dispatch(registerError(error.message)))
}

export const logoutThunk = () => (dispatch) => {
  dispatch(loading())
  signOut(auth).then((resp)=>dispatch(logoutSuccess()))
  .catch((error) => dispatch(logoutError(error.message)))
}

export const googleLoginThunk = () => (dispatch) => {
  dispatch(loading())
  signInWithEmailAndPassword(auth, ).then(({user})=>{
    console.log(user)
    console.log(auth.currentUser)
    dispatch(loginSuccess(user))
  })
  .catch((error) => dispatch(registerError(error.message)))
}