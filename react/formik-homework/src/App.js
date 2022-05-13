import {Component} from 'react';
import { Form, Formik, ErrorMessage, Field } from "formik";
import { Avatar, Button, Box, Container, FormControl, Input, InputLabel, FormHelperText, Stack, TextField } from '@mui/material';
import * as Yup from "yup";

const SignupSchema= Yup.object().shape({
  name: Yup.string().min(3,'muy corto!').required('Porfa ingresa tu nombre'),
  lastName: Yup.string().required(),
  gender: Yup.string(),
  email: Yup.string().email().required(),
  password: Yup.string().min().max().required(),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], 'No coinciden las contraseñas')
})

class App extends Component {
  handleSubmit = (values) =>{console.log(values)};

  render (){
    return (
      <Container maxWidth="sm" sx={{bgcolor: '#ccccff', py: '10px'}}>
        <Box sx={{ pt: 2 }}>
          <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqBSc0gg_8l_k-xFGWM0X3mvx6BCgW9l-XQA&usqp=CAU" />
        </Box>
        
        <h1>Registrate!</h1>
        
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
                    <Input name='name' id="name" aria-describedby="helper-name"
                    onChange={formik.handleChange}/>
                    <ErrorMessage name="name" />
                    <FormHelperText id="helper-name">{formik.touched.name && formik.errors.name}</FormHelperText>
                  </FormControl>

                  <FormControl color='secondary'>
                    <InputLabel htmlFor="lastName">Apellido</InputLabel>
                    <Input id="lastName"/>
                  </FormControl>

                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />

                  <Button variant="contained"
                  color='secondary' type='submit'>Submit</Button>

                </Stack>
                <pre>{JSON.stringify(formik, null, 4)}</pre>
              </Form>
            )
          }
        </Formik>

      </Container>
    )
  }
}

export default App;
