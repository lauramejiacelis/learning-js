import { Formik, Form } from 'formik';
import styles from './Register.module.css';

import { Link } from 'react-router-dom';
import { RegisterSchema } from '../services/Schemas';
import { FormInput } from '../components/FormInput';

const RegisterForm = () => {
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
  );
};

export default RegisterForm;
