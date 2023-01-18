import { Heading, VStack, Container, Box } from '@chakra-ui/react';
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
import { useDispatch, useSelector, connect } from 'react-redux';
import {
  errorSelector,
  getTodosSelector,
  isLoadingSelector,
} from '../redux/todos/selectors';
import { getTodoThunk } from '../redux/todos';
import { useEffect } from 'react';
import { ErrorComponent } from '../components/Error';

function Todos(props) {
  console.log(props);
  const todos = useSelector(getTodosSelector);
  const isLoading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);

  //const { todos } = props;
  //console.log(todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoThunk());
  }, []);

  return (
    <Container py={12}>
      <VStack spacing={4} align="stretch">
        <Heading color="#4b4234" textAlign="center">
          My TODOS
        </Heading>
        <TodoInput />
        {/* <TodoList key={todos.id} todos={todos} id={todos.id} /> */}
        {todos.data ? (
          <TodoList key={todos.data.id} todos={todos} id={todos.data.id} />
        ) : (
          ' '
        )}
        <Box>{error ? <ErrorComponent error={error} /> : ''}</Box>
      </VStack>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  todos: getTodosSelector(state),
});

export default connect(mapStateToProps)(Todos);
