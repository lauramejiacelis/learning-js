import { Grid, GridItem, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { GameOption } from './GameOption';
import { winner } from '../services';

export const NewBoard = ({ num, names, moves }) => {
  const [roundsInfo, setRoundsInfo] = useState([]);
  const [move, setMove] = useState('');
  const [round, setRound] = useState(1);

  const handleOption = (option, playerId) => {
    console.log('new board');
    console.log(option);
    console.log(playerId);
    console.log(move.length);
    console.log(names.length);
    console.log(moves);

    if (!move) {
      setMove(option);
    } else {
      setRound(round + 1);
      const newRound = {
        round: round,
        playerMoves: [move, option],
        roundWinner: winner(move, option, moves),
      };
      setRoundsInfo([...roundsInfo, newRound]);
      setMove('');
    }
  };
  console.log(move);
  console.log(roundsInfo);

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
