import { PureComponent } from "react";
import { FormControl, FormHelperText, FormLabel,  Input, } from '@chakra-ui/react'

class TodoInput extends PureComponent {

  handleSubmit = (event) =>{
      event.preventDefault();
    }
    
  render (){
    

    return(
      <form onSubmit={this.handleSubmit}>
      <FormControl>
        <FormLabel htmlFor='toDoInfo'>To do info</FormLabel>
        <Input id='toDoInfo' type='text' />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    </form>
    )
  }
}

export default TodoInput;