import React, { useState } from "react";
import { IUserr } from "../models/IUserr";
import { UserService } from "../services/UserService";

interface IState{
  users: IUserr[]
}
interface IProps{}

const UserList:React.FC<IProps> = ()=>{
  const [state, setState] = useState<IState>({
    users: UserService.getAllUsers()})

  return(
    <React.Fragment>
      {/* <pre>{JSON.stringify(state.users)}</pre> */}
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h3">User List</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-striped text-center table-hover shadow-lg">
              <thead  className="bg-dark text-white">
                <tr>
                  <th>SNO</th>
                  <th>NAME</th>
                  <th>AGE</th>
                  <th>DESIGNATION</th>
                  <th>COMPANY</th>
                </tr>
              </thead>
              <tbody>
                {
                  state.users.length > 0 &&
                  state.users.map((user)=>{
                    return (
                      <tr key={user.sno}>
                        <td>{user.sno}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.designation}</td>
                        <td>{user.company}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserList;