import { Box, Center, Text } from '@chakra-ui/react';
import { GameCard } from '../../components/GameCard';
import { GAMES } from '../../constants';

const Home = () => {
  return (
    <Center>
      <Box
        w={'50%'}
        rounded={'lg'}
        boxShadow={'2xl'}
        p={6}
        textAlign={'center'}
      >
        <Text
          bgGradient="linear(#CC57C7 0%, #CC66FF 50%, #FF66FF 100%)"
          bgClip={'text'}
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Choose your Game
        </Text>
        {GAMES.map((info) => (
          <GameCard
            link={`game/${info.id}`}
            src={info.src}
            tittle={info.tittle}
          />
        ))}
      </Box>
    </Center>
  );
};

export default Home;
