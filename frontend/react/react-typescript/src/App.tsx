import React from 'react';
import logo from './logo.svg';
import './App.css';

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
      </div>
    </div>
  )
}

export default App;
