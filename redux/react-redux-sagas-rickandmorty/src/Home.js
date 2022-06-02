/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { getCharactersSelector, getLoading } from './redux/characters';

class Home extends PureComponent {
  componentDidMount() {
    const { getLoading } = this.props;
    getLoading();
  }

  render() {
    const { characters } = this.props;
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
                  <p>
                    <img
                      className={styles.icon}
                      alt="green"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ski_trail_rating_symbol-green_circle.svg/1024px-Ski_trail_rating_symbol-green_circle.svg.png"
                    />
                    {character.status}-{character.species}
                  </p>
                  <p>
                    <h3>Last Known Location:</h3>
                    {character.locationName}
                  </p>
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
});

const mapDispatchToProps = {
  getLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
