import { Formik, Form } from 'formik';
import styles from './Register.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { connect } from 'react-redux';
import { registerSchema } from '../services/schemas';
import { FormInput } from '../components/FormInput';
import { registerFetch } from '../services/fetchs';

import { ErrorComponent } from '../components/Error';

const RegisterForm = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState()

  const handleSubmit = (data) => {
    registerFetch(data)
      .then((data)=> setUser(data))
      .catch((err)=>setError(err))
  };
  console.log(user);

  if (error) {
    const errorInfo = error.email || error.details;//improve
    return <ErrorComponent errorInfo={errorInfo} />;
  }
  //qué pasa cuando es otro error
  //llevarme esta lógica para el thunk... en el redux se guarda cuando ya haya hecho el fetch

  return (
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
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
