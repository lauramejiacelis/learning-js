import {PureComponent} from 'react';
import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
//import Pokedex from './Pokedex';

class App extends PureComponent {
  render () {
    return(
      <div className={styles.mainContainer}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} alt='' src='https://tec.com.pe/wp-content/uploads/2021/02/ddew4m7-c69a2c41-518f-48ca-ba35-8ab1895464e0.png'/>
        </div>

        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/pokedex' element={<Pokedex/>}/> */}
        </Routes>

      </div>
    )
  }
}

export default App;
