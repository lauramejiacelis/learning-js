import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

export const SignOutLinks = () => {
  return (
    <div>
      <Link className={styles.links} to="/">
        Home
      </Link>
      <Link className={styles.links} to="/aboutus">
        About Us
      </Link>
      <Link className={styles.links} to="/contactus">
        Contact Us
      </Link>
      <Link className={styles.button} to="/register">
        Sign In
      </Link>
    </div>
  );
};
