import { Image, VStack } from '@chakra-ui/react';

export const GameOption = ({ name, src, onClick, playerid }) => {
  const handleOption = () => {
    onClick(name, playerid);
  };

  return (
    <VStack
      _hover={{
        bg: '#FFAFFF',
      }}
      borderRadius={10}
    >
      <Image h={85} src={src} onClick={handleOption} />
    </VStack>
  );
};
