import { VStack, Heading, Box, HStack, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from './redux/todos/actionCreators';

export const TodoItem = ({ description, id }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {};

  const handleDelete = ({ id }) => {
    console.log('click' + id); //está recibiendo id undefined CHECK HERE
    dispatch(deleteTodo(id));
  };

  return (
    <VStack border="1px" borderColor="gray.200">
      <Heading size="sm" mt={5}>
        Description:
      </Heading>
      <Heading size="md" mt={5}>
        {description}
      </Heading>
      <Box> id:{id}</Box>
      <HStack>
        <Button m={3} onClick={handleEdit}>
          Edit Todo
        </Button>
        <Button m={3} onClick={handleDelete}>
          Delete Todo
        </Button>
      </HStack>
    </VStack>
  );
};
