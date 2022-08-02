import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import { SignInLinks } from './SignInLinks';
import { SignOutLinks } from './SignOutLinks';

function NavBar() {
  return (
    <div className={styles.navBar}>
      <Link to="/">
        <img
          className={styles.logo}
          alt="logo"
          src="https://res.cloudinary.com/lauram2celis/image/upload/v1657729194/Project%20Todo%20App/Logotipo_marca_trazo_circular_azul_turquesa_2_zakaco.png"
        />
      </Link>
      <SignInLinks />
      <SignOutLinks />
    </div>
  );
}

export default NavBar;
