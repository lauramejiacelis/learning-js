import { Box, Container, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { InputAdd } from '../../components/InputAdd';
import { SetPlayers } from '../../components/SetPlayers';
import { Instructions } from '../../components/Instructions';
import { GAMES } from '../../constants';
import { NewBoard } from '../../components/NewBoard';

const Game = () => {
  const { id } = useParams();

  const [playersNumber, setPlayersNumber] = useState(0);
  const [names, setNames] = useState([]);

  const handleSet = (userSelection) => {
    setPlayersNumber(userSelection);
  };

  const handleAdd = (userInput) => {
    setNames([...names, userInput]);
  };

  if (names.length > 0 && names.length === parseInt(playersNumber)) {
    return (
      <Box px={20} py={10}>
        <Text color={'#CC57C7'} fontSize={'2xl'} as={'b'}>
          {GAMES[id].tittle}
        </Text>

        <NewBoard num={playersNumber} names={names} moves={GAMES[id].moves} />

        <Instructions
          howToPlay={GAMES[id].instructions.howToPlay}
          rules={GAMES[id].instructions.rules}
          notes={GAMES[id].instructions.notes}
        />
      </Box>
    );
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
        <SetPlayers onSet={handleSet} />
      ) : (
        <Container
          maxW="md"
          p={5}
          centerContent={true}
          justifyContent="center"
          gap={5}
        >
          <Text color={'#333333'} fontSize={'large'} as={'b'}>
            {`You chose ${playersNumber} players`}
          </Text>
          <InputAdd onAdd={handleAdd} name={'player'} />
        </Container>
      )}
    </Container>
  );
};

export default Game;
