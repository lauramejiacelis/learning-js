import { VStack, Heading, Box, HStack, Button, Input } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  editTodo,
  deleteTodo,
  cancelEdit,
  completeEdit,
  updateTodo,
} from './redux/todos/actionCreators';
import { updateTodoSelector } from './redux/todos/selector';

export const TodoItem = ({ description, id, isEditing }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTodo({ description, id }));
  };
  //console.log(id);
  //console.log(isEditing);

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
  const temporalTodo = useSelector(updateTodoSelector);
  console.log(temporalTodo);
  const dispatch = useDispatch();

  const handleUpdateEdit = ({ target: { value } }) => {
    // const value = event.target.value;
    console.log(value);
    dispatch(updateTodo(value));
  };
  const handleCompleteEdit = () => {
    dispatch(completeEdit({ description: temporalTodo, id }));
  };
  const handleCancel = () => {
    dispatch(cancelEdit(id));
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
        value={temporalTodo.description}
        name="description"
        onChange={handleUpdateEdit}
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
