import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import './AddEdit.css'
import { getDatabase, ref,  child, push } from "firebase/database";


const initialState = {
  name: '',
  email: '',
  contact:''
}

const AddEdit =()=>{
  const [state, setState] = useState(initialState)
  console.log(state)

  const [data, setData] =useState({})

  const {name, email, contact} = state

  const navigate = useNavigate()

  const db = getDatabase();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name || !email || !contact){
      toast.error('Please provide value into each input')
    } else {
      console.log(state)

      push(child(ref(db), 'contacts'), {name, email, contact}).then(() => {
        toast.success('Contact added successfully')
        console.log('Data saved successfully!')
      })
      .catch((err) => {
        toast.error(err)
        console.log(err)
      });

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
          value={name}
          />

        <label htmlFor="email">Email</label>
        <input
          type='email'
          id='email'
          placeholder="Your email..."
          name="email"
          onChange={handleInputChange} 
          value={email}
          /> 

        <label htmlFor="contact">Contact Number</label>
        <input
          type='number'
          id='contact'
          placeholder="Your contact number..."
          name="contact"
          onChange={handleInputChange} 
          value={contact}
          /> 

        <input type='submit' value='Save'/>

      </form>

    </div>
  )
}

export default AddEdit;