import { Formik } from 'formik';
import styles from './Register.module.css';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email().required('Please enter your e-mail'),
  name: Yup.string()
    .min(3, 'Try a longer name')
    .required('Please enter your name'),
  lastname: Yup.string().required('Please enter your last name'),
  password: Yup.string()
    .min(6, 'too short')
    .max(9, 'too long')
    .required('Please enter a password'),
});

function Register() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={styles.registerContainer}>
      <Formik
        initialValues={{
          email: '',
          name: '',
          lastname: '',
          password: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <form className={styles.form}>
            <h1>Register</h1>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="mail@mail.com" />
            </div>
            <div>
              <label htmlFor="name">Name</label>
              <input type="name" name="name" placeholder="John" />
            </div>
            <div>
              <label htmlFor="lastname">Last name</label>
              <input type="lastname" name="lastname" placeholder="Due" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
            </div>
            <button type="submit">Send</button>
            <Link to="/login">Already have an account?</Link>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
