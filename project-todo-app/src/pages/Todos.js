import {
  Box,
  Button,
  Heading,
  Input,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Checkbox,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useState } from 'react';

function Todos() {

  return (
    <VStack spacing={4}>
      <Heading color="#4b4234">My TODOS</Heading>
      <TodoInput />
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
              <Tr>
                <Td>Mercar</Td>
                <Td>
                  <Checkbox />
                </Td>
                <Td>
                  <EditIcon />
                  <DeleteIcon />
                </Td>
              </Tr>
              <Tr>
                <Td>Limpiar Casa</Td>
                <Td>
                  <Checkbox />
                </Td>
                <Td>
                  <EditIcon />
                  <DeleteIcon />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </VStack>
  );
}

export default Todos;

function TodoInput() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = ({ target: { value } }) => {
    // const value = event.target.value;
    setInput(value);
  };

  const handleAdd = () => {
    setTodos((prevTodos) => [...prevTodos, input]); //lo ensayé con [...todos, input] y también me dio
    setInput("");
    
  };

  console.log(todos)
  
  return (
    <Box display="flex" alignItems="center" gap={3}>
      <Input placeholder="To Do Description" value={input} onChange={handleChange}></Input>
      <Button bgGradient="linear(to-r, teal.500, #48c2a6)" onClick={handleAdd}>Add</Button>
    </Box>
  );
}
