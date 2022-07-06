import { PureComponent } from 'react';
import withRouter from './withRouter';
import {
  Box,
  Container,
  Heading,
  VStack,
  Image,
  Text,
  Flex,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import {
  getSingleCharacterThunk,
  getSingleCharacterSelector,
} from './redux/characters';
import { CircleStatus } from './services';

class Character extends PureComponent {
  componentDidMount() {
    const { getSingleCharacterThunk } = this.props;
    const { id } = this.props.params;
    console.log(id);
    getSingleCharacterThunk(id);
  }

  render() {
    const { character } = this.props;
    console.log(character);
    return (
      <Container centerContent>
        <VStack m={5} p={10} bg="lightgray" w={600}>
          <Image alt="character" src={character.image} />
          <Heading>{character.name}</Heading>

          <Flex wrap="wrap" align="center" gap={2}>
            <CircleStatus status={character.status} />
            <Text>
              {character.status} | {character.species}
            </Text>
          </Flex>
          <Text>Character Creation {character.created}</Text>
          <Box textAlign="center">
            <Heading as="h4" size="md">
              Last known location:
            </Heading>{' '}
            {character.location}
            <Heading as="h4" size="md">
              First seen in:
            </Heading>
            {character.origin}
          </Box>
        </VStack>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  character: getSingleCharacterSelector(state),
});

const mapDispatchToProps = {
  getSingleCharacterThunk,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Character));
