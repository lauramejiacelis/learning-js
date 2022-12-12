import { child, get, getDatabase, ref } from 'firebase/database';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './View.css'

const View = () => {
  const [user, setUser] = useState({})

  const {id} = useParams()

  const db = getDatabase()

  useEffect(()=>{
    get(child(ref(db), `contacts/${id}`))
    .then((snapshot) => {
      if(snapshot.exists()){
        setUser({...snapshot.val()})
      } else {
        setUser({})
      }
    })
  },[db, id])
  
  return(
    <div style={{marginTop: '150px'}}>
      <div className='card'>
        <div className='card-header'>
          <p>User Contact Detail</p>
        </div>
        <div className='container'>
          <strong>ID:</strong>
          <span>{id}</span>
        </div>
        
        <div className='container'>
          <strong>Name: </strong>
          <span>{user.name}</span>
        </div>
        
        <div className='container'>
          <strong>Email: </strong>
          <span>{user.email}</span>
        </div>

        <div className='container'>
          <strong>Contact:</strong>
          <span>{user.contact}</span>
        </div>

        <Link to='/'>
          <button className='bttn btn-edit'>Go Back</button>
        </Link>

      </div>
    </div>
  )
}

export default View;