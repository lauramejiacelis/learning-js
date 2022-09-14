import { Box, Heading, List, ListItem } from "@chakra-ui/react"
import { NavBar } from "components/NavBar"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getTracks } from "services/spotify"
import { Card } from "components/Card"
import { FlexView } from "components/FlexView"

export const Tracks = ()=>{
    const {playlist_id} = useParams()
    console.log(playlist_id)

    const [tracks, setTracks] = useState([])

    useEffect(()=>{
        console.log("I'm working")
        getTracks(playlist_id).then(console.log)
        getTracks(playlist_id).then(({items})=>setTracks(items))
    }, [])

    return(
        <Box>
            <NavBar/>
            <Heading textAlign={'center'} pt={10}>Tracks</Heading>
            <List>
                {tracks.map(({track})=><ListItem>{track.name}</ListItem>)}
            </List>
        </Box>
    )
}