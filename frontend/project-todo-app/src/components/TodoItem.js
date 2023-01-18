import { Tr, Td, Checkbox } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { connect } from 'react-redux';
import { editTodo, deleteTodo } from '../redux/todos';

function TodoItem({ todo, id, deleteTodo }) {
  const handleEdit = () => {
    console.log('ready to edit');
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <Tr>
      <Td>{todo.description}</Td>
      <Td>
        <Checkbox />
      </Td>
      <Td>
        <EditIcon
          boxSize={'1.5em'}
          color={'#48c2a6'}
          mr={'15px'}
          onClick={handleEdit}
        />
        <DeleteIcon
          boxSize={'1.5em'}
          color={'#4b4234'}
          onClick={handleDelete}
        />
      </Td>
    </Tr>
  );
}

const mapStateToProps = null;

const mapDispatchToProps = {
  editTodo,
  deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
