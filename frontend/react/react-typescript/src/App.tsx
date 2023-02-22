import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import CustomerClass from './components/CustomerClass';
import Employee from './components/Employee';
import EmployeeClass from './components/EmployeeClass'
import Counter from './components/Counter';
import Greetings from './components/Greetings';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';
import UsersList from './components/UsersList';
import Navbar from './components/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import UserDetails from './components/UserDetails';
import About from './components/About';

const App = ()=>{
  return(
    <React.Fragment>
      {/* <div className="grid"> */}
        {/* <div className="row">
          <div className="col">
            <p className="h3 fw-bold text-success">App Component</p>
            <p className="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur expedita nulla natus. Magnam quasi vel sit pariatur, nemo libero suscipit eum nostrum quae quas explicabo ex non excepturi saepe, quod quo, ut debitis sequi!</p>
            <button className='btn btn-success btn-sm'>
              <i className="fa fa-book"></i>
              Read More</button>
          </div>
        </div> */}

        {/*Props Concept*/}
        {/* <div className="row">
          <div className="col">
            <Customer name={'laura'} age={34} title={'Frontend Developer'}/>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <CustomerClass name={'laura'} age={34} title={'Frontend Developer'}/>
          </div>
        </div> */}

        {/*State Concept*/}
        {/* <div className="row">
          <div className="col">
            <Employee/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <EmployeeClass/>
          </div>
        </div> */}

        {/*Event Handling*/}
        {/* <div className="row">
          <div className="col">
            <Counter/>
          </div>
        </div> 

        <div className="row">
          <div className="col">
            <Greetings/>
          </div>
        </div> */}

        {/*Form Handling*/}
        {/* <div className="row">
          <div className="col">
            <LoginForm/>
          </div>
        </div> */}

        {/*List Rendering*/}
        {/* <div className="row">
          <div className="col">
            <UserList/>
          </div>
        </div> */}

        {/*Server Connection with Axios */}
        {/* <div className="row">
          <div className="col">
            <UsersList/>
          </div>
        </div> */}
        
      {/* </div> */}

      {/*React Routing */}
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
        <Route path={'/contacts/list'} element={<UsersList/>}/>
        <Route path={'/contact/:id'} element={<UserDetails/>}/>
        <Route path={'/about'} element={<About/>}/>
      </Routes>


    </React.Fragment>
  )
}

export default App;
