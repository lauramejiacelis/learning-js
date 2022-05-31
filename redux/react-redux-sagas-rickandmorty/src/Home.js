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
    return (
      <div className={styles.homeContainer}>
        <h2>All Characters</h2>
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
