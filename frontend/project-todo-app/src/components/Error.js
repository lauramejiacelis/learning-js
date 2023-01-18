import { Container, Text, VStack } from '@chakra-ui/react';

export function ErrorComponent({ error }) {
  return (
    <Container bgColor="white" borderRadius="5px" textAlign="center">
      <VStack>
        <Text color="red">Oops an error occurred!!!</Text>
        <Text color="red">{JSON.stringify(error, null, 2)}</Text>
      </VStack>
    </Container>
  );
}
