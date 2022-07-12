import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <div className={styles.navBar}>
      <img
        className={styles.logo}
        alt="logo"
        src="https://res.cloudinary.com/lauram2celis/image/upload/v1657664313/Project%20Todo%20App/9_xcnbca.png"
      />
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
    </div>
  );
}

export default NavBar;
