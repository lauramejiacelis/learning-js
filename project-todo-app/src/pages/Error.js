import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <Container>
      <VStack>
        <Heading>Oops an error occurred!!!</Heading>
        <Button>
          <Link to="/register">Sign In</Link>
        </Button>

        <Link to="/login">Log In</Link>
      </VStack>
    </Container>
  );
}

export default Error;
