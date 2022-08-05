import styles from './Login.module.css';
import { Formik, Form } from 'formik';
import { loginSchema } from '../services/schemas';
import { Link } from 'react-router-dom';
import { FormInput } from '../components/FormInput';
import { ErrorComponent } from '../components/Error';
import { useDispatch, useSelector } from 'react-redux';
import { loginErrorSelector, loginSelector } from '../redux/users/selectors';
import { loginThunk } from '../redux/users/thunks';
import { UserInfo } from '../components/User';
import { Box, Heading } from '@chakra-ui/react';
import { Redirect } from 'react-router-dom'

function Login() {
  const user = useSelector(loginSelector);
  const error = useSelector(loginErrorSelector);
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    console.log(data);
    dispatch(loginThunk(data));
  };

  console.log(user);
  console.log(error);
  console.log(user.data)

  if (user.data) {
    return (
      <Box py={5}>
        <Heading color="#4b4234" size="md" textAlign="center">
          Login Success
        </Heading>
        <UserInfo user={user.data} />
      </Box>
    );
  }

  return (
    <div>
      <div className={styles.mainContainer}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className={styles.form}>
              <h1>Login</h1>
              <FormInput
                label="Email"
                name="email"
                type="text"
                placeholder="email@email.com"
              />
              <FormInput
                label="Password"
                name="password"
                type="password"
                placeholder="*********"
              />
              <button type="submit">Send</button>
              <Link to="/register">Don't have an account yet?</Link>
            </Form>
          )}
        </Formik>
      </div>
      <div>
        {error ? (
          <ErrorComponent
            errorPlace={Object.keys(error)}
            errorInfo={Object.values(error)}
          />
        ) : (
          ''
        )}
      </div>
      {/* <div>
        {user ? (
          <Box py={5}>
            {' '}
            <Heading color="#4b4234" size="md" textAlign="center">
              Login Success
            </Heading>
            <UserInfo user={user} />
          </Box>
        ) : (
          ''
        )}
      </div> */}
    </div>
  );
}

export default Login;
