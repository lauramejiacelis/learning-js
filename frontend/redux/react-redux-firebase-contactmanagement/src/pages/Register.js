import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { FaUserPlus, FaArrowAltCircleLeft } from 'react-icons/fa'
import './Register.css'
import { registerInitiateThunk } from "../redux/users/thunks";
import { auth } from '../firebase'

const Register = () =>{

  const [state, setState] = useState({
    displayName: '',
    email: '',
    password:'',
    passwordConfirm:''
  })

  //const currentUser = auth.currentUser
  const  {currentUser}  = useSelector((state)=> state.user)
  console.log(currentUser)
  const navigate = useNavigate()

  //this is not working!!!!
  useEffect(()=>{
    //console.log(currentUser.uid)
    if(currentUser){
      navigate('/')
    }
  }, [currentUser])

  const dispatch = useDispatch()
  
  const {displayName, email, password, passwordConfirm} = state
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state)
    if (password !== passwordConfirm){
      return;
    }
    dispatch(registerInitiateThunk(email, password, displayName))
    setState({displayName: '',
    email: '',
    password:'',
    passwordConfirm:''})
  }
  const handleChange = ({target}) =>{
    setState({...state, [target.name]: target.value})
  }

  return(
    <div>
      <div className='register-form'>
        <form className="form-signup" onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal" style={{textAlign: 'center'}}> Sign up</h1>

          <input
          type='text'
          id='displayName'
          className= 'form-control'
          placeholder="Full Name"
          name="displayName"
          onChange={handleChange} 
          value={displayName}
          required/>

          <input
          type='email'
          id='userEmail'
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

          <input
          type='password'
          id='inputRePassword'
          className= 'form-control'
          placeholder="Confirm Password"
          name="passwordConfirm"
          onChange={handleChange} 
          value={passwordConfirm}
          required/>

          <button className="btn btn-primary btn-block" type="submit">
            <FaUserPlus/> Sign up 
          </button>

          <div className="goBack">
            <Link to='/login'>
              <FaArrowAltCircleLeft/>
              Back
            </Link>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Register;