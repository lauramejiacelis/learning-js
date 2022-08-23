import styles from './App.module.css'
import {useState} from 'react'
import {TodoList} from './components/TodoList'
import {InputAdd} from './components/InputAdd'

function App() {
  //let data= ["eat", "pray", "love"]
  let data=[]

  const [todos, setTodos] = useState(data)

  const addTodo = ( userInput ) => {
    setTodos([...todos, userInput]) 
  }

  return (
    <div className={styles.mainContainer}>
      <h1>Testing Homework</h1>
      <InputAdd addTodo={addTodo}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;



