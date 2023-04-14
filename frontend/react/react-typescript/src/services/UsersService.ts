import axios from "axios"

let serverURL:string = 'https://jsonplaceholder.typicode.com'

export const UsersService = ()=>{
  let dataURL:string = `${serverURL}/users`
  return axios.get(dataURL)
}

export const SingleUserService = (userId: string)=>{
  let dataURL:string = `${serverURL}/users/${userId}`
  return axios.get(dataURL)
}