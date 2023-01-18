import {PureComponent} from 'react'
import { Container, Heading,  VStack } from '@chakra-ui/react'
import TodoInput from './TodoInput';

class App extends PureComponent {
  render(){
    return(
      <Container py={12}>
        <VStack spacing={10} align="stretch">
          <Heading>My Todo App</Heading>
          <TodoInput/>
        </VStack>
      </Container>
    )
  }
}

export default App;

