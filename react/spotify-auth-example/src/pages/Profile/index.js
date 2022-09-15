import { Box, Heading, Text } from "@chakra-ui/react"
import { NavBar } from "components/NavBar"
import { useEffect, useState } from "react"
import { Card } from "components/Card"
import { getUser } from "services/spotify"

export const Profile = ()=>{
  const [userProfile, setUserProfile] = useState()

  useEffect(()=>{
    getUser().then((user)=>setUserProfile(user))
  },[])
  console.log(userProfile)

  return (
    <Box>
      <NavBar/>
      <Heading textAlign={'center'} pt={10}>Profile</Heading>
      {userProfile ? <Box>
        <Card borderRadius='50%' link={''} tittle={userProfile.display_name}  src={userProfile.images[0] ? userProfile.images[0].url : "error"}/>
        <Text textAlign={'center'}>User ID: {userProfile.id}  </Text>
      </Box> : "error"}
      
      
      

    </Box>
  )
}