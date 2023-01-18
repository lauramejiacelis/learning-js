import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutThunk } from '../redux/users/thunks';

export const SignInLinks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutThunk());
    navigate('./');
  };

  return (
    <div>
      <Link className={styles.links} to="/">
        Home
      </Link>
      <Link className={styles.links} to="/todos">
        ToDos
      </Link>
      <a href=" " onClick={handleLogout} className={styles.button}>
        LogOut
      </a>
    </div>
  );
};
