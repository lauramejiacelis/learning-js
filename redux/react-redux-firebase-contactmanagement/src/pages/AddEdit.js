import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import './AddEdit.css'
import { getDatabase, ref,  child, push , onValue, set} from "firebase/database";


const initialState = {
  name: '',
  email: '',
  contact:'',
  status: ''
}

const AddEdit =()=>{
  const [state, setState] = useState(initialState)
  console.log(state)

  const [data, setData] =useState({})

  const {name, email, contact, status} = state

  const navigate = useNavigate()

  const {id} = useParams()

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

  useEffect(()=>{
    if(id){
      setState({ ...data[id] })
    } else {
      setState({ ...initialState })
    }
  }, [id, data])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name || !email || !contact || !status){
      toast.error('Please provide value into each input')
    } else {
      console.log(state)

      if (!id){
        push(child(ref(db), 'contacts'), {name, email, contact, status})
        .then(() => {
          toast.success('Contact added successfully')
          console.log('Data saved successfully!')
        })
        .catch((err) => {
          toast.error(err)
          console.log(err)
        });
      } else {
        set(child(ref(db), `contacts/${id}`), {name, email, contact, status})
        .then(() => {
          toast.success('Contact updated successfully')
          console.log('Data updated successfully!')
        })
        .catch((err) => {
          toast.error(err)
          console.log(err)
        });
      }

      setTimeout(()=> navigate('/'), 500)
    }

  }

  const handleInputChange = ({target}) =>{
    setState({...state, [target.name]: target.value})
  }

  return(
    <div style={{marginTop: '100px'}}>
      <form style={{
        margin: 'auto',
        padding: '15px',
        maxWidth: '400px',
        alignContent:'center'
      }}
      onSubmit={handleSubmit}>

        <label htmlFor="name">Name</label>
        <input
          type='text'
          id='name'
          placeholder="Your Name..."
          name="name"
          onChange={handleInputChange} 
          value={name || ''}
          />

        <label htmlFor="email">Email</label>
        <input
          type='email'
          id='email'
          placeholder="Your email..."
          name="email"
          onChange={handleInputChange} 
          value={email || ''}
          /> 

        <label htmlFor="contact">Contact Number</label>
        <input
          type='number'
          id='contact'
          placeholder="Your contact number..."
          name="contact"
          onChange={handleInputChange} 
          value={contact || ''}
          /> 

        <label htmlFor="status">Status</label>
        <select name="status" id="status" onChange={handleInputChange}>
          <option value='active'>Active</option>
          <option value='inactive'>Inactive</option>
        </select>

        <input type='submit' value={id ? 'Update' : 'Save'}/>

      </form>

    </div>
  )
}

export default AddEdit;