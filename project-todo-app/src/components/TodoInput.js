import {
  Button,
  Input,
  VStack,
  FormControl,
  FormHelperText,
} from '@chakra-ui/react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/todos';

function TodoInput(props) {
  //console.log(props);
  const [input, setInput] = useState('');

  const handleChange = ({ target: { value } }) => {
    // const value = event.target.value;
    setInput(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTodo(input);
    //setTodos((prevTodos) => [...prevTodos, { description: input }]); //lo ensayé con [...todos, input] y también me dio
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing="100px" align="stretch" textAlign="center" mb="2px">
        <FormControl>
          <Input
            name="description"
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
            mt="5px"
          >
            Add
          </Button>
        </FormControl>
      </VStack>
    </form>
  );
}

const mapStateToProps = null;

const mapDispatchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
