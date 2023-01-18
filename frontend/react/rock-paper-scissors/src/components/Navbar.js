import { Box, Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Box>
      <Flex
        bg={'white'}
        h={20}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={'#BFBFBF'}
      >
        <Link to="/">
          <Image
            src="https://res.cloudinary.com/lauram2celis/image/upload/v1663945523/rock-paper-scissors/Greatgames_sguokr.png"
            alt="Logo link to Home"
            h={20}
          />
        </Link>
      </Flex>
    </Box>
  );
};
