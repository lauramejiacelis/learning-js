import { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  getCharacterSelector,
  getLoadingOneCharacter,
} from './redux/characters';
import withRouter from './withRouter';
import styles from './Character.module.css';

class Character extends PureComponent {
  componentDidMount() {
    const { id } = this.props.params;
    console.log(id);
    const { getLoadingOneCharacter } = this.props;
    getLoadingOneCharacter();
    console.log(getLoadingOneCharacter(id));
  }

  render() {
    const { character } = this.props;
    console.log(character);
    return (
      <div className={styles.characterContainer}>
        <img
          className={styles.characterImage}
          alt="character"
          src={character.image}
        />
        <div className={styles.characterInfo}>
          <h3>{character.name}</h3>
          <p>
            {character.status} | {character.species}
          </p>
          {character.gender}
          <p>First seen in: </p>
          {character.origin}
          <p>Last known location: </p>
          {character.location}
          <p>Created: </p>
          {character.created}
        </div>
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
