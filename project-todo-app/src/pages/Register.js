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

  const handleSubmit = (data) => {
    registerFetch(data)
      .then((res) => res.json())
      .then((regis) => setUser(regis));
  };
  console.log(user);

  //registerFetch(data).then((regis) => setUser(regis))

  if (user.errors) {
    const errorInfo = user.errors.email || user.errors.details;
    return <ErrorComponent errorInfo={errorInfo} />;
  }
  //qué pasa cuando es otro error

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
