import { PureComponent } from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import {
  getCharactersByStatus,
  loadingSelector,
  errorSelector,
} from './redux/characters';
import { connect } from 'react-redux';
import { CircleStatus } from './services';
import { Link } from 'react-router-dom';

class CharacterList extends PureComponent {
  render() {
    const { characters } = this.props;
    return (
      <Flex mt={5} gap={5} wrap="wrap" align="center" justify="center">
        {characters.map((character) => {
          return (
            <Flex
              gap={4}
              bg="#3c3e44"
              color="whitesmoke"
              borderRadius="md"
              overflow="hidden"
            >
              <Image src={character.image} alt="character" />
              <Box w={300} mt={2}>
                <Heading
                  as="h2"
                  size="xl"
                  fontSize="2em"
                  _hover={{ color: '#ff9800' }}
                >
                  <Link to={`/character/${character.id}`}>
                    {character.name}{' '}
                  </Link>
                </Heading>
                <Flex gap={2} wrap="wrap" align="center">
                  <CircleStatus status={character.status} />
                  <Text>
                    {character.status} | {character.species}
                  </Text>
                </Flex>

                <Box>
                  <Heading as="h4" size="md">
                    Last known location:
                  </Heading>{' '}
                  {character.locationName}
                </Box>
                <Box>
                  <Heading as="h4" size="md">
                    First seen in:
                  </Heading>
                  {character.originName}
                </Box>
              </Box>
            </Flex>
          );
        })}
      </Flex>
    );
  }
}

const mapStateToProps = (state, props) => ({
  characters: getCharactersByStatus(props.status)(state),
  loading: loadingSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
