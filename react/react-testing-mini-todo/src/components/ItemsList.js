import styles from '../App.module.css'

export const ItemsList = ({todos})=>{

  return (<div className={styles.listContainer}>
      <ul>
        {todos.map((todo, index)=><li data-testid="todo" key={index}>{todo}</li>)}
      </ul>
    </div>)
}