import { Button, Input, VStack } from '@chakra-ui/react';
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
    <VStack display={'none'}>
      <Input
        value={input}
        onChange={handleChange}
        placeholder="Player 1 Name"
        focusBorderColor={'#CC57C7'}
      />
      <Button onClick={handleAdd} _hover={{ bg: '#CC57C7', color: 'white' }}>
        Add Player
      </Button>
    </VStack>
  );
};
