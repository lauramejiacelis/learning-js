import { PureComponent } from 'react';
import {
  getCharacterSelector,
  getLoadingOneCharacter,
} from './redux/characters';
import withRouter from './withRouter';

class Character extends PureComponent {
  componentDidMount() {
    const { id } = this.props.params;
    console.log(id);
  }

  render() {
    return (
      <div>
        <h3>Character</h3>
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

export default withRouter(Character);
