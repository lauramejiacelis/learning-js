import { Component } from "react";
import { Formik } from "formik";
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
          {(formik) => {
            return (
              <form onSubmit={formik.handleSubmit}>
                <VStack spacing={4}>
                  <FormControl
                    isInvalid={formik.errors.name && formik.touched.name}
                  >
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.name && formik.touched.name && (
                      <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl
                    isInvalid={formik.errors.email && formik.touched.email}
                  >
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.email && formik.touched.email && (
                      <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl
                    isInvalid={
                      formik.errors.password && formik.touched.password
                    }
                  >
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.password && formik.touched.password && (
                      <FormErrorMessage>
                        {formik.errors.password}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl
                    isInvalid={
                      formik.errors.confirmPassword &&
                      formik.touched.confirmPassword
                    }
                  >
                    <FormLabel>Confirm Password</FormLabel>
                    <Input
                      type="password"
                      name="confirmPassword"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.confirmPassword &&
                      formik.touched.confirmPassword && (
                        <FormErrorMessage>
                          {formik.errors.confirmPassword}
                        </FormErrorMessage>
                      )}
                  </FormControl>
                  <Button
                    type="submit"
                    disabled={!formik.isValid || !formik.dirty}
                  >
                    Submit
                  </Button>
                </VStack>
                <pre>{JSON.stringify(formik, null, 4)}</pre>
              </form>
            );
          }}
        </Formik>
      </Container>
    );
  }
}

export default App;
