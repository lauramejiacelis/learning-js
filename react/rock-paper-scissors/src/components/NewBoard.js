import { Grid, GridItem, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { GameOption } from './GameOption';

export const NewBoard = ({ num, names, moves }) => {
  console.log(names.length);
  const [rounds, setRounds] = useState([
    {
      round: 0,
      playerMoves: [],
      roundWinner: '',
    },
  ]);
  const [move, setMove] = useState([]);

  const handleOption = (option, playerId) => {
    console.log('new board');
    console.log(option);
    console.log(playerId);
    if (move.length < names.length) {
      setMove([...move, option]);
    } else {
      console.log('limit moves');
    }

    //setRounds(updateRoundInfo(rounds, option));
    //setRounds(updatePlayerMove(rounds, move));
    //setRounds([{ ...rounds, playerMoves: [...rounds.playerMoves, option] }]);
    //setRounds([option]);
  };
  console.log(move);

  const updateRoundInfo = (rounds, option) => {
    return {
      ...rounds,
      round: (rounds.round += 1),
      playerMoves: [...rounds.playerMoves, option],
    };
  };

  const updatePlayerMove = (rounds, option) => {
    return {
      ...rounds,
      playerMoves: option,
    };
  };
  console.log(rounds);

  return (
    <Grid
      templateRows={'repeat(2, 1fr)'}
      templateColumns={`repeat(${num}, 1fr)`}
      gap={'2'}
    >
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
      <GridItem colSpan={4} bg="#CC57C7" />
    </Grid>
  );
};
