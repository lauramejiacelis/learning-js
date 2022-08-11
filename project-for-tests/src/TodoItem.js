import { VStack, Heading, Box, HStack, Button, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from './redux/todos/actionCreators';

export const TodoItem = ({ description, id }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {};
  console.log(id);

  const handleDelete = () => {
    //no le tenía que pasar id... ya lo tomaba del contexto global mk

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

export const TodoItemEdit = ({ description, id }) => {
  const handleUpdate = () => {};
  const handleFinishEdit = () => {};
  const handleCancel = () => {};

  return (
    <VStack border="1px" borderColor="gray.200">
      <Heading size="sm" mt={5}>
        Description:
      </Heading>
      <Input
        size="md"
        mt={5}
        type="text"
        value={description}
        name="description"
        onChange={handleUpdate}
      />
      <Box> id:{id}</Box>
      <HStack>
        <Button m={3} onClick={handleFinishEdit}>
          Finish Edit
        </Button>
        <Button m={3} onClick={handleCancel}>
          Cancel
        </Button>
      </HStack>
    </VStack>
  );
};
