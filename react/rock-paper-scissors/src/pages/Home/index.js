import { Box, Center, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
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
          <GameCard link={info.link} src={info.src} tittle={info.tittle} />
        ))}
      </Box>
    </Center>
  );
};

export default Home;

export const GameCard = ({ link, src, tittle }) => {
  return (
    <Box
      _hover={{
        bgGradient: 'linear(#E19BDE 0%, #FFAFFF 100%)',
      }}
      rounded={'3xl'}
    >
      <Link to={link}>
        <Image src={src} alt={`go to the game:  ${tittle}`} />
        <Text color={'#333333'} pb={5} fontSize="3xl" fontWeight="bold">
          {tittle}
        </Text>
      </Link>
    </Box>
  );
};
