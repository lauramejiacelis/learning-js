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
      <h1>Testing Homework</h1>
      <InputAdd onAdd={handleAdd}/>
      <ItemsList todos={todos}/>
    </div>
  );
}

export default App;



