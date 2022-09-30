import { useEffect, useState } from 'react';
import { Grid, GridItem, Text, VStack } from '@chakra-ui/react';
import { GameOption } from './GameOption';
import { RPS } from '../constants';

export const Board = ({ player , setPlayer }) => {
  const [flag, setFlag] = useState('');
  const [round, setRound] = useState(0);
  const [turn, setTurn] = useState(0);
  const [playerInTurn, setPlayerInTurn] = useState(player[turn].id)
  const [game, setGame] = useState([]);

  useEffect(()=>{
    console.log(game)
    if(game[round]){
      console.log(game[round])
    }
  },[])

  const handleOption = (option, player) => {
    let move = {}
    move[player] = option
    setGame([...game, move]);
    console.log(turn)
    turn === 0 ? setTurn(1) : setTurn(0)
    console.log(turn)
    setPlayerInTurn(player[turn].id)
  };
  
  console.log(playerInTurn)
  console.log(game)
  console.log(turn)

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
            player={player[0].id}
            key={option.name}/>
          ))}
        </VStack>
      </GridItem>

      <GridItem bg={'#E19BDE'}>
        <VStack py={'10'}>
          
          <VStack>
            <Text color={'#333333'} fontSize={'2em'} as={'b'}>
              Round: {round+1}
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
            player={player[1].id}
            key={option.name}
            />
          ))}
        </VStack>
      </GridItem>
    </Grid>
  );
};
