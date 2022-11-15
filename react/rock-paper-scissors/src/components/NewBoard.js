import { Image, Grid, GridItem, Text, VStack, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { GameOption } from './GameOption';
import { winner } from '../services';
import { Link } from 'react-router-dom';

export const NewBoard = ({ num, names, moves }) => {
  const [roundsInfo, setRoundsInfo] = useState([]);
  const [move, setMove] = useState('');
  const [round, setRound] = useState(1);

  const handleOption = (option, playerId) => {
    if (!move) {
      setMove(option);
    } else {
      setRound(round + 1);
      const newRound = {
        round: round,
        playerMoves: [move, option],
        roundWinner: winner(move, option, moves, names),
      };
      setRoundsInfo([...roundsInfo, newRound]);
      setMove('');
    }
  };

  const roundCounter = roundsInfo
    .map((data) => data.roundWinner)
    .filter((data) => data !== "it's a tie!!!");

  const finalResults = roundCounter.reduce((countPlayer, player) => {
    countPlayer[player] = (countPlayer[player] || 0) + 1;
    return countPlayer;
  }, {});

  const finalWinner = Object.entries(finalResults).reduce((prev, curr) => {
    return prev[1] > curr[1] ? prev : curr;
  }, []);

  if (roundCounter.length === 3) {
    return (
      <VStack bg={'#CC57C7'} py={5}>
        <Text color={'white'} px={5} fontSize={'50px'} as={'b'}>
          {`${finalWinner[0].toUpperCase()} WINS`}
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
      {names.map((name) => (
        <GridItem bg={'#E19BDE'} key={name}>
          <VStack py={5}>
            <Text
              color={'#333333'}
              bg="#FFAFFF"
              borderRadius={3}
              px={5}
              fontSize={'xl'}
              as={'b'}
            >
              {name.toUpperCase()}
            </Text>
            <Text color={'#333333'} fontSize={'md'} as={'b'}>
              Score: {'missing'}
            </Text>
            {moves.map(
              (
                option //esto debería ser un argumento
              ) => (
                <GameOption
                  name={option.value}
                  src={option.src}
                  onClick={handleOption}
                  playerid={names.indexOf(name)}
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
