import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

const GameRPSLS = () => {
  return (
    <Box px={20} py={10}>
      <Text color={'#CC57C7'} fontSize={'2xl'} as={'b'}>
        Rock, Paper, Scissors
      </Text>
      <Grid h={'500px'} templateColumns={'repeat(3, 1fr)'} gap={'2'}>
        <GridItem bg={'#E19BDE'}>
          <Text color={'#333333'} fontSize={'xl'}>
            Player 1
          </Text>
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

export default GameRPSLS;
