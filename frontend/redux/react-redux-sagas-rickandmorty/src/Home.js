/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import {
  errorSelector,
  getCharactersSelector,
  getLoading,
  isLoadingSelector,
} from './redux/characters';
import { CircleStatus } from './services';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

class Home extends PureComponent {
  componentDidMount() {
    const { getLoading } = this.props;
    getLoading();
  }

  render() {
    const { characters, loading, error } = this.props;

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
      <div className={styles.homeContainer}>
        <div className={styles.initialContainer}>
          <div className={styles.tittleContainer}>
            <h1>The Rick and Morty API</h1>
            <img
              className={styles.bgImage}
              alt="Rick And Morty"
              src="https://repository-images.githubusercontent.com/120371205/b6740400-92d4-11ea-8a13-d5f6e0558e9b"
            />
          </div>
        </div>

        <div className={styles.charactersContainer}>
          {characters.map((character) => {
            return (
              <div className={styles.characterInfo}>
                <img
                  className={styles.characterImage}
                  alt="character"
                  src={character.image}
                />

                <div className={styles.characterData}>
                  <Link
                    className={styles.characterName}
                    to={`/character/${character.id}`}
                  >
                    <h2>{character.name}</h2>
                  </Link>
                  <div className={styles.status}>
                    <CircleStatus status={character.status} />
                    {character.status} - {character.species}
                  </div>
                  <div>
                    <h3>Last Known Location:</h3>
                    {character.locationName}
                  </div>
                  <p>
                    <h3>First seen in:</h3>
                    {character.originName}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  characters: getCharactersSelector(state),
  loading: isLoadingSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = {
  getLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
