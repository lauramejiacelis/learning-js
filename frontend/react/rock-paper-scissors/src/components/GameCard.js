import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

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
