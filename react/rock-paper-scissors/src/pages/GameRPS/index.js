import { Box, Grid, GridItem, Image, Text, VStack } from '@chakra-ui/react';

const GameRPS = () => {
  return (
    <Box px={20} py={10}>
      <Text color={'#CC57C7'} fontSize={'2xl'} as={'b'}>
        Rock, Paper, Scissors
      </Text>
      <Grid h={'500px'} templateColumns={'repeat(3, 1fr)'} gap={'2'}>
        <GridItem bg={'#E19BDE'}>
          <VStack>
            <Text color={'#333333'} fontSize={'xl'}>
              Player 1
            </Text>
            <Image
              h={150}
              src="https://res.cloudinary.com/lauram2celis/image/upload/v1663967151/rock-paper-scissors/rock_qg4yh3.png"
            />
            <Image
              h={150}
              src="https://res.cloudinary.com/lauram2celis/image/upload/v1663967151/rock-paper-scissors/paper_s2aqin.png"
            />
            <Image
              h={150}
              src="https://res.cloudinary.com/lauram2celis/image/upload/v1663967151/rock-paper-scissors/scissors_j8nhjt.png"
            />
          </VStack>
        </GridItem>
        <GridItem bg={'#E19BDE'} />
        <GridItem bg={'#E19BDE'}>
          <Text color={'#333333'} fontSize={'xl'}>
            Player 2
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default GameRPS;
