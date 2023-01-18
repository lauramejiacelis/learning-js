import { PureComponent } from "react";
import { Container, VStack } from "@chakra-ui/react";
import TodoInput from "./TodoInput";
import TodoContainer from "./TodoContainer";
import Card from "./Card";

class App extends PureComponent {
  render() {
    return (
      <Container py={12}>
        <VStack spacing={10} align="stretch">
          <TodoInput />
          <TodoContainer />
        </VStack>
      </Container>
    );
  }
}

export default App;
