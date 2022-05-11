import { Component } from "react";
import { Form, Formik, ErrorMessage } from "formik";
import {
  Container,
  VStack,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
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
          }}
          onSubmit={this.handleSubmit}
        >
          {(formik) => (
            console.log(formik),
            (
              <form onSubmit={this.handleSubmit}>
                <VStack spacing={4}>
                  <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
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
                  <Button type="submit">Submit</Button>
                </VStack>
              </form>
            )
          )}
        </Formik>
      </Container>
    );
  }
}

export default App;
