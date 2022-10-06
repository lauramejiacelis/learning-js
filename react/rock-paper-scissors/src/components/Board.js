import { useEffect, useState } from 'react';
import {
  Grid,
  GridItem,
  Text,
  VStack,
  useToast,
  Box,
  Image,
  Button,
} from '@chakra-ui/react';
import { GameOption } from './GameOption';
import {
  updateActivePlayer,
  updateScore,
  updateMove,
  updateWon,
} from '../services';
//la idea es que en alguna parte pueda escoger el número de jugadores
export const Board = ({ players, setPlayers, moves }) => {
  //debería entrar aquí como props
  console.log(players);
  const [round, setRound] = useState(0);
  const [playerInTurn, setPlayerInTurn] = useState('');
  const [move, setMove] = useState({
    player1: '',
    player2: '',
    won: '',
  });
  const [results, setResults] = useState('');
  const toast = useToast();
  const [hide, setHide] = useState('none');
  const [show, setShow] = useState('inherit');

  useEffect(() => {
    let activePlayer = players.find((e) => e.active === true);
    setPlayerInTurn(activePlayer.id);

    if (move.player1 !== '' && move.player2 !== '') {
      const playerOneOption = moves.find(
        (option) => option.value === move.player1
      );
      console.log(playerOneOption);
      if (playerOneOption.beats === move.player2) {
        setMove(updateWon(move, players[0].id)); //player[0] está quemado
        setPlayers(updateScore(players, move.won));
      } else if (playerOneOption.value === move.player2) {
        console.log("it's a tie");
        toast({
          duration: 3000,
          isClosable: true,
          render: () => (
            <Box color="white" p={3} bg="#A4329F" fontSize={'1.5em'} as={'b'}>
              It's a tie, No one get points
            </Box>
          ),
        });
        setMove({
          player1: '',
          player2: '',
          won: '',
        });
      } else {
        //la lógica falta ampliarse para rpsls
        setMove(updateWon(move, players[1].id));
        setPlayers(updateScore(players, move.won));
      }
    }

    if (move.won !== '') {
      setMove({
        player1: '',
        player2: '',
        won: '',
      });
      setRound(round + 1);
    }

    if (round === 3) {
      const maxScore = Math.max(...players.map((player) => player.score));
      const winner = players.find((player) => player.score === maxScore);
      setResults(winner.id);
      setHide('initial');
      setShow('none');
      setRound(0);
    }
  }, [moves, players, move, round, setPlayers, toast]);
  console.log(results);

  const handleOption = (option, playerid) => {
    console.log(option);
    console.log(playerid);
    setMove(updateMove(move, playerid, option));
    setPlayers(updateActivePlayer(players));
  };

  console.log(move);

  const handlePlay = () => {
    setPlayers([
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
    setHide('none');
    setShow('inherit');
  };

  return (
    <Grid templateColumns={'1fr 2fr 1fr'} gap={'2'}>
      <GridItem bg={'#E19BDE'}>
        <VStack py={5}>
          <Text color={'#333333'} fontSize={'2em'} as={'b'}>
            {players[0].id}
          </Text>
          <Text color={'#333333'} fontSize={'large'} as={'b'}>
            Score: {players[0].score}
          </Text>
          {moves.map(
            (
              option //esto debería ser un argumento
            ) => (
              <GameOption
                name={option.value}
                src={option.src}
                onClick={handleOption}
                playerid={players[0].id}
                key={option.value}
              />
            )
          )}
        </VStack>
      </GridItem>

      <GridItem bg={'#E19BDE'}>
        <VStack py={'10'}>
          <VStack display={show}>
            <Text color={'#333333'} fontSize={'2em'} as={'b'}>
              Round: {round + 1}
            </Text>
            <Text ccolor={'#333333'} fontSize={'1.5em'} as={'b'}>
              Turn: {playerInTurn}
            </Text>
          </VStack>
          <Box align={'center'} display={hide}>
            <Text color={'#333333'} fontSize={'2em'} as={'b'} align={'center'}>
              {results.toUpperCase()} IS THE
            </Text>
            <Image src="https://res.cloudinary.com/lauram2celis/image/upload/v1664809266/rock-paper-scissors/winner_whndi4.png" />
            <Button onClick={handlePlay}>Play Again</Button>
          </Box>
        </VStack>
      </GridItem>

      <GridItem bg={'#E19BDE'}>
        <VStack py={5}>
          <Text color={'#333333'} fontSize={'2em'} as={'b'}>
            {players[1].id}
          </Text>
          <Text color={'#333333'} fontSize={'large'} as={'b'}>
            Score: {players[1].score}
          </Text>
          {moves.map((option) => (
            <GameOption
              name={option.value}
              src={option.src}
              onClick={handleOption}
              playerid={players[1].id}
              key={option.value}
            />
          ))}
        </VStack>
      </GridItem>
    </Grid>
  );
};
