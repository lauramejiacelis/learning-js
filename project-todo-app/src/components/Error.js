import { Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export function ErrorComponent({ errorPlace, errorInfo }) {
  return (
    <Container>
      <VStack>
        <Heading color="#4b4234">Oops an error occurred!!!</Heading>
        <Text color="red">
          Checked the {errorPlace} because {errorInfo}
        </Text>
        <Text>Try Again: </Text>
        <Button bgColor="white" color="#48c2a6" variant="outline">
          <Link to="/register">Sign In</Link>
        </Button>
        <Text>Or if you already have an account: </Text>
        <Button bgColor="white" color="#48c2a6" variant="outline">
          <Link to="/login">Log In</Link>
        </Button>
      </VStack>
    </Container>
  );
}
