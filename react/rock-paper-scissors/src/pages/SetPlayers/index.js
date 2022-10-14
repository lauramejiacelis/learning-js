import { Box, Button, Container, Text, Select, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import { InputAdd } from '../../components/InputAdd';

const SetPlayers = () => {
  const [selection, setSelection] = useState(2);
  const [playersNumber, setPlayersNumber] = useState(0);
  const [names, setNames] = useState([]);

  const handleChange = ({ target: { value } }) => {
    setSelection(value);
  };
  console.log(selection);

  const handleClick = () => {
    console.log('setting players');
    setPlayersNumber(selection);
  };
  console.log(playersNumber);

  const handleAdd = (userInput) => {
    setNames([...names, userInput]);
  };
  console.log(names);

  return (
    <Container
      maxW="md"
      p={10}
      centerContent={true}
      justifyContent="center"
      gap={5}
    >
      {playersNumber === 0 ? (
      <Container
        maxW="md"
        p={10}
        centerContent={true}
        justifyContent="center"
        gap={5}>
        <Text color={'#333333'} fontSize={'large'} as={'b'}>
        Choose number of players
        </Text>
        <Select onChange={handleChange}>
          <option value={2}>2 players</option>
          <option value={3}>3 players</option>
          <option value={4}>4 players</option>
        </Select>
        <Button disabled={playersNumber > 0 ? true : false} onClick={handleClick}>
          Set Players
        </Button>
      </Container>) : (
          <Text color={'#333333'} fontSize={'large'} as={'b'}>
            {`You chose ${playersNumber} players`}
          </Text>
        )}
      
      
      {playersNumber > 0 ? <InputAdd onAdd={handleAdd} /> : ''}
    </Container>
  );
};

export default SetPlayers;
