import {
    Button,
    Container,
    Text,
    Select,
  } from '@chakra-ui/react';
import { useState } from 'react';

export const SetPlayers = ({onSet}) =>{
    const [selection, setSelection] = useState(2);
  
    const handleChange = ({ target: { value } }) => {
      setSelection(value);
    };
    console.log(selection);
  
    const handleClick = () => {
      console.log('setting players');
      onSet(selection);
    };
  
    return(
      <Container
        maxW="md"
        p={10}
        centerContent={true}
        justifyContent="center"
        gap={5}
      >
        <Text color={'#333333'} fontSize={'large'} as={'b'}>
          Choose number of players
        </Text>
        <Select onChange={handleChange}>
          <option value={2}>2 players</option>
          <option value={3}>3 players</option>
          <option value={4}>4 players</option>
        </Select>
        <Button
          // disabled={playersNumber > 0 ? true : false}
          onClick={handleClick}
        >
          Set Players
        </Button>
      </Container>
    )
  }
  