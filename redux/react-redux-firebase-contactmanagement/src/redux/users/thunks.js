import { loading, registerSuccess, registerError, loginSuccess, loginError } from "./actionCreators";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword,  updateProfile, signInWithEmailAndPassword } from "firebase/auth";


export const registerInitiateThunk = (email, password, displayName) => (dispatch) => {
  dispatch(loading())
  createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
    console.log(userCredential.UserImpl)
    console.log(auth.currentUser)
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