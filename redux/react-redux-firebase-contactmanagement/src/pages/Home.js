import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { child, getDatabase, ref, remove, onValue} from "firebase/database";
//import { db } from '../firebase'
import { toast } from 'react-toastify'
import './Home.css'

const Home = () =>{
  const [data, setData] = useState({})
  const db = getDatabase();

  useEffect(()=>{
    onValue(child(ref(db), 'contacts'), (snapshot)=> {
      if(snapshot.val() !== null){
        setData({...snapshot.val()})
      } else {
        setData({})
      }
    })
    return ()=> {
      setData({})
    }

  },[db])
  console.log(data)

  const onDelete = (id) => {
    if(window.confirm('Please confirm you want to delete this contact')){
      remove(child(ref(db), `contacts/${id}`)).then(()=>{
        toast.success('Contact deleted successfully')
      })
      .catch((err)=>{
        toast.error(err)
      })
    }
  }


  return(
    <div className='mx-auto' style={{marginTop: '40px'}}>
      <table className='styled-table'>
        <thead>
          <tr>
            <th style={{textAlign: 'center'}}>No.</th>
            <th style={{textAlign: 'center'}}>Name</th>
            <th style={{textAlign: 'center'}}>Email</th>
            <th style={{textAlign: 'center'}}>Status</th>
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
                <td>{data[id].status}</td>
                <td>{data[id].contact}</td>
                <td>
                  <Link to={`/update/${id}`}>
                    <button className='bttn btn-edit'>Edit</button>
                  </Link>

                  <button className='bttn btn-delete' onClick={()=>onDelete(id)}>Delete</button>

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