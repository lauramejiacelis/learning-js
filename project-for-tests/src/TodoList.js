import { Box, Grid } from '@chakra-ui/react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos }) => {
  //console.log(todos);
  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)" gap={5}>
        {todos.map(({ description, id }) => (
          <TodoItem description={description} id={id} key={id} />
        ))}
      </Grid>
    </Box>
  );
};
