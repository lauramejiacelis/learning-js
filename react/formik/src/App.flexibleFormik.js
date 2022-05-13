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
            age: "",
          }}
          validate={(values) => {
            let errors = {};

            if (values.name === "") {
              errors.name = "Name is Required";
            }

            if (values.email === "") {
              errors.email = "Email is Required";
            }
            return errors;
          }}
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
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </FormControl>
                  <div>
                    <label>Age:</label>
                    <input
                      type="text"
                      name="age"
                      value={formik.values.age}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
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
