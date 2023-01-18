/* eslint-disable react/jsx-filename-extension */
import { PureComponent, React } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Character from './Character';
import styles from './App.module.css';
import Docs from './Docs';
import About from './About';
import PageNotFound from './PageNotFound';
import { withTheme } from './ThemeProvider';

class App extends PureComponent {
  render() {
    return (
      <div className={styles.mainContainer}>
        <TopNavWithTheme />
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

function TopNav(props) {
  console.log(props);
  return (
    <div
      className={styles.topnav}
      style={{ color: props.color, backgroundColor: props.bgColor }}
    >
      <Link to="/" className={styles.headerText}>
        <img
          className={styles.homeLinkImage}
          alt="Home Logo"
          src="https://iselareyesperdomo94.github.io/MEX-Data-Lovers-008/src/img/rmicon.svg"
        />
      </Link>
      <Link
        to="/Docs"
        className={styles.headerText}
        style={{ color: props.color }}
      >
        Docs
      </Link>
      <Link
        to="/About"
        className={styles.headerText}
        style={{ color: props.color }}
      >
        About
      </Link>
      <ButtonWithTheme></ButtonWithTheme>
    </div>
  );
}

const TopNavWithTheme = withTheme(TopNav);

function Button(props) {
  console.log(props);
  return (
    <button onClick={() => props.toggleTheme()}>
      <img
        className={styles.switch}
        alt="switch"
        src="https://cdn2.iconfinder.com/data/icons/iot-outline/128/ic_theme_switch-512.png"
      />
    </button>
  );
}

const ButtonWithTheme = withTheme(Button);
