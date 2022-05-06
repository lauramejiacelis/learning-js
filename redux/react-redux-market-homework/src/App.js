import styles from './App.module.css';
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addProduct, editProduct, deleteProduct} from "./redux/products";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, Input, Table } from 'reactstrap';

class App extends PureComponent {
  state={
    inputName: "",
    inputQty: 0,
    editProduct: null,
  }
  
  handleChange = ({target: {value, name}}) => {
    console.log(name)
    console.log(value)
    this.setState({[name]: value})
  }
  

  handleClick = () => {
    const {inputName, inputQty} = this.state;
    const {addProduct} = this.props;
    addProduct(inputName, inputQty);
    console.log(addProduct(inputName, inputQty));
    this.setState({inputName: "", inputQty:""});
  }

  render (){
    const {inputName, inputQty} = this.state;
    const {products} = this.props;
    return (
      <div className={styles.mainContainer}>
        <h1>Market Products</h1>
        <div className={styles.inputContainer}>
          <InputGroup>
            <Input placeholder='Product Name' type="text" value={inputName} name='inputName' onChange={this.handleChange}/>
            <Input placeholder='Quantity' type="text" value={inputQty} name='inputQty' onChange={this.handleChange}/>
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
              {products.map(({id, name, qty, status,})=>{
                <tr>
                  <th scope='row'>{id}</th>
                  <td>
                    {name}
                  </td>
                  <td>{qty}</td>
                  <td>{status}</td>
                </tr>
              })}
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  }
}

const mapDispatchToProps = {
  addProduct,
  editProduct,
  deleteProduct,
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps) (App);

export default ConnectedApp;
