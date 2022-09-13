import { Box, Flex} from "@chakra-ui/react"
import { NavBar } from "components/NavBar"
import { Card } from "components/Card"
import { MENU } from "constants"

export const HomeMenu = ()=>{
  return <Box>
    <NavBar/>
    <Flex minWidth={'max-content'} alignItems={'center'} gap={10} justifyContent={'center'} flexWrap={'wrap'}>
      {MENU.map((info)=>(<Card link={info.link} tittle={info.tittle} src={info.src}/>))}
    </Flex>
  </Box>
}

