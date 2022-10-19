import { Grid, GridItem, Text, VStack } from '@chakra-ui/react';
import { GameOption } from './GameOption';

export const NewBoard = ({ num, names, moves }) => {
  const handleOption = () => {};

  return (
    <Grid
      templateRows={'repeat(2, 1fr)'}
      templateColumns={`repeat(${num}, 1fr)`}
      gap={'2'}
    >
      {names.map((name) => (
        <GridItem bg={'#E19BDE'}>
          <VStack py={5}>
            <Text
              color={'#333333'}
              bg="#FFAFFF"
              borderRadius={3}
              px={5}
              fontSize={'xl'}
              as={'b'}
            >
              {name.toUpperCase()}
            </Text>
            <Text color={'#333333'} fontSize={'md'} as={'b'}>
              Score: {'missing'}
            </Text>
            {moves.map(
              (
                option //esto debería ser un argumento
              ) => (
                <GameOption
                  name={option.value}
                  src={option.src}
                  onClick={handleOption}
                  playerid={0}
                  key={option.value}
                />
              )
            )}
          </VStack>
        </GridItem>
      ))}
      <GridItem colSpan={4} bg="#CC57C7" />
    </Grid>
  );
};
