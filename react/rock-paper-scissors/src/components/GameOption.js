import { Image, Text, VStack } from '@chakra-ui/react';

export const GameOption = ({ name, src, onClick, playerid }) => {
  const handleOption = () => {
    onClick(name, playerid);
    console.log('Click');
  };

  return (
    <VStack
      _hover={{
        bg: '#FFAFFF',
      }}
      borderRadius={10}
    >
      <Image h={85} src={src} onClick={handleOption} />
      {/* <Text color={'#333333'}>{name.toUpperCase()}</Text> */}
    </VStack>
  );
};
