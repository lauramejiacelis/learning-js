import { Component } from "react";
import {
  Container,
  VStack,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

class App extends Component {
  state = {
    email: "",
    name: "",
    errors: [],
  };

  handleNameChange = ({ target: { value } }) => this.setState({ name: value });

  handleEmailChage = ({ target: { value } }) => this.setState({ email: value });

  handleSubmit = (event) => {
    event.preventDefault(); // disable automatic navigation
    const { name, email } = this.state;
    const errors = [];

    if (name === "" || !name) {
      errors.push("Name is required");
    }

    if (email === "" || !email) {
      errors.push("Email is required");
    }

    if (!emailRegexp.test(email)) {
      errors.push("Email should contain @ and a domain");
    }

    if (errors.length > 0) {
      this.setState({ errors });
    } else {
      this.setState({ errors: [] });
      console.log("Melani");
    }
  };

  render() {
    return (
      <Container py={5}>
        <form onSubmit={this.handleSubmit}>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={this.state.email}
                onChange={this.handleEmailChage}
              />
            </FormControl>
            {this.state.errors.map((error) => (
              <span>{error}</span>
            ))}
            <Button type="submit">Submit</Button>
          </VStack>
        </form>
      </Container>
    );
  }
}

export default App;
