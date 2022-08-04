import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import { SignInLinks } from './SignInLinks';
import { SignOutLinks } from './SignOutLinks';
import { useSelector } from 'react-redux';
import { loginSelector } from '../redux/users/selectors';

function NavBar() {
  const user = useSelector(loginSelector);
  console.log(user);
  const links = user ? <SignInLinks /> : <SignOutLinks />;
  return (
    <div className={styles.navBar}>
      <Link to="/">
        <img
          className={styles.logo}
          alt="logo"
          src="https://res.cloudinary.com/lauram2celis/image/upload/v1657729194/Project%20Todo%20App/Logotipo_marca_trazo_circular_azul_turquesa_2_zakaco.png"
        />
      </Link>
      {links}
    </div>
  );
}

export default NavBar;
