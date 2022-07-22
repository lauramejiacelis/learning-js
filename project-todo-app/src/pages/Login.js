import styles from './Login.module.css';
import { Formik, Form } from 'formik';
import { loginSchema } from '../services/schemas';
import { Link } from 'react-router-dom';
import { FormInput } from '../components/FormInput';

function Login() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
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
            <button>Send</button>
            <Link to="/register">Don't have an account yet?</Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
