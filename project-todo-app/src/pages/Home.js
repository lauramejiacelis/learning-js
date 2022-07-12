import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <div>
      <NavBar />
      <div className={styles.mainContent}>
        <h1>The way to handle your tasks</h1>
        <Link to="/register">Sign In</Link>
        <Link to="/login">Log In</Link>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Home;
