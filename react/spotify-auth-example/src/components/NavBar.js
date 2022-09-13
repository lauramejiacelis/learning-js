import { Box, Flex, Image } from "@chakra-ui/react"

export const NavBar = ()=>{
  return (
    <Box bg='black'>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box><Image src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Logo" h={12}/></Box>
      </Flex>
      
    </Box>
  )
}