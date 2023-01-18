import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import LoadingToRedirect from "./LoadingToRedirect"

const UserRoute = ()=>{

    const {currentUser} = useSelector((state) => state.user)

  return currentUser ? <Outlet/> : <LoadingToRedirect/>
}

export default UserRoute