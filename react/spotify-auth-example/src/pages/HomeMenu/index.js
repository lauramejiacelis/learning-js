import { Box } from "@chakra-ui/react"
import { NavBar } from "components/NavBar"
import { Card } from "components/Card"
import { FlexView } from "components/FlexView"
import { MENU } from "constants"

export const HomeMenu = ()=>{
  return <Box>
    <NavBar/>
    <FlexView data={MENU.map((info)=>(<Card borderRadius={'50%'} link={info.link} tittle={info.tittle} src={info.src}/>))}/>
  </Box>
}

