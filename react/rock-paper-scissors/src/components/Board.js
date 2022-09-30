import { useEffect, useState } from 'react';
import { Grid, GridItem, Text, VStack } from '@chakra-ui/react';
import { GameOption } from './GameOption';
import { RPS } from '../constants';

export const Board = ({ player, setPlayer }) => {
  const [round, setRound] = useState(0);
  const [turn, setTurn] = useState(0);
  const [playerInTurn, setPlayerInTurn] = useState('');
  const [game, setGame] = useState([]);
  const [results, setResults] = useState({});

  useEffect(() => {
    let activePlayer = player.find((e) => e.active === true);
    setPlayerInTurn(activePlayer.id);

    if (game.length === 2) {
      //game[0].player1 === game[1].player2 ? setResults('tie') :
      setRound(round + 1);
      setGame([]);
      //esto hay que moverlo
      const changeActiveP = player.map((player) => {
        if (player.active === true) {
          return {
            ...player,
            active: false,
          };
        } else {
          return {
            ...player,
            active: true,
          };
        }
        return player;
      });
      setPlayer(changeActiveP);
    }
  }, [player, game]);

  const handleOption = (option, playerid) => {
    console.log(option);
    console.log(playerid);
    let move = {};
    move[playerid] = option;
    if (game.length < 2) {
      setGame([...game, move]);
      //turn === 0 ? setTurn(1) : setTurn(0);
    }
  };

  console.log(playerInTurn);
  console.log(game);
  console.log(turn);

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
          <VStack>
            <Text color={'#333333'} fontSize={'2em'} as={'b'}>
              Round: {round + 1}
            </Text>
            <Text ccolor={'#333333'} fontSize={'1.5em'} as={'b'}>
              Turn: {playerInTurn}
            </Text>
          </VStack>
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
