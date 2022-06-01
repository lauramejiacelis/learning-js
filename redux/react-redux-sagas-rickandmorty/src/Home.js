/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { PureComponent } from 'react';
import { connect } from 'react-redux';
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
                  <h2>{character.name}</h2>
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
