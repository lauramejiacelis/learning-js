import { Link } from "react-router-dom"
import { Box, Center, Flex, Heading, Image } from "@chakra-ui/react"

export const Card = ({borderRadius,link,tittle, src})=>{
  return(
    <Link to={link}>
      <Center py={6}>
        <Box >
          <Flex bg={'#EEEEEE'} h={200} w={200} borderRadius={borderRadius} align={'center'} justify={'center'} boxShadow={'2xl'} overflow={'hidden'}>
            <Image src={src} alt="profile" h={150}></Image>
          </Flex>
          
          <Box textAlign={'center'}>
            <Heading fontSize={'2xl'} fontWeight={500} pt={10}>{tittle}</Heading>
          </Box>
        </Box>
      </Center>
    </Link>
  )
}