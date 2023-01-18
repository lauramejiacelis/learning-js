import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getDatabase, onValue, child, ref, orderByChild, equalTo, get, query } from 'firebase/database';
import './Search.css'

const Search = ()=>{
  const [data, setData] = useState()

  const useQuery = ()=>{
    return new URLSearchParams(useLocation().search)
  }

  let query1= useQuery()
  
  let search = query1.get('name')
  console.log(search)
  const db = getDatabase();

  useEffect(()=>{
    searchData()
  },[search])

  const searchData = ()=>{

    get(query(ref((db), '/contacts'), orderByChild('name'), equalTo(search)))
    .then((snapshot)=>{
      if(snapshot.val()){
        const data = snapshot.val()
        setData(data)
      } else {
        setData({})
      }
    }).catch((err)=>console.log(err))

    return ()=> {
      setData({})
    }
  }

  console.log('data -->',data)

  if(data && Object.keys(data).length !== 0){
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
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
  } else {
    return(
      <div>
        <h2>No results found with that name: {search}</h2>
      </div>
    )
  }
  
}

export default Search;