import styles from '../App.module.css'
import {useState} from 'react'

export const TodoInput = ({todos, setTodos}) =>{
  const [input, setInput] = useState("") 
  
  const handleChange = ({target: {value}}) =>{
    setInput(value)
  }

  const handleAdd = () => {
    setTodos([...todos, input])
    setInput('')
  }
  
  return(
    <div className={styles.inputContainer}>
      <label for="todoInput">To do: </label>
      <input type="text" id="todoInput" data-testid="todoInput" name="todoInput" value={input} onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}