import { Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Formik, Form, useField} from 'formik';
import * as Yup from 'yup';

function App() {

  const [user, setUser] = useState({})
  const [loginError, setLoginError] = useState()
  const [todos, setTodos] = useState({})

  const handleSubmit = (data)=>{
    console.log("submit")
    loginFetch(data)
    setUser(data)
  }
  console.log(user)


  return <Container>
    <VStack py={10}>
      <Heading>Login</Heading>
      <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form>
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
              <Button type="submit">Send</Button>
              
            </Form>
          )}
        </Formik>
    </VStack>
    <VStack mt={5}>
      <Heading>Todos</Heading>
    </VStack>
  </Container>;
}

export default App;


const loginFetch = (user) =>{
  return(
    fetch('https://dsangel-todos-api.herokuapp.com/api/login',{
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
      }).then((res)=>{
        console.log(res)
        return res.json().then((info)=>{
          if (!res.ok) {
            throw info
          }
          return info
        })
      })
  )
}



export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email'),
  password: Yup.string()
    .min(6, 'too short')
    .max(9, 'too long')
    .required('Please enter your password'),
});


export const FormInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <FormLabel htmlFor={props.name}>{label}</FormLabel>
      <Input {...field} {...props}></Input>
      {meta.touched && meta.error ? (
        <div >{meta.error}</div>
      ) : null}
    </>
  );
};