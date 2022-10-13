import {
  Button,
  Input,
  Container,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useState } from 'react';

export const InputAdd = ({ onAdd }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleChange = ({ target: { value } }) => {
    setInput(value);
    setError(false);
  };
  console.log(input);

  const handleAdd = () => {
    if (input) {
      onAdd(input);
      setInput('');
    } else {
      setError(true);
    }
  };

  return (
    <Container
      maxW="md"
      p={10}
      centerContent={true}
      justifyContent="center"
      gap={5}
    >
      <FormControl>
        <FormLabel>Player Name</FormLabel>
        <Input
          value={input}
          onChange={handleChange}
          placeholder="Player 1 Name"
          focusBorderColor={'#CC57C7'}
        />
        <FormHelperText>{`Please enter ... name`}</FormHelperText>
        {error ? <FormErrorMessage> Name is requiered </FormErrorMessage> : ''}
      </FormControl>

      <Button onClick={handleAdd}>Add Player</Button>
    </Container>
  );
};
