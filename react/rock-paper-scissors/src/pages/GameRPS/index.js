import { Box, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Board } from '../../components/Board';
import { InputAdd } from '../../components/InputAdd';
import { Instructions } from '../../components/Instructions';
import { GAMES } from '../../constants';

const GameRPS = () => {
  const [player, setPlayer] = useState([
    {
      id: 'player1',
      name: '',
      score: 0,
      active: true,
    },
    {
      id: 'player2',
      name: '',
      score: 0,
      active: false,
    },
  ]);
  //const [step, setStep] = useState(0);

  return (
    <Box px={20} py={10}>
      <Text color={'#CC57C7'} fontSize={'2xl'} as={'b'}>
        Rock, Paper, Scissors
      </Text>

      <InputAdd />

      <Board player={player} setPlayer={setPlayer} />

      <Instructions
        howToPlay={GAMES[0].instructions.howToPlay}
        rules={GAMES[0].instructions.rules}
        notes={GAMES[0].instructions.notes}
      />
    </Box>
  );
};

export default GameRPS;
