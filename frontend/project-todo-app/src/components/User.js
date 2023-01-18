import {
  Container,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

export const UserInfo = ({ user, id }) => {
  return (
    <Container bgColor="white" borderRadius="5px" textAlign="center" py={10}>
      <VStack>
        <TableContainer>
          <Table>
            <TableCaption>User Info</TableCaption>
            <Thead>
              <Tr>
                {Object.keys(user).map((data) => (
                  <Th>{data}</Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                {Object.values(user).map((data) => (
                  <Td>{data}</Td>
                ))}
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </Container>
  );
};
