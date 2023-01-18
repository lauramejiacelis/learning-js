import { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  errorSelector,
  getCharacterSelector,
  getLoadingOneCharacter,
  isLoadingSelector,
} from './redux/characters';
import withRouter from './withRouter';
import styles from './Character.module.css';
import { CircleStatus } from './services';
import { ToastContainer, toast } from 'react-toastify';

class Character extends PureComponent {
  componentDidMount() {
    const { id } = this.props.params;
    console.log(id);
    const { getLoadingOneCharacter } = this.props;
    getLoadingOneCharacter();
    console.log(getLoadingOneCharacter(id));
  }

  render() {
    const { character, loading, error } = this.props;

    if (loading) {
      toast('Loading...', {
        position: toast.POSITION.TOP_CENTER,
      });
      return (
        <div>
          <ToastContainer autoClose={3000} />
        </div>
      );
    }

    if (error) {
      toast.error('error', {
        position: toast.POSITION.TOP_CENTER,
      });
      return (
        <div>
          <ToastContainer autoClose={3000} />
        </div>
      );
    }

    return (
      <div className={styles.characterContainer}>
        <img
          className={styles.characterImage}
          alt="character"
          src={character.image}
        />
        <div className={styles.characterInfo}>
          <h3>{character.name}</h3>
          <div className={styles.status}>
            <CircleStatus status={character.status} />
            {character.status} | {character.species}
          </div>
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
  loading: isLoadingSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = {
  getLoadingOneCharacter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Character));
