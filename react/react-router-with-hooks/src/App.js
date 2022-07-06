import { Routes, Route , useMatch} from 'react-router-dom'
import './App.css';
import Home from './Home'
import About from './About';
import Blog from './Blog'
import { Heading } from '@chakra-ui/react'

function App() {
  let home= useMatch("/")
  let about= useMatch("/about")
  return (
    <div className="mainContent">
      <Heading> Router with Hooks </Heading>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/blog/:id' element={<Blog/>}/>
      </Routes>
    </div>
  );
}

export default App;
