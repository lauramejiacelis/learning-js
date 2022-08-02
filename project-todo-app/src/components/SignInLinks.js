import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

export const SignInLinks = () => {
  return (
    <div>
      <Link className={styles.links} to="/">
        Home
      </Link>
      <Link className={styles.links} to="/todos">
        ToDos
      </Link>
      <Link className={styles.button} to="/logout">
        LogOut
      </Link>
    </div>
  );
};
