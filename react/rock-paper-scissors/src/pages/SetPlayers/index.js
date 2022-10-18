import {
  Box,
  Button,
  Container,
  Text,
  Select,
  Heading,
} from '@chakra-ui/react';
import { useState } from 'react';
import { InputAdd } from '../../components/InputAdd';
import { redirect, useParams } from 'react-router-dom';

const SetPlayers = () => {
  const { id } = useParams();
  const [selection, setSelection] = useState(2);
  const [playersNumber, setPlayersNumber] = useState(0);
  const [names, setNames] = useState([]);

  console.log(id);

  const handleChange = ({ target: { value } }) => {
    setSelection(value);
  };
  console.log(selection);

  const handleClick = () => {
    console.log('setting players');
    setPlayersNumber(selection);
  };
  console.log(playersNumber);
  console.log(names.length);

  const handleAdd = (userInput) => {
    setNames([...names, userInput]);
  };
  console.log(names);

  console.log(names.length > 0);
  console.log(names.length === selection);
  if (names.length > 0 && names.length === selection) {
    return 'hello';
  }

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
          gap={5}
        >
          <Text color={'#333333'} fontSize={'large'} as={'b'}>
            Choose number of players
          </Text>
          <Select onChange={handleChange}>
            <option value={2}>2 players</option>
            <option value={3}>3 players</option>
            <option value={4}>4 players</option>
          </Select>
          <Button
            disabled={playersNumber > 0 ? true : false}
            onClick={handleClick}
          >
            Set Players
          </Button>
        </Container>
      ) : (
        <Container>
          <Text color={'#333333'} fontSize={'large'} as={'b'}>
            {`You chose ${playersNumber} players`}
          </Text>
          <InputAdd onAdd={handleAdd} />
        </Container>
      )}
    </Container>
  );
};

export default SetPlayers;
