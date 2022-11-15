import { NavLink } from 'react-router-dom';

const SignInLinks = () => {
  return (
    <ul className="right">
      <li>
        {' '}
        <NavLink to="/create">New Project</NavLink>{' '}
      </li>
      <li>
        {' '}
        <NavLink to="/">Log Out</NavLink>{' '}
      </li>
      <li>
        {' '}
        <NavLink to="/" className="btn btn-floating teal accent-3">
          LM
        </NavLink>{' '}
      </li>
    </ul>
  );
};

export default SignInLinks;
