import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Notes, Tasks, Projects</h1>
      <p className={styles.subtitle}>All in a single place</p>
      <Link className={styles.links} to="/register">
        Sign In
      </Link>
      <Link className={styles.links} to="/login">
        Log In
      </Link>
    </div>
  );
}

export default Home;
