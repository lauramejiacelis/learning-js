import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase'
import { toast } from 'react-toastify'
import './Home.css'

const Home = () =>{
  const [data, setData] = useState({})

  useEffect(()=>{},[])



  return(
    <div className='mx-auto' style={{marginTop: '40px'}}>
      <table className='styled-table'>
        <thead>
          <tr>
            <th style={{textAlign: 'center'}}>No.</th>
            <th style={{textAlign: 'center'}}>Name</th>
            <th style={{textAlign: 'center'}}>Email</th>
            <th style={{textAlign: 'center'}}>Contact</th>
            <th style={{textAlign: 'center'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id, index) => {
            return (
              <tr key={id}>
                <th scope='row'>{index+1}</th>
                <td>{data[id].name}</td>
                <td>{data[id].email}</td>
                <td>{data[id].contact}</td>
                <td>
                  <Link to={`/update/${id}`}>
                    <button className='bttn btn-edit'>Edit</button>
                  </Link>

                  <button className='bttn btn-delete'>Delete</button>

                  <Link to={`/view/${id}`}>
                    <button className='bttn btn-view'>view</button>
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home;