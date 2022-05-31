/* eslint-disable react/jsx-filename-extension */
import { PureComponent, React } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import styles from './App.module.css';

class App extends PureComponent {
  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.tittleContainer}>
          <h1>The Rick and Morty API</h1>
          <img
            className={styles.bgImage}
            alt="Rick And Morty"
            src="https://repository-images.githubusercontent.com/120371205/b6740400-92d4-11ea-8a13-d5f6e0558e9b"
          />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default App;
