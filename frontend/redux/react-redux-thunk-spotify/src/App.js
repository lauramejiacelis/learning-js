import {Component} from 'react';
import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Artist from './Artist'

class App extends Component {
  render(){
    return (
      <div>
        <div className={styles.logoContainer}>
          <img 
            className={styles.logo}
            src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' alt='spotify logo' 
          />
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/artist/:id' element={<Artist/>}/>
        </Routes>
      </div>
      
    )
  }
}

export default App;
