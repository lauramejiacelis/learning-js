import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "./redux/todos";

class App extends PureComponent {
  state = {
    input: "",
    editTodo: null,
  };

  handleChange = ({ target: { value } }) => this.setState({ input: value });

  // 1
  /*handleClick = () => {
    const { dispatch } = this.props;
    const { input } = this.state;
    dispatch({
      type: TODOS_ACTION_TYPES.CREATE,
      payload: input,
    });
  };*/

  // 2,3
  handleClick = () => {
    const { input } = this.state;
    const { addTodo } = this.props;
    addTodo(input);
    this.setState({ input: "" });
  };

  handleDelete = (id) => (event) => {
    this.props.deleteTodo(id);
  };

  handleEdit = (todo) => (event) => {
    this.setState({ editTodo: todo });
  };

  handleCancel = () => {
    this.setState({ editTodo: null });
  };

  handleUpdateEdit = ({ target: { value, name } }) => {
    this.setState({ editTodo: { ...this.state.editTodo, [name]: value } });
  };

  handleFinishEdit = () => {
    this.props.editTodo(this.state.editTodo);
    this.setState({ editTodo: null });
  };

  render() {
    const { input, editTodo } = this.state;
    const { todos } = this.props;
    return (
      <div>
        <h1>Todo List</h1>
        <div>
          <input type="text" value={input} onChange={this.handleChange} />
          <button onClick={this.handleClick}>Add</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {todos.map(({ id, description, status }) => {
              return id === editTodo?.id ? (
                <tr>
                  <td>{id}</td>
                  <td>
                    <input
                      type="text"
                      value={editTodo.description}
                      name="description"
                      onChange={this.handleUpdateEdit}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editTodo.status}
                      name="status"
                      onChange={this.handleUpdateEdit}
                    />
                  </td>
                  <td>
                    <button onClick={this.handleCancel}>Cancel</button>
                    <button onClick={this.handleFinishEdit}>Finish</button>
                  </td>
                </tr>
              ) : (
                <tr>
                  <td>{id}</td>
                  <td>{description}</td>
                  <td>
                    {status}
                    <button
                      onClick={this.handleEdit({ id, description, status })}
                    >
                      Edit
                    </button>
                    <button onClick={this.handleDelete(id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

// store.getState()
const mapStateToProps = (state) => {
  // props
  return {
    todos: state.todos,
  };
};

/*// 1. dispatch
const mapDispatchToProps = null; // optional*/

/*// 2. bind dispatch to actionCreator
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (description) => {
      dispatch({
        type: TODOS_ACTION_TYPES.CREATE,
        payload: description,
      });
    },
    deleteTodo: (id) =>
      dispatch({ type: TODOS_ACTION_TYPES.DELETE, payload: { id } }),
  };
};*/

// 3. shortcut de bind dispatch to actionCreator
const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  editTodo,
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
