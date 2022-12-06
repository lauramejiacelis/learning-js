import { useDispatch, useSelector} from 'react-redux'
import { logoutThunk } from '../redux/users/thunks'

const Home = () =>{

  const {currentUser} = useSelector((state) => state.user)

  const dispatch = useDispatch()

  const handleAuth = () =>{
    if(currentUser){
      dispatch(logoutThunk())
    }
    
  }

  return(
    <div className='mx-auto' >
      <h2 style={{marginTop: '40px'}}>Welcome to Our Site</h2>
      <button className="btn btn-danger" style={{marginTop: '20px'}} onClick={handleAuth}>Logout</button>
    </div>
  )
}

export default Home;