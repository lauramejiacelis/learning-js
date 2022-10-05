import { Box, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Board } from '../../components/Board';
import { InputAdd } from '../../components/InputAdd';
import { Instructions } from '../../components/Instructions';
import { GAMES } from '../../constants';

const Game = () => {
  const { id } = useParams();
  console.log(id);
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

  return (
    <Box px={20} py={10}>
      <Text color={'#CC57C7'} fontSize={'2xl'} as={'b'}>
        {GAMES[id].tittle}
      </Text>

      <InputAdd />

      <Board player={player} setPlayer={setPlayer} moves={GAMES[id].moves} />

      <Instructions
        howToPlay={GAMES[id].instructions.howToPlay}
        rules={GAMES[id].instructions.rules}
        notes={GAMES[id].instructions.notes}
      />
    </Box>
  );
};

export default Game;
