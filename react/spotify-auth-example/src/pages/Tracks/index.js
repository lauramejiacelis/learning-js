import { Box, Heading } from "@chakra-ui/react"
import { NavBar } from "components/NavBar"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getTracks } from "services/spotify"

export const Tracks = ()=>{
    const {playlist_id} = useParams()
    console.log(playlist_id)

    const [tracks, setTracks] = useState([])

    useEffect(()=>{
        console.log("I'm working")
        getTracks(playlist_id).then(console.log)
    }, [])

    return(
        <Box>
            <NavBar/>
            <Heading>Tracks</Heading>

        </Box>
    )
}