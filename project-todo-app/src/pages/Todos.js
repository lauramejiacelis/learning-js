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
  FormControl,
  FormHelperText,
  Container,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { useState } from 'react';

function Todos() {
  return (
    <Container py={12}>
      <VStack spacing={4} align="stretch">
        <Heading color="#4b4234" textAlign="center">
          My TODOS
        </Heading>
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
    </Container>
  );
}

export default Todos;

function TodoInput() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = ({ target: { value } }) => {
    // const value = event.target.value;
    setInput(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos((prevTodos) => [...prevTodos, input]); //lo ensayé con [...todos, input] y también me dio
    setInput('');
  };

  console.log(todos);

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing="100px" align="stretch" textAlign="center">
        <FormControl>
          <Input
            placeholder="Buy groceries"
            value={input}
            onChange={handleChange}
          ></Input>
          <FormHelperText textAlign="left">
            Please enter a to do description
          </FormHelperText>
          <Button
            type="submit"
            bgGradient="linear(to-r, teal.500, #48c2a6)"
            onClick={handleSubmit}
          >
            Add
          </Button>
        </FormControl>
      </VStack>
    </form>
  );
}
