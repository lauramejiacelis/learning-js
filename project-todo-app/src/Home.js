import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <div>
      <h1>The way to handle your tasks</h1>
      <Link to="/register">Sign In</Link>
      <Link to="/login">Log In</Link>
      <button>Login</button>
    </div>
  );
}

export default Home;
