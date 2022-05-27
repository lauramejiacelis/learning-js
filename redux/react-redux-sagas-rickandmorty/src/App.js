import {PureComponent} from 'react';
import styles from './App.module.css'

class App extends PureComponent {

  render(){
    return (
      <div>
        <img className={styles.appLogo} alt='logo Rick and Morty' src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg'/>
        <h1>My App Rick And Morty</h1>
      </div>
    )
  }
}

export default App;