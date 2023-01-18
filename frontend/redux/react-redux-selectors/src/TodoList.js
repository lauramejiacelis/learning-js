import { PureComponent } from "react";
import { connect } from "react-redux";
import { VStack } from "@chakra-ui/react";
import { getTodosByStatus } from "./redux/todos";
import Card from "./Card";

class TodoList extends PureComponent {
  render() {
    const { todos } = this.props;
    return (
      <VStack align="stretch" spacing={5}>
        {todos.map((todo) => (
          <Card title={todo.title} />
        ))}
      </VStack>
    );
  }
}

const mapStateToProps = (state, props) => ({
  todos: getTodosByStatus(props.status)(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
