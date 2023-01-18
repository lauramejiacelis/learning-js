import { Button, Heading } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'

function Home(){
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate('/about?from=home')
  }

  return(
    <div>
      <Heading size='lg'>Home</Heading>

      <Link to="/about"><Heading size='sm'>About Us</Heading></Link>
      <Button bg='lavenderblush' onClick={handleClick}>Go to About</Button>
      <Link to="/blog/1"><Heading size='sm'>Blog 1</Heading></Link>
    </div>
  )
}

export default Home;