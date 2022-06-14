import { PureComponent } from 'react';
import withRouter from './withRouter';
import { Box } from '@chakra-ui/react';
import { connect } from 'react-redux';
import {
  getSingleCharacterThunk,
  getSingleCharacterSelector,
} from './redux/characters';

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
    return <Box>This is a single Character</Box>;
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
