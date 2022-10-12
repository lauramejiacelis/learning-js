import { Button, Input, Container } from '@chakra-ui/react';
import { useState } from 'react';

export const InputAdd = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleChange = ({ target: { value } }) => {
    setInput(value);
    setError(false);
  };
  console.log(input);

  const handleAdd = () => {};
  return (
    <Container
      maxW="md"
      p={10}
      centerContent={true}
      justifyContent="center"
      gap={5}
    >
      <Input
        value={input}
        onChange={handleChange}
        placeholder="Player 1 Name"
        focusBorderColor={'#CC57C7'}
      />
      <Button onClick={handleAdd}>Add Player</Button>
    </Container>
  );
};
