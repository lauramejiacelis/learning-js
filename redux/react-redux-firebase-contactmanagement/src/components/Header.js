import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutThunk } from "../redux/users/thunks";
import './Header.css'

const Header = () =>{
  const [activeTab, setActiveTab] = useState('Home')
  const location = useLocation()

  const {currentUser:user} = useSelector((state)=>({...state.user}))

  const dispatch = useDispatch()

  const handleAuth = () =>{
    dispatch(logoutThunk())
  }

  useEffect(()=>{
    if(location.pathname === '/'){
      setActiveTab('Home')
    } else if(location.pathname === '/addContact'){
      setActiveTab('AddContact')
    } else if(location.pathname === '/about'){
      setActiveTab('About')
    } else if(location.pathname === '/login'){
      setActiveTab('Signin')
    } 
  }, [location])
  return(
    <div className="header">
      <Link to='/'>
        <p className="logo">Contact App</p>
      </Link>
      <div className="header-right">
        <Link to='/'>
          <p 
          className={`${activeTab === 'Home' ? 'active' : ''}`} onClick={()=> setActiveTab('Home')}>
            Home
          </p>
        </Link>

        <Link to='/addContact'>
          <p 
          className={`${activeTab === 'AddContact' ? 'active' : ''}`} 
          onClick={()=> setActiveTab('AddContact')}>
            Add Contact
          </p>
        </Link>
          
        <Link to='/about'>
          <p 
          className={`${activeTab === 'About' ? 'active' : ''}`} onClick={()=> setActiveTab('About')}>
            About
          </p>
        </Link>

        {user ? (
          <p 
          style={{cursor:'pointer'}}
          onClick={handleAuth}>
            Sign Out
          </p>
        ):(
          <Link>
            <p className={`${activeTab === 'Signin' ? 'active' : ''}`} onClick={()=> setActiveTab('Signin')}>
              Sign In
            </p>
          </Link>
        )}

      </div>
    </div>
  )
}

export default Header;