import { VStack, Heading, Box, HStack, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  cancelEdit,
  deleteTodo,
  editTodo,
  isEditing,
} from './redux/todos/actionCreators';

export const TodoItem = ({ description, id, editing }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTodo({ description, id }));
  };
  console.log(id);
  console.log(editing);

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
      <Box> Editing:{editing}</Box>
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
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleUpdate = ({ target: { value } }) => {
    console.log('update');
  };
  const handleFinishEdit = () => {
    console.log('Finish');
  };
  const handleCancel = () => {
    dispatch(cancelEdit());
    console.log('Cancel Edit');
  };

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
