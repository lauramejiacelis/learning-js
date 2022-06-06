/* eslint-disable react/jsx-filename-extension */
import { PureComponent, React } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Character from './Character';
import styles from './App.module.css';
import Docs from './Docs';
import About from './About';
import PageNotFound from './PageNotFound';

class App extends PureComponent {
  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.topnav}>
          <Link to="/" className={styles.headerText}>
            <img
              className={styles.homeLinkImage}
              alt="Home Logo"
              src="https://iselareyesperdomo94.github.io/MEX-Data-Lovers-008/src/img/rmicon.svg"
            />
          </Link>
          <Link to="/Docs" className={styles.headerText}>
            Docs
          </Link>
          <Link to="/About" className={styles.headerText}>
            About
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/about" element={<About />} />
          <Route path="/pagenotfound" element={<PageNotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
