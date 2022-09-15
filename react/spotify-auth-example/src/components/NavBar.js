import { Box, Flex, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const NavBar = ()=>{
  return (
    <Box bg='black'>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Link to='/homemenu'><Image src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Logo" h={12}/></Link>
      </Flex>
      
    </Box>
  )
}