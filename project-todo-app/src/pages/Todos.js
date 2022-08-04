import { Heading, VStack, Container } from '@chakra-ui/react';
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
import { useDispatch, useSelector, connect } from 'react-redux';
import { getTodosSelector } from '../redux/todos/selectors';
import { getTodoThunk } from '../redux/todos';
import { useEffect } from 'react';

function Todos(props) {
  console.log(props);
  //const todos = useSelector(getTodosSelector);

  const { todos } = props;
  //console.log(todos);
  const dispatch = useDispatch();

  /* useEffect(() => {
    dispatch(getTodoThunk());
  }); */

  return (
    <Container py={12}>
      <VStack spacing={4} align="stretch">
        <Heading color="#4b4234" textAlign="center">
          My TODOS
        </Heading>
        <TodoInput />
        <TodoList key={todos.id} todos={todos} id={todos.id} />
        {/* {todos ? <TodoList key={todos.id} todos={todos} id={todos.id} /> : ' '} */}
      </VStack>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  todos: getTodosSelector(state),
});

export default connect(mapStateToProps)(Todos);
