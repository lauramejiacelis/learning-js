import { Component } from "react";
import { Form, Formik, ErrorMessage, Field } from "formik";
import {
  Container,
  VStack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import * as Yup from "yup";

console.log(Yup);

// builder pattern
const UserSchema = Yup.object().shape({
  name: Yup.string().required("Nombre es requerido"),
  email: Yup.string()
    .email("Debe ser un email valido")
    .required("Email es requerido"),
  password: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .max(8, "Maximo 8 caracteres")
    .required("Password is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Confirm no es igual"
  ),
});

class App extends Component {
  handleSubmit = (values) => {
    console.log(values);
  };

  render() {
    return (
      <Container py={5}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={UserSchema}
          onSubmit={this.handleSubmit}
        >
          {(formik) => (
            <Form>
              <VStack spacing={4}>
                <FormControl
                  isInvalid={formik.errors.name && formik.touched.name}
                >
                  <FormLabel>Name</FormLabel>
                  <Field name="name" as={Input} placeholder="Hola" />
                  <ErrorMessage name="name" component={FormErrorMessage} />
                </FormControl>
                <FormControl
                  isInvalid={formik.errors.email && formik.touched.email}
                >
                  <FormLabel>Email</FormLabel>
                  <Field name="email" as={Input} />
                  <ErrorMessage name="email" component={FormErrorMessage} />
                </FormControl>
                <FormControl
                  isInvalid={formik.errors.password && formik.touched.password}
                >
                  <FormLabel>Password</FormLabel>
                  <Field type="password" name="password" as={Input} />
                  <ErrorMessage name="password" component={FormErrorMessage} />
                </FormControl>
                <FormControl
                  isInvalid={
                    formik.errors.confirmPassword &&
                    formik.touched.confirmPassword
                  }
                >
                  <FormLabel>Confirm Password</FormLabel>
                  <Field type="password" name="confirmPassword" as={Input} />
                  <ErrorMessage
                    name="confirmPassword"
                    component={FormErrorMessage}
                  />
                </FormControl>
                <Button
                  type="submit"
                  disabled={!formik.isValid || !formik.dirty}
                >
                  Submit
                </Button>
              </VStack>
              <pre>{JSON.stringify(formik, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </Container>
    );
  }
}

export default App;
