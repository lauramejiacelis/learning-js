import { Formik, Form } from 'formik';
import styles from './Register.module.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { registerSchema } from '../services/schemas';
import { FormInput } from '../components/FormInput';
import { signInErrorSelector, signInSelector } from '../redux/users/selectors';
import { signInThunk } from '../redux/users/thunks';
import { ErrorComponent } from '../components/Error';
import { UserInfo } from '../components/User';

const RegisterForm = () => {
  const user = useSelector(signInSelector);
  //console.log(user.length);
  const error = useSelector(signInErrorSelector);
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    dispatch(signInThunk(data));
  };

  if (user.length > 0) {
    return (
      <Container>
        <Heading color="#4b4234" size="md" textAlign="center">
          Register Success
        </Heading>
        <UserInfo user={user} />
        <Text color="#4b4234" fontWeight="bold">
          Now you can:
        </Text>
        <Box
          bgColor="#48c2a6"
          color="beige"
          p="5px 25px"
          borderRadius="5px"
          fontSize="1.2em"
          fontWeight="bold"
        >
          <Link to="/login">Log In</Link>
        </Box>
      </Container>
    );
  }
  //revisar porque no me daba

  return (
    <div>
      <div className={styles.registerContainer}>
        <Formik
          initialValues={{
            email: '',
            name: '',
            lastname: '',
            password: '',
          }}
          validationSchema={registerSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className={styles.form}>
              <h1>Register</h1>
              <FormInput
                label="Email"
                name="email"
                type="email"
                placeholder="mail@mail.com"
              />
              <FormInput
                label="Name"
                name="name"
                type="name"
                placeholder="John"
              />
              <FormInput
                label="Last Name"
                name="lastname"
                type="lastname"
                placeholder="Due"
              />
              <FormInput
                label="Password"
                name="password"
                type="password"
                placeholder="*********"
              />

              <button type="submit">Send</button>
              <Link to="/login">Already have an account?</Link>
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
              Register Success
            </Heading>
            <UserInfo user={user} />
          </Box>
        ) : (
          ''
        )}
      </div> */}
    </div>
  );
};

export default RegisterForm;
