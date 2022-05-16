import {Component} from 'react';
import { Form, Formik, ErrorMessage, Field } from "formik";
import { Avatar, Button, Box, Container, FormControl, Input, InputLabel, FormHelperText, Stack, Select, MenuItem } from '@mui/material';
import * as Yup from "yup";

const SignupSchema= Yup.object().shape({
  name: Yup.string().min(3,'muy corto!').required('Porfa ingresa tu nombre'),
  lastName: Yup.string().required('Porfa ingresa tu apellido'),
  gender: Yup.string().required('Porfa ingresa tu género'),
  email: Yup.string().email().required('Porfa ingresa tu email'),
  cel: Yup.number().min(10,'faltan números!'),
  password: Yup.string().min(4, 'muy corta!').max(10, 'muy larga').required('Porfa ingresa una contraseña'),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], 'No coinciden las contraseñas')
})

class App extends Component {
  handleSubmit = (values) =>{console.log(values)};

  render (){
    return (
      <Container maxWidth="sm" sx={{bgcolor: '#ccccff', py: '10px'}}>
        <Box sx={{ pt: 2 }}>
          <Avatar alt="Remy Sharp" src="https://i.pinimg.com/236x/6c/99/c0/6c99c007bc370a5351c51ab4cd77f52d.jpg" />
        </Box>
        
        <h1>Regístrate!</h1>
        
        <Formik
          initialValues={{
            name: "",
            lastName: "",
            gender: "",
            email: "",
            cel: 0,
            password: "",
            confirmPassword: "",
          }} 
          validationSchema={SignupSchema}
          onSubmit={this.handleSubmit}>
          {
            (formik) => (
              <Form>
                <Stack spacing={2}>
                  <FormControl color='secondary'>
                    <InputLabel htmlFor="name">Nombre</InputLabel>
                    <Field name='name' as={Input} aria-describedby="helper-name"/>
                    <FormHelperText id="helper-name">{formik.errors.name}</FormHelperText>
                  </FormControl>

                  <FormControl color='secondary'>
                    <InputLabel htmlFor="lastName">Apellido</InputLabel>
                    <Field name='lastName' as={Input}/>
                    <ErrorMessage name="lastName" component={FormHelperText}/>
                  </FormControl>

                  <FormControl color='secondary'>
                    <InputLabel htmlFor="gender">Género</InputLabel>
                    <Field as={Select} name="gender">
                      <MenuItem value="femenine">Femenino</MenuItem>
                      <MenuItem value="masculine">Masculino</MenuItem>
                      <MenuItem value="other">Otro</MenuItem>
                    </Field>
                    <ErrorMessage name="gender" component={FormHelperText} />
                  </FormControl>

                  <FormControl color='secondary'>
                    <InputLabel htmlFor="cel">Número de Celular</InputLabel>
                    <Field name='cel' as={Input}/>
                    <ErrorMessage name="cel" component={FormHelperText}/>
                  </FormControl>

                  <FormControl color='secondary'>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Field name='email' as={Input}/>
                    <ErrorMessage name="email" component={FormHelperText}/>
                  </FormControl>

                  <FormControl color='secondary'>
                    <InputLabel htmlFor="password">Contraseña</InputLabel>
                    <Field name='password' as={Input} type='password'/>
                    <ErrorMessage name="password" component={FormHelperText}/>
                  </FormControl>

                  <FormControl color='secondary'>
                    <InputLabel htmlFor="confirmPassword">Confirme la Contraseña</InputLabel>
                    <Field name='confirmPassword' as={Input} type='password'/>
                    <ErrorMessage name="confirmPassword" component={FormHelperText}/>
                  </FormControl>

                  <Button variant="contained"
                  color='secondary' type='submit' disabled={!formik.isValid || !formik.dirty}>Submit</Button>

                </Stack>
                
              </Form>
            )
          }
        </Formik>

      </Container>
    )
  }
}

export default App;
