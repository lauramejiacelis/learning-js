import { Heading, VStack, Container } from '@chakra-ui/react';
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
import { connect } from 'react-redux';
import { getTodosSelector } from '../redux/todos/selectors';

function Todos(props) {
  console.log(props);
  const { todos } = props;
  return (
    <Container py={12}>
      <VStack spacing={4} align="stretch">
        <Heading color="#4b4234" textAlign="center">
          My TODOS
        </Heading>
        <TodoInput />
        <TodoList key={todos.id} todos={todos} id={todos.id} />
      </VStack>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  todos: getTodosSelector(state),
});

export default connect(mapStateToProps)(Todos);
