import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { FaUserPlus, FaFacebookF, FaGooglePlusG, FaSignInAlt } from 'react-icons/fa'
import './Login.css'
import { loginInitiateThunk } from "../redux/users/thunks";

const Login = () =>{

  const [state, setState] = useState({
    email: '',
    password:''
  })
  
  const {email, password} = state
  
  const {currentUser} = useSelector((state) => state.user)

  const navigate = useNavigate();

  useEffect(()=>{
    if(currentUser){
      navigate("/")
    }
  },[currentUser])

  const dispatch = useDispatch()

  const handleGoogleSignIn = () =>{}

  const handleFBSignIn = () =>{}

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email || !password){
      return;
    }
    dispatch(loginInitiateThunk(email, password))
    setState({email: "", password:""})
  }

  const handleChange = ({target}) =>{
    setState({...state, [target.name]: target.value})
  }

  return(
    <div>
      <div className='logreg-form'>
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal" style={{textAlign: 'center'}}> Sign in</h1>

          <div className="social-login">
            <button className="btn google-btn social-btn" type="button" onClick={handleGoogleSignIn}>
              <FaGooglePlusG/>
              <span> Log in with Google+</span>
            </button>

            <button className="btn facebook-btn social-btn" type="button" onClick={handleFBSignIn}>
              <FaFacebookF/>
              <span>
                Log in with Facebook
              </span>
            </button>
          </div>

          <p style={{textAlign: 'center'}}>OR</p>

          <input
          type='email'
          id='inputEmail'
          className= 'form-control'
          placeholder="Email Address"
          name="email"
          onChange={handleChange} 
          value={email}
          required/>

          <input
          type='password'
          id='inputPassword'
          className= 'form-control'
          placeholder="Password"
          name="password"
          onChange={handleChange} 
          value={password}
          required/>

          <button className="btn btn-secondary btn-block" type="submit">
            <FaSignInAlt/> Log in </button>

          <p className="no-register">Don't have an account yet?</p>

          <Link to='/register'>
            <button className="btn btn-primary btn-block" type="button">
              <FaUserPlus/>
              <span> Sign Up New Account</span>
            </button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login;