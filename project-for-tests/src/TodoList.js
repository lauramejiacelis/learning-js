import { Box, Grid } from '@chakra-ui/react';
import { TodoItem, TodoItemEdit } from './TodoItem';
import { useSelector } from 'react-redux';
import { isEditingSelector } from './redux/todos/selector';

export const TodoList = ({ todos }) => {
  //const isEditing = useSelector(isEditingSelector);
  //console.log(`is editing: ${isEditing}`);
  //console.log(todos);
  return (
    <Box>
      <Grid templateColumns="repeat(2, 1fr)" gap={5}>
        {todos.map(({ description, id, isEditing }) =>
          isEditing ? (
            <TodoItemEdit
              description={description}
              id={id}
              key={id}
              isEditing={isEditing}
            />
          ) : (
            <TodoItem
              description={description}
              id={id}
              key={id}
              isEditing={isEditing}
            />
          )
        )}
      </Grid>
    </Box>
  );
};
