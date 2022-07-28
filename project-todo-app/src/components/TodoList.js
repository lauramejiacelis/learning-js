import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
} from '@chakra-ui/react';

import TodoItem from './TodoItem';

function TodoList({ todos }) {
  return (
    <Box>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th fontSize={20}>TO DO</Th>
              <Th fontSize={20}>Done</Th>
              <Th fontSize={20}>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {todos &&
              todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} />;
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TodoList;
