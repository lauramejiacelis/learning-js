import { VStack, Heading, Box, HStack, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  cancelEdit,
  completeEdit,
  deleteTodo,
  editTodo,
} from './redux/todos/actionCreators';

export const TodoItem = ({ description, id, isEditing }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTodo({ description, id }));
  };
  console.log(id);
  console.log(isEditing);

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
      <Box> Editing:{isEditing.toString()}</Box>
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

export const TodoItemEdit = ({ description, id, isEditing }) => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    // const value = event.target.value;
    console.log(value);
    setInput(value);
  };
  const handleCompleteEdit = () => {
    dispatch(completeEdit({ description: input, id }));
    console.log('Finish');
  };
  const handleCancel = () => {
    dispatch(cancelEdit(id));
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
        value={input}
        name="description"
        onChange={handleChange}
      />
      <Box> id:{id}</Box>
      <Box> Editing:{isEditing.toString()}</Box>
      <HStack>
        <Button m={3} onClick={handleCompleteEdit}>
          Finish Edit
        </Button>
        <Button m={3} onClick={handleCancel}>
          Cancel
        </Button>
      </HStack>
    </VStack>
  );
};
