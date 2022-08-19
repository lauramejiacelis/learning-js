import styles from './App.module.css'
import {useState} from 'react'

function App() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState(["mercar", "comer"])

  const handleChange = ({target: {value}}) =>{
    setInput(value)
  }

  const handleAdd = () => {
    setTodos([...todos, input])
    setInput('')
  }

  return (
    <div className={styles.mainContainer}>
      <h1>Testing Homework</h1>
      <div className={styles.inputContainer}>
        <label for="todoInput">To do: </label>
        <input type="text" id="todoInput" name="todoInput" value={input} onChange={handleChange} />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className={styles.listContainer}>
        <ul>
          {todos.map((todo)=><li>{todo}</li>)}
        </ul>
        </div>
    </div>
  );
}

export default App;
