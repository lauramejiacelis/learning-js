import {
  Button,
  Input,
  Container,
  FormControl,
  FormLabel,
  Box,
} from '@chakra-ui/react';
import { useState } from 'react';

export const InputAdd = ({ onAdd }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [counter, setCounter] = useState(1)

  const handleChange = ({ target: { value } }) => {
    setInput(value);
    setError(false);
  };
  console.log(input);

  const handleAdd = () => {
    if (input) {
      onAdd(input);
      setInput('');
      setCounter(counter+1)
    } else if (input === '') {
      setError(true);
    }
  };
  console.log(counter)
  console.log(error)

  return (
    <Container
      maxW="md"
      p={5}
      centerContent={true}
      justifyContent="center"
      gap={5}
    >
      <FormControl>
        <FormLabel>Player Name</FormLabel>
        <Input
          value={input}
          onChange={handleChange}
          placeholder={`Please enter player ${counter} name`}
          focusBorderColor={'#CC57C7'}
        />
        {error === true ? (<Box color={'red'}>Error, enter player name</Box>) : ''}
      </FormControl>

      <Button onClick={handleAdd}>Add Player</Button>
    </Container>
  );
};
