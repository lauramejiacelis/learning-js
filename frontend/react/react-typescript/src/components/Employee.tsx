import React, { useState } from "react";

interface IProps{}
interface IState{
  name: string;
  age: number;
  title: string;
}

const Employee:React.FC<IProps> = ()=>{
  const [state, setState] = useState<IState>(
    {
      name: 'Meli',
      age: 28,
      title: 'Web Developer'
    }
  )

  return(
    <React.Fragment>
      <h3>Employee Component</h3>
      <ul className="list-group">
        <li className="list-group-item">
          Name: {state.name}
        </li>
        <li className="list-group-item">
          Age: {state.age}
        </li>
        <li className="list-group-item">
          Title: {state.title}
        </li>
      </ul>
    </React.Fragment>
  )
}



export default Employee;