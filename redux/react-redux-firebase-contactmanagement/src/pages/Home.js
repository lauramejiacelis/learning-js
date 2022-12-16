import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { child, getDatabase, ref, remove, onValue, get, query, orderByChild, equalTo} from "firebase/database";
import { toast } from 'react-toastify'
import './Home.css'

const Home = () =>{
  const [data, setData] = useState({})
  const [sortedData, setSortedData] = useState([])
  const [sort, setSort] = useState(false)

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

  const filterData = (status)=> {
    console.log(status)
    get(query(ref((db), '/contacts'), orderByChild('status'), equalTo(status)))
    .then((snapshot)=>{
      if(snapshot.val()){
        const data = snapshot.val()
        setData(data)
      } else {
        setData({})
      }
    }).catch((err)=>console.log(err))
  }

  const handleChange = ({target}) => {
    console.log(target.value)
    setSort(true)
    get(query(ref((db), '/contacts'), orderByChild(`${target.value}`))).then((snapshot)=>{
      let sortedDat = []
      snapshot.forEach((snap)=>{
        sortedDat.push(snap.val())
      })
      setSortedData(sortedDat)
    })
    
  }
  console.log(sortedData)

  const CONTACT_INFO = {
    NAME: 'name',
    EMAIL: 'email',
    STATUS: 'status',
    CONTACT: 'contact'
  }

  const CONTACT_INFO_LABEL = Object.values(CONTACT_INFO).map((label)=>{
    let newLabel = label.charAt(0).toUpperCase() + label.slice(1)
    //console.log(newLabel)
    return newLabel
  })

  const handleReset = ()=>{
    setSort(false)
    onValue(child(ref(db), 'contacts'), (snapshot)=> {
      if(snapshot.val() !== null){
        setData({...snapshot.val()})
      } else {
        setData({})
      }
    })
  }

  return(
    <div className='mx-auto' style={{marginTop: '40px'}}>
      <table className='styled-table'>
        <thead>
          <tr>
            <th style={{textAlign: 'center'}}>No.</th>
            {CONTACT_INFO_LABEL.map((label)=><th key={label.toString()}>{label}</th>)}
            {!sort && (<th style={{textAlign: 'center'}}>Action</th>)}
          </tr>
        </thead>
        {!sort &&
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
      }
      {sort &&
        <tbody>
          {sortedData.map((item, index)=>{
            return (
              <tr key={index}>
                <th scope='row'>{index+1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.status}</td>
                <td>{item.contact}</td>
              </tr>
            )
          })}
        </tbody>
      }
      </table>

      <label>Sort by: </label>
      <select className='dropdown' name='sortValue' onChange={handleChange}>
        <option>Please select value</option>
        {CONTACT_INFO_LABEL.map((label)=><option value={label.toLowerCase()} key={label.toString()}>{label}</option>)}
      </select>

      <button className='bttn btn-reset' onClick={handleReset}>Reset</button>

      <label>Status: </label>
      <button className='bttn btn-active' onClick={()=> filterData('Active')}>Active</button>
      <button className='bttn btn-inactive' onClick={()=> filterData('Inactive')}>Inactive</button>
    </div>
  )
}

export default Home;