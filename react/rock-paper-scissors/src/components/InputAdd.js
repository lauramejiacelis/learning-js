import {
  Button,
  Input,
  Container,
  FormControl,
  FormLabel,
  Box,
} from '@chakra-ui/react';
import { useState } from 'react';

export const InputAdd = ({ onAdd, name }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [counter, setCounter] = useState(1);
  console.log(name);

  const handleChange = ({ target: { value } }) => {
    setInput(value);
    setError(false);
  };
  console.log(input);

  const handleAdd = () => {
    if (input) {
      onAdd(input);
      setInput('');
      setCounter(counter + 1);
    } else if (input === '') {
      setError(true);
    }
  };
  console.log(counter);
  console.log(error);

  return (
    <Container
      maxW="md"
      p={5}
      centerContent={true}
      justifyContent="center"
      gap={5}
    >
      <FormControl>
        <FormLabel>{`${name.toUpperCase()} NAME`}</FormLabel>
        <Input
          value={input}
          onChange={handleChange}
          placeholder={`Please enter ${name} ${counter} name`}
          focusBorderColor={'#CC57C7'}
        />
        {error === true ? (
          <Box color={'red'}>{`Error, enter ${name} name`}</Box>
        ) : (
          ''
        )}
      </FormControl>

      <Button onClick={handleAdd}>{`ADD ${name.toUpperCase()}`}</Button>
    </Container>
  );
};
