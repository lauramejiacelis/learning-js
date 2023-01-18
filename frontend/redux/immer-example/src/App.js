import { PureComponent } from "react";
import { connect } from "react-redux";
import { addTodo } from "./redux";

class App extends PureComponent {
  state = {
    input: "",
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.input}
          onChange={({ target: { value } }) => this.setState({ input: value })}
        />
        <button onClick={() => this.props.addTodo(this.state.input)}>
          Add
        </button>
        <ul>
          {this.props.todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ todos: state });

const mapDispatchToProps = { addTodo };

export default connect(mapStateToProps, mapDispatchToProps)(App);
