import React, { useState } from "react";
import { IUser } from "../models/IUser";

interface IState{
  user: IUser
}
interface IProps{}

const LoginForm:React.FC<IProps> = ()=>{
  const [state, setState] = useState<IState>({
    user:{
      username: '',
      password:''
    }
  })

  const handleInput = (event:React.ChangeEvent<HTMLInputElement>):void =>{
    setState({
      user:{
        ...state.user,
        [event.target.name]: event.target.value
      }
    })
  }

  const login =(event: React.FormEvent<HTMLFormElement>):void=>{
    event.preventDefault()
    console.log(state.user)
  }

  return(
    <React.Fragment>
      <pre>{JSON.stringify(state.user)}</pre>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header text-center bg-primary text-white">
                <p className="h4">Login Here</p>
              </div>
              <div className="card-body">
                <form onSubmit={login}>
                  <div className="mb-2">
                    <input 
                    required={true}
                    name="username"
                    value={state.user.username}
                    onChange={handleInput}
                    type="text" className="from-control"
                    placeholder="Username or Email" />
                  </div>
                  <div className="mb-2">
                    <input 
                    required={true}
                    name="password"
                    value={state.user.password}
                    onChange={handleInput}
                    type="password" className="from-control"
                    placeholder="Password" />
                  </div>
                  <div className="mb-2">
                    <input type="submit" className="btn btn-primary"
                    value='login' />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LoginForm