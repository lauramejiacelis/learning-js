import { Box, Center, Heading, Text, VStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

function TodoDetail() {
  const { id } = useParams();
  console.log(id);
  return (
    <Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        p={6}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <VStack>
          <Heading
            fontSize={'2xl'}
            fontWeight={500}
            fontFamily={'body'}
            color={'#4b4234'}
          >
            Description: Dance
          </Heading>
          <Text color={'#4b4234'}>Id: {id}</Text>
        </VStack>
      </Box>
    </Center>
  );
}

export default TodoDetail;
