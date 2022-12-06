import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import UserRoute from './components/UserRoute';
import { auth } from './firebase'
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from './redux/users/actionCreators';

function App() {
  const dispatch= useDispatch()

  useEffect(()=>{
    onAuthStateChanged(auth, (authUser)=>{
      authUser ? dispatch(setUser(authUser)) : dispatch(setUser(null))
    })
  },[dispatch])
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <UserRoute>
            <Home/>
          </UserRoute>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
