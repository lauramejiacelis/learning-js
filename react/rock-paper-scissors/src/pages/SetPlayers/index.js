import { Button, Container, Text, Select, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import { InputAdd } from '../../components/InputAdd';

const SetPlayers = () => {
  const [playersNumber, setPlayersNumber] = useState(0)
  const handleClick = () => {
    console.log('setting players');
  };

  return (
    <Container
      maxW="md"
      p={10}
      centerContent={true}
      justifyContent="center"
      gap={5}
    >
      <Text color={'#333333'} fontSize={'large'} as={'b'}>
        Choose players
      </Text>
      <Select>
        <option value={2}>2 players</option>
        <option value={3}>3 players</option>
        <option value={4}>4 players</option>
      </Select>
      <Button onClick={handleClick}>Set Players</Button>
      <InputAdd />
    </Container>
  );
};

export default SetPlayers;
