import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  getTodosSelector,
  GET_TODOS_STARTED,
  ADD_TODOS_STARTED,
} from "./redux/todos";

class App extends PureComponent {
  state = {
    input: "",
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: GET_TODOS_STARTED });
  }

  handleChange = ({ target: { value } }) => this.setState({ input: value });

  handleAdd = () => {
    const { dispatch } = this.props;
    dispatch({
      type: ADD_TODOS_STARTED,
      payload: { description: this.state.input, status: "TODO" },
    });
  };

  render() {
    const { todos } = this.props;
    return (
      <div>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAdd}>Add</button>
        <ul>
          {todos.map(({ description, status }) => (
            <li>
              {description} {status}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: getTodosSelector(state),
});

export default connect(mapStateToProps)(App);
