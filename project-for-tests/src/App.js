import { Box, Button, Container, Heading, Input } from '@chakra-ui/react';
import { TodoList } from './TodoList';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosSelector } from './redux/todos/selector';
import { addTodo } from './redux/todos/actionCreators';

export default function App() {
  const [input, setInput] = useState('');
  const todos = useSelector(getTodosSelector);
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    // const value = event.target.value;
    setInput(value);
  };

  const handleAdd = () => {
    //setTodos((prevTodos) => [...prevTodos, { description: input, id }]); //lo ensayé con [...todos, input] y también me dio
    dispatch(addTodo(input));
    setInput('');
  };
  console.log(todos);

  return (
    <Container alignSelf="center">
      <Box textAlign="center" p={6}>
        <Heading textAlign="center">To Do App with Hooks</Heading>
        <Heading size="md" textAlign="center">
          and by myself
        </Heading>
        <Input
          type="text"
          placeholder="enter a todo"
          value={input}
          onChange={handleChange}
          my={3}
        />
        <Button onClick={handleAdd}>Add Todo</Button>
      </Box>
      {todos ? <TodoList todos={todos} /> : ''}
    </Container>
  );
}
