import React from "react";
import { isPropertySignature } from "typescript";

interface IProps{}
interface IState{
  name: string
  age: number
  title: string
}

class EmployeeClass extends React.Component<IProps, IState> {
  constructor(props:IProps){
    super(props)
    this.state = {
      name: 'Melissa',
      age: 29,
      title: 'FrontEnd Developer'
    } as IState
  }
  render() {
      const {name, age, title} = this.state
      return(
        <React.Fragment>
          <h3>Employee Class Component</h3>
            <ul className="list-group">
            <li className="list-group-item">
              Name: {name}
            </li>
            <li className="list-group-item">
              Age: {age}
            </li>
            <li className="list-group-item">
              Title: {title}
            </li>
          </ul>
        </React.Fragment>
        
      )
  }
}

export default EmployeeClass