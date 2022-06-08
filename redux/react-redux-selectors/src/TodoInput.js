import React, { PureComponent } from "react";
import { TODO_STATUS } from "./constants";
import { capitalize } from "./helpers";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Select,
  Button,
  VStack,
} from "@chakra-ui/react";
import { connect } from "react-redux";
import { addTodo } from "./redux/todos";

const TODOS_SELECT = Object.values(TODO_STATUS).map((value) => ({
  label: capitalize(value),
  value,
}));

class TodoInput extends PureComponent {
  state = {
    title: "",
    status: TODO_STATUS.TODO,
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo({ title: this.state.title, status: this.state.status });
    this.setState({ title: "", status: TODO_STATUS.TODO });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <VStack spacing={5} align="stretch">
          <FormControl>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              id="title"
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <FormHelperText>Please input a todo title</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="status">Status</FormLabel>
            <Select
              id="status"
              name="status"
              value={this.state.status}
              onChange={this.handleChange}
            >
              {TODOS_SELECT.map(({ label, value }) => (
                <option value={value}>{label}</option>
              ))}
            </Select>
            <FormHelperText>Please select a todo status</FormHelperText>
          </FormControl>
          <Button type="submit">Add</Button>
        </VStack>
      </form>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
