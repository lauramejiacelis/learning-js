import styles from './App.module.css';
import { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, Input, Table } from 'reactstrap';

class App extends PureComponent {
  state={
    input: ""
  }
  
  render (){
    const {input} = this.state;

    // handleChange = ({target: value}) => this.setState({input: value})

    // handleClick = () => {

    // }

    return (
      <div className={styles.mainContainer}>
        <h1>Market Products</h1>
        <div className={styles.inputContainer}>
          <InputGroup>
            <Input type="text" value={input} onChange={this.handleChange}/>
            <Button onClick={this.handleClick}>Add</Button>
          </InputGroup>
        </div>
        <div className={styles.tableContainer}>
          <Table striped>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>Salt</td>
                <td>3</td>
                <td>IN_STORAGE</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}

export default App;
