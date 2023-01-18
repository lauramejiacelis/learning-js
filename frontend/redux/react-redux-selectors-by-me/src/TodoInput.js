import { PureComponent } from "react";
import { Button, FormControl, FormHelperText, FormLabel,  Input, Select, VStack, } from '@chakra-ui/react'
import {TODO_STATUS, TODO_STATUS_LABEL} from './constants'
import {addTodo} from './redux/todos'
import { connect } from "react-redux";

class TodoInput extends PureComponent {
  state = {
    title:"",
    status: TODO_STATUS.TODO,
  }

  handleChange = ({target:{value, name}}) => {
    this.setState({[name]: value})
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    this.props.addTodo({
      title: this.state.title,
      status: this.state.status
    })
  }
    
  render (){
    return(
      <form onSubmit={this.handleSubmit}>
        <VStack spacing={5} align="stretch">
          <FormControl>
            <FormLabel htmlFor='toDoInfo'>To do info</FormLabel>
            <Input 
            id='toDoInfo' 
            name="title"
            type='text' 
            value={this.state.title}
            onChange= {this.handleChange}
            />
            <FormHelperText>Please input a to do</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="status">Status</FormLabel>
            <Select
            id="status"
            name="status"
            value={this.state.status}
            onChange={this.handleChange}>
              {TODO_STATUS_LABEL.map(({label, value})=>(
                <option value={
                  value
                }>{label}</option>
              ))}
            </Select>
            <FormHelperText> Please select a to do status</FormHelperText>
          </FormControl>
          <Button type="submit">Add</Button>
        </VStack>
    </form>
    )
  }
}

const mapStateToProps = null;

const mapDispatchToProps = {
  addTodo,
}

export default connect(mapStateToProps, mapDispatchToProps) (TodoInput);