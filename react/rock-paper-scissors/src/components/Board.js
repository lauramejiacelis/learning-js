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
  Show,
} from '@chakra-ui/react';
import { GameOption } from './GameOption';
import { RPS } from '../constants';
import {
  updateActivePlayer,
  updateScore,
  updateMove,
  updateWon,
} from '../services';

export const Board = ({ player, setPlayer }) => {
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
    let activePlayer = player.find((e) => e.active === true);
    setPlayerInTurn(activePlayer.id);

    if (move.player1 !== '' && move.player2 !== '') {
      const playerOneOption = RPS.find(
        (option) => option.name === move.player1
      );
      if (playerOneOption.beats === move.player2) {
        setMove(updateWon(move, player[0].id));
        setPlayer(updateScore(player, move.won));
      } else if (playerOneOption.name === move.player2) {
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
        setMove(updateWon(move, player[1].id));
        setPlayer(updateScore(player, move.won));
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
      const maxScore = Math.max(...player.map((player) => player.score));
      const winner = player.find((player) => player.score === maxScore);
      setResults(winner.id);
      setHide('initial');
      setShow('none');
      setRound(0);
    }
  }, [player, move, round, setPlayer, toast]);
  console.log(results);

  const handleOption = (option, playerid) => {
    console.log(option);
    console.log(playerid);
    setMove(updateMove(move, playerid, option));
    setPlayer(updateActivePlayer(player));
  };

  console.log(move);

  const handlePlay = () => {
    setPlayer([
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
            {player[0].id}
          </Text>
          <Text color={'#333333'} fontSize={'large'} as={'b'}>
            Score: {player[0].score}
          </Text>
          {RPS.map((option) => (
            <GameOption
              name={option.name}
              src={option.src}
              onClick={handleOption}
              playerid={player[0].id}
              key={option.name}
            />
          ))}
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
            {player[1].id}
          </Text>
          <Text color={'#333333'} fontSize={'large'} as={'b'}>
            Score: {player[1].score}
          </Text>
          {RPS.map((option) => (
            <GameOption
              name={option.name}
              src={option.src}
              onClick={handleOption}
              playerid={player[1].id}
              key={option.name}
            />
          ))}
        </VStack>
      </GridItem>
    </Grid>
  );
};
