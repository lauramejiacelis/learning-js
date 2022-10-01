import { useEffect, useState } from 'react';
import { Grid, GridItem, Text, VStack } from '@chakra-ui/react';
import { GameOption } from './GameOption';
import { RPS } from '../constants';
import { changeActivePlayer, changeScore } from '../services';

export const Board = ({ player, setPlayer }) => {
  const [round, setRound] = useState(0);
  const [playerInTurn, setPlayerInTurn] = useState('');
  const [game, setGame] = useState([]);
  const [results, setResults] = useState('');

  useEffect(() => {
    let activePlayer = player.find((e) => e.active === true);
    setPlayerInTurn(activePlayer.id);

    if (game.length === 2) {
      const playerOneOption = RPS.find((option)=>option.name === game[0])
      if (playerOneOption.beats === game[1]){
        setResults(player[0].id) //player1
        console.log(results)
        setPlayer(changeScore(player,results))
      }
      console.log(player)
      console.log(playerOneOption)
      setRound(round + 1);
      setGame([]);
      
    }
  }, [player, game, results, setResults , round, setPlayer ]);
  console.log(results)

  const handleOption = (option, playerid) => {
    console.log(option);
    console.log(playerid);
    //let move = {};
    //move[playerid] = option;
    
    if (game.length < 2) {
      //setGame([...game, move]);
      setGame([...game, option])
      
      setPlayer(changeActivePlayer(player));
    }
  };

  console.log(game);

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

