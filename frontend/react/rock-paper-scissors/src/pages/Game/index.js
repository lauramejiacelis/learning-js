import { Box, Container, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { InputAdd } from '../../components/InputAdd';
import { SetPlayers } from '../../components/SetPlayers';
import { Instructions } from '../../components/Instructions';
import { GAMES } from '../../constants';
import { NewBoard } from '../../components/NewBoard';
import { updateScore } from '../../services';

const Game = () => {
  const { id } = useParams();

  const [playersNumber, setPlayersNumber] = useState(0);
  const [players, setPlayers] = useState([]);
  const [names, setNames] = useState([]);
  const [error, setError] = useState(false);
  const [counter, setCounter] = useState(1);

  const handleSet = (userSelection) => {
    setPlayersNumber(userSelection);
  };

  const handleAdd = (userInput) => {
    if (
      names.length > 0 &&
      names
        .map((name) => name.toUpperCase())
        .filter((name) => name === userInput.toUpperCase()).length > 0
    ) {
      setError('Try a different name');
    } else {
      const newPlayer = {
        id: counter,
        name: userInput,
        score: 0,
        active: false,
      };
      setPlayers([...players, newPlayer]);
      setNames([...names, userInput]);
      setCounter(counter + 1);
      setError(false);
    }
  };

  const handleUpdatePlayer = (players, winner) => {
    setPlayers(updateScore(players, winner));
  };

  if (names.length > 0 && names.length === parseInt(playersNumber)) {
    return (
      <Box px={20} py={10}>
        <Text color={'#CC57C7'} fontSize={'2xl'} as={'b'}>
          {GAMES[id].tittle}
        </Text>

        <NewBoard
          num={playersNumber}
          names={names}
          players={players}
          moves={GAMES[id].moves}
          onUpdate={handleUpdatePlayer}
        />
        {/* Aquí es ideal pasar los players y debo modificar todo para adaptarlo al objeto */}

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
          <InputAdd onAdd={handleAdd} name={'player'} counter={counter} />
          {error ? <Box color={'red'}>{`Error, ${error}`}</Box> : ''}
        </Container>
      )}
    </Container>
  );
};

export default Game;
