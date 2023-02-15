import React, { useState } from "react";
import { IUserr } from "../models/IUserr";

interface IState{
  users: IUserr[]
}
interface IProps{}

const UserList:React.FC<IProps> = ()=>{
  const [state, setState] = useState({
    users: [
    {
      sno: 'AAA101',
      name: 'Rajan',
      age: 25,
      designation: 'Software Engineer',
      company: 'Infosys'
    },
    {
      sno: 'AAA102',
      name: 'John',
      age: 35,
      designation: 'Web Developer',
      company: 'Globant'
    },
    {
      sno: 'AAA103',
      name: 'Camila',
      age: 25,
      designation: 'Frontend Developer',
      company: 'Spphos'
    },
    {
      sno: 'AAA104',
      name: 'Sarah',
      age: 43,
      designation: 'Project Manager',
      company: 'Spphos'
    }
  ]})

  return(
    <React.Fragment>
      <pre>{JSON.stringify(state.users)}</pre>
      <h3>UserList</h3>
    </React.Fragment>
  )
}

export default UserList;