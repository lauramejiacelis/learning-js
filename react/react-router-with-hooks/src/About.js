import {Link, useLocation, useParams} from 'react-router-dom'
import { Heading, Text } from '@chakra-ui/react'

function About(){
  const location = useLocation();
  console.log(location)
  const searchParams = new URLSearchParams(location.search)
  const from = searchParams.get('from')
  console.log(from)

  return(
    <div>
      <Heading>About Us</Heading>
      {from && <Text>You came from {from}</Text>}
      <Link to='/'>Go Home</Link>
    </div>
  )
}

export default About;