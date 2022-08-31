import styles from './App.module.css'
import {useState} from 'react'
import {ItemsList} from './components/ItemsList'
import {InputAdd} from './components/InputAdd'

function App() {
  //let data= ["eat", "pray", "love"]
  let data=[]

  const [todos, setTodos] = useState(data)

  const handleAdd = ( userInput ) => {
    setTodos([...todos, userInput]) 
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.tittleContainer}>
        <h1>To Do List</h1>
        <h6>Testing Homework</h6>
      </div>
      
      <InputAdd onAdd={handleAdd}/>
      <ItemsList todos={todos}/>
    </div>
  );
}

export default App;



