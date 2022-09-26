import {
  Box,
  Grid,
  GridItem,
  Image,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

const GameRPS = () => {
  const [player, setPlayer] = useState([
    {
      id: 'Player 1',
      score: 0,
    },
    {
      id: 'Player 2',
      score: 0,
    },
  ]);
  const [turn, setTurn] = useState(0);

  const OPTIONS = [
    {
      name: 'R',
      beats: 'S',
    },
    {
      name: 'S',
      beats: 'P',
    },
    {
      name: 'P',
      beats: 'R',
    },
  ];

  return (
    <Box px={20} py={10}>
      <Text color={'#CC57C7'} fontSize={'2xl'} as={'b'}>
        Rock, Paper, Scissors
      </Text>
      <Grid templateColumns={'1fr 2fr 1fr'} gap={'2'}>
        <GridItem bg={'#E19BDE'}>
          <VStack py={5}>
            <Text color={'#333333'} fontSize={'2em'} as={'b'}>
              Player 1
            </Text>
            <Text color={'#333333'} fontSize={'large'} as={'b'}>
              Score: 0
            </Text>
            <Image
              h={150}
              _hover={{
                bg: '#FFAFFF',
              }}
              borderRadius={10}
              src="https://res.cloudinary.com/lauram2celis/image/upload/v1663967151/rock-paper-scissors/rock_qg4yh3.png"
            />
            <Text color={'#333333'} fontSize={'large'} as={'b'}>
              PRESS "A"
            </Text>
            <Image
              h={150}
              src="https://res.cloudinary.com/lauram2celis/image/upload/v1663967151/rock-paper-scissors/paper_s2aqin.png"
            />
            <Text color={'#333333'} fontSize={'large'} as={'b'}>
              PRESS "S"
            </Text>
            <Image
              h={150}
              src="https://res.cloudinary.com/lauram2celis/image/upload/v1663967151/rock-paper-scissors/scissors_j8nhjt.png"
            />
            <Text color={'#333333'} fontSize={'large'} as={'b'}>
              PRESS "D"
            </Text>
          </VStack>
        </GridItem>
        <GridItem bg={'#E19BDE'} />
        <GridItem bg={'#E19BDE'}>
          <Text color={'#333333'} fontSize={'xl'}>
            Player 2
          </Text>
        </GridItem>
      </Grid>
      <Box p={10}>
        <Text color={'#CC57C7'} fontSize={'xl'} as={'b'}>
          How to play:
        </Text>
        <Text color={'#333333'}>
          In rock-paper-scissors, two players will each randomly choose one of
          three signs: rock , paper, or scissors. Both players show their signs
          at the same time to see who will win. Here are the rules that
          determine which sign beats another:
          <UnorderedList>
            <ListItem>
              Rock wins over scissors (because rock smashes scissors)
            </ListItem>
            <ListItem>
              Scissors wins over paper (because scissors cut paper)
            </ListItem>
            <ListItem>
              Paper wins over rock (because paper covers rock)
            </ListItem>
          </UnorderedList>
          If both players show the same sign, it’s a tie. And that’s basically
          the whole game! It’s played in a best-two-out-of-three format.
        </Text>
      </Box>
    </Box>
  );
};

export default GameRPS;
