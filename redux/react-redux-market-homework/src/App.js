import styles from './App.module.css';
import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addProduct, editProduct, deleteProduct} from "./redux/products";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, Input, Table, InputGroupText } from 'reactstrap';

class App extends PureComponent {
  state={
    inputName: "",
    inputQty: 0,
    editProduct: null,
  }
  
  handleChange = ({target: {value, name}}) => {
    this.setState({[name]: value})
  }
  
  handleClick = () => {
    const {inputName, inputQty} = this.state;
    const {addProduct} = this.props;
    addProduct(inputName, inputQty);
    this.setState({inputName: "", inputQty:""});
  }

  handleEdit = (product) => (event) =>{
    this.setState({ editProduct: product})
    console.log(product)
  }

  handleUpdateEdit = ({target: {value, name}}) =>{
    this.setState({editProduct: {...this.state.editProduct, [name]: value}})
  }

  handleCancel = () =>{
    this.setState({editProduct: null})
  }

  handleFinishEdit = () => {
    this.props.editProduct(this.state.editProduct);//No entiendo esta línea (? a David)
    this.setState({editProduct: null})
  }

  handleDelete = (id) => (event) =>{
    const {deleteProduct} = this.props;
    deleteProduct(id)
  }

  render (){
    const {inputName, inputQty, editProduct} = this.state;
    const {products} = this.props;
    return (
      <div className={styles.mainContainer}>
        <h1>Market Products</h1>
        <div className={styles.inputContainer}>
          <InputGroup>
            <InputGroupText>Product Name</InputGroupText>
            <Input placeholder='Product Name' type="text" value={inputName} name='inputName' onChange={this.handleChange}/>
            <InputGroupText>Quantity</InputGroupText>
            <Input placeholder='Quantity' type="number" value={inputQty} name='inputQty' onChange={this.handleChange}/>
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
              {products.map(({id, name, qty, status,})=>{
                return id ===editProduct?.id ? (
                  <tr>
                  <th scope='row'>{id}</th>
                  <td>
                    <input
                      type="text"
                      value={editProduct.name}
                      name="name"
                      onChange={this.handleUpdateEdit}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editProduct.qty}
                      name="qty"
                      onChange={this.handleUpdateEdit}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editProduct.status}
                      name="status"
                      onChange={this.handleUpdateEdit}
                    />
                  </td>
                  <td><Button onClick={this.handleCancel}>Cancel</Button></td>
                  <td><Button onClick={this.handleFinishEdit}>Finish</Button></td>
                </tr>
                ) : (
                  <tr>
                  <th scope='row'>{id}</th>
                  <td>{name}</td>
                  <td>{qty}</td>
                  <td>{status}</td>
                  <td><Button onClick={this.handleEdit({id, name, qty, status})}>Edit</Button></td>
                  <td><Button onClick={this.handleDelete(id)}>Delete</Button></td>
                </tr>
                )
                
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
