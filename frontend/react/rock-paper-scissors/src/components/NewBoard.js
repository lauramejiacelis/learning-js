import { Image, Grid, GridItem, Text, VStack, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { GameOption } from './GameOption';
import { winner } from '../services';
import { Link } from 'react-router-dom';

export const NewBoard = ({ num, players, moves, onUpdate }) => {
  const [roundsInfo, setRoundsInfo] = useState([]);
  const [move, setMove] = useState('');
  const [round, setRound] = useState(1);
  console.log(players);

  const handleOption = (option) => {
    if (!move) {
      setMove(option);
    } else {
      setRound(round + 1);
      const roundWinner = winner(move, option, moves, players);
      const newRound = {
        round: round,
        playerMoves: [move, option],
        roundWinner: roundWinner,
      };
      setRoundsInfo([...roundsInfo, newRound]);
      onUpdate(players, roundWinner);
      setMove('');
    }
  };
  console.log(roundsInfo);

  const scoreCounter = players.filter((player) => player.score >= 2);

  if (scoreCounter.length > 0) {
    return (
      <VStack bg={'#CC57C7'} py={5}>
        <Text color={'white'} px={5} fontSize={'50px'} as={'b'}>
          {`${scoreCounter[0].name.toUpperCase()} WINS`}
        </Text>
        <Image src="https://res.cloudinary.com/lauram2celis/image/upload/v1663949922/rock-paper-scissors/RockPaperScissors_q9rttv.png" />
        <Button bgColor={'pink.800'}>
          <Link to="/">Play Again</Link>
        </Button>
      </VStack>
    );
  }

  return (
    <Grid
      // templateRows={'repeat(3, 1fr)'}
      templateColumns={`repeat(${num}, 1fr)`}
      gap={'2'}
    >
      <GridItem colSpan={4} bg="#CC57C7">
        <VStack py={5}>
          <Text
            color={'#333333'}
            bg="#FFAFFF"
            borderRadius={3}
            px={5}
            fontSize={'xl'}
            as={'b'}
          >
            ROUND {round}
          </Text>
        </VStack>
      </GridItem>

      {players.map((player) => (
        <GridItem bg={'#E19BDE'} key={player.name}>
          <VStack py={5}>
            <Text
              color={'#333333'}
              bg="#FFAFFF"
              borderRadius={3}
              px={5}
              fontSize={'xl'}
              as={'b'}
            >
              {player.name.toUpperCase()}
            </Text>
            <Text color={'#333333'} fontSize={'md'} as={'b'}>
              Score: {player.score}
            </Text>
            {moves.map(
              (
                option //esto debería ser un argumento
              ) => (
                <GameOption
                  name={option.value}
                  src={option.src}
                  onClick={handleOption}
                  playerid={player.id}
                  key={option.value}
                />
              )
            )}
          </VStack>
        </GridItem>
      ))}
      <GridItem colSpan={4} bg="#CC57C7">
        <VStack py={5}>
          <Text
            color={'#333333'}
            bg="#FFAFFF"
            borderRadius={3}
            px={5}
            fontSize={'xl'}
            as={'b'}
          >
            {round > 1 ? `Round ${round - 1} Winner:${' '}` : ''}
          </Text>
          <Text color={'#333333'} fontSize={'md'} as={'b'}>
            {roundsInfo.length > 0 ? (
              <Text>{roundsInfo[round - 2].roundWinner}</Text>
            ) : (
              ''
            )}
          </Text>
        </VStack>
      </GridItem>
    </Grid>
  );
};
