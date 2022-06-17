import {PureComponent} from 'react'
import { FormControl, FormHelperText, FormLabel, Heading, Input, Text, VStack } from '@chakra-ui/react'
import TodoInput from './TodoInput';

class App extends PureComponent {
  render(){
    return(
      <VStack>
        <Heading>My Todo App</Heading>
        <TodoInput/>
      </VStack>
    )
  }
}

export default App;

