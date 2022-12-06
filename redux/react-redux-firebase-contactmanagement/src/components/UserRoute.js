import { Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"
import LoadingToRedirect from "./LoadingToRedirect"
import Home from "../pages/Home"

const UserRoute = ({children, ...rest})=>{

    const {currentUser} = useSelector((state) => state.user)

  return currentUser ? <Routes><Route path="/" element={<Home/>}/></Routes>: <LoadingToRedirect/>
}
//WARNING: NEED REVIEW

export default UserRoute