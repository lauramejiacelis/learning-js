import { Component } from "react";
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

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

class App extends Component {
  state = {
    email: "",
    name: "",
    nameError: null,
    pristine: true,
  };

  handleNameChange = ({ target: { value } }) =>
    this.setState({ name: value, pristine: false });

  handleEmailChage = ({ target: { value } }) =>
    this.setState({ email: value, pristine: false });

  handleValidateName = ({ target: { value } }) => {
    console.log(value);
    if (value === "") {
      this.setState({ nameError: "Name is required" });
    } else {
      this.setState({ nameError: null });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault(); // disable automatic navigation
  };

  render() {
    console.log(this.state);
    return (
      <Container py={5}>
        <form onSubmit={this.handleSubmit}>
          <VStack spacing={4}>
            <FormControl isInvalid={this.state.nameError}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
                onBlur={this.handleValidateName}
              />
              {this.state.nameError && (
                <FormErrorMessage>{this.state.nameError}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={this.state.email}
                onChange={this.handleEmailChage}
              />
            </FormControl>
            <Button
              type="submit"
              disabled={this.state.pristine || this.state.nameError}
            >
              Submit
            </Button>
          </VStack>
        </form>
      </Container>
    );
  }
}

export default App;
