import { Image, Text, VStack } from '@chakra-ui/react';

export const GameOption = ({ name, src,onClick, player }) => {
  const handleOption = () => {
    onClick(name, player)
    console.log('Click');
    console.log(name);
    
  };

  return (
    <VStack
      _hover={{
        bg: '#FFAFFF',
      }}
      borderRadius={10}
    >
      <Image h={150} src={src} onClick={handleOption} />
      <Text color={'#333333'} fontSize={'large'} as={'b'}>
        {name}
      </Text>
    </VStack>
  );
};
