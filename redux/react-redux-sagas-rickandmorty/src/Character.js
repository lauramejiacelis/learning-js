import { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  getCharacterSelector,
  getLoadingOneCharacter,
} from './redux/characters';
import withRouter from './withRouter';

class Character extends PureComponent {
  componentDidMount() {
    const { id } = this.props.params;
    console.log(id);
    const { getLoadingOneCharacter } = this.props;
    getLoadingOneCharacter();
    console.log(getLoadingOneCharacter(id));
    const { character } = this.props;
    console.log(character);
  }

  render() {
    return (
      <div>
        <h3>Character</h3>
        <div></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  character: getCharacterSelector(state),
});

const mapDispatchToProps = {
  getLoadingOneCharacter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Character));
