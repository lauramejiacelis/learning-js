import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { IUser } from "../models/IUsers";
import { UsersService } from "../services/UsersService";

interface IState{
  loading: boolean;
  users: IUser[];
  errorMessage: string;
}
interface IProps{}

const UsersList:React.FC<IProps> = ()=>{
  const [state, setState] = useState<IState>({
    loading: false,
    users:[] as IUser[],
    errorMessage: ''
  })

  useEffect(()=>{
    setState({...state, loading:true})
    UsersService()
    .then((res)=>{
      setState({
        ...state,
        loading: false,
        users: res.data
      })
    })
    .catch((error)=>{
      setState({
        ...state,
        loading: false,
        errorMessage: error.message
        
      })
    })
  },[])

  let {loading, users, errorMessage} = state

  return(
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3 fw-bold text-success">User List</p>
            <p className="fst-italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur assumenda corrupti accusantium, veniam quisquam nisi, officiis unde, at molestiae error nesciunt nam voluptas voluptatum reprehenderit adipisci sunt maiores sapiente explicabo.
            Rerum est libero nostrum sapiente debitis nisi optio odit veritatis! Aspernatur quod debitis molestias corporis adipisci excepturi sit, laboriosam delectus dignissimos nihil laudantium provident facere alias cupiditate amet laborum totam!
            Cumque, ipsa. Tenetur, blanditiis. Repellendus tenetur quis, incidunt, autem illum numquam libero nesciunt provident quaerat, necessitatibus voluptatum? Aliquam magnam debitis, saepe voluptate, tempore, sunt quaerat consequatur distinctio sit a quis.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-hover text-center table-striped">
              <thead className="bg-success text-white">
                <tr>
                  <th>SNO</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Company</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.length>0 && users.map((user)=>{
                    return(
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td> <Link to={`/contact/${user.id}`} className='text-decoration-none text-success fw-bold'
                        > {user.name}</Link> </td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.company.name}</td>
                        <td>{user.website}</td>
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

export default UsersList;