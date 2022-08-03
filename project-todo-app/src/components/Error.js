import { Container, Text, VStack } from '@chakra-ui/react';

export function ErrorComponent({ errorPlace, errorInfo }) {
  return (
    <Container bgColor="white" borderRadius="5px" textAlign="center">
      <VStack>
        <Text color="red">Oops an error occurred!!!</Text>
        <Text color="red">
          {errorPlace} : {errorInfo}
        </Text>
      </VStack>
    </Container>
  );
}
