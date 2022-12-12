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
import Header from './components/Header';
import AddEdit from './pages/AddEdit';
import About from './pages/About';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import View from './pages/View';
import Search from './pages/Search';

function App() {
  const dispatch= useDispatch()

  useEffect(()=>{
    onAuthStateChanged(auth, (authUser)=>{
      authUser ? dispatch(setUser(authUser)) : dispatch(setUser(null))
    })
  },[dispatch])
  
  return (
    <div className="App">
      <Header/>
      <ToastContainer position='top-center' />
      <Routes>
        <Route path='/' element={<UserRoute/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
        
        <Route path='/' element={
          <UserRoute>
            <Home/>
          </UserRoute>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        <Route path='/' element={<UserRoute/>}>
          <Route path='/addcontact' element={<AddEdit/>}/>
        </Route>

        <Route path='/' element={<UserRoute/>}>
          <Route path='/update/:id' element={<AddEdit/>}/>
        </Route>

        <Route path='/' element={<UserRoute/>}>
          <Route path='/view/:id' element={<View/>}/>
        </Route>

        <Route path='/' element={<UserRoute/>}>
          <Route path='/search' element={<Search/>}/>
        </Route>

        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
