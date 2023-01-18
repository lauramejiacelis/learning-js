import { Component } from "react";
import { connect } from "react-redux";
import {
  getCharacterSelector,
  isLoadingSelector,
  errorSelector,
} from "./redux/selectors";
import { getCharactersThunk } from "./redux/thunks";

class App extends Component {
  handleFetch = () => {
    this.props.getCharactersThunk();
  };

  render() {
    const { characters, isLoading, error } = this.props;

    if (isLoading) return "Loading...";

    if (error) return "Oops, Something went wrong!";

    return (
      <div>
        <button onClick={this.handleFetch}>Fetch</button>
        <ul>
          {characters.map((character) => (
            <li>{character.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  characters: getCharacterSelector(state),
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = {
  getCharactersThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
