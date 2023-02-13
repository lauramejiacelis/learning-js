import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import CustomerClass from './components/CustomerClass';
import Employee from './components/Employee';
import EmployeeClass from './components/EmployeeClass'
import Counter from './components/Counter';

const App = ()=>{
  return(
    <div className="container mt-3">
      <div className="grid">
        <div className="row">
          <div className="col">
            <p className="h3 fw-bold text-success">App Component</p>
            <p className="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur expedita nulla natus. Magnam quasi vel sit pariatur, nemo libero suscipit eum nostrum quae quas explicabo ex non excepturi saepe, quod quo, ut debitis sequi!</p>
            <button className='btn btn-success btn-sm'>
              <i className="fa fa-book"></i>
              Read More</button>
          </div>
        </div>

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

        <div className="row">
          <div className="col">
            <Counter/>
          </div>
        </div> 


        
      </div>
    </div>
  )
}

export default App;
