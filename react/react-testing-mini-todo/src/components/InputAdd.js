import styles from '../App.module.css'
import {useState} from 'react'

export const InputAdd = ({addTodo}) =>{
  const [input, setInput] = useState("") 
  const [error, setError] = useState(false)
  
  const handleChange = ({target: {value}}) =>{
    setInput(value)
    setError(false)
  }
  
  const handleAdd = () => {
    if (input){
      addTodo(input)
      setInput('')
    } else {
      setError(true)
    }
    
  }

  return(
    <div className={styles.inputContainer}>
      <label for="inputAdd">To do: </label>
      <input type="text" id="inputAdd" data-testid="inputAdd" name="todoInput" value={input} onChange={handleChange} />
      {error ? <div style={{color: "red"}} data-testid="error">Error</div> : ""}
      <button onClick={handleAdd}>Add</button>
    </div>

  )
}