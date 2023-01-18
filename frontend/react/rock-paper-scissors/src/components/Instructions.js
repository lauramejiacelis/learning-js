import { Box, Text, UnorderedList, ListItem } from '@chakra-ui/react';

export const Instructions = ({ howToPlay, rules, notes }) => {
  let id = 0;
  return (
    <Box p={10}>
      <Text color={'#CC57C7'} fontSize={'xl'} as={'b'}>
        How to play:
      </Text>
      <Text color={'#333333'}>{howToPlay}</Text>
      <UnorderedList>
        {rules.map((rule) => (
          <ListItem key={id++}>{rule}</ListItem>
        ))}
      </UnorderedList>
      <Text color={'#333333'}>{notes}</Text>
    </Box>
  );
};
