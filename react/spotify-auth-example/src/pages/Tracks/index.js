import { Box, Heading, Text, Table, TableContainer, Tbody, Tr, VStack } from "@chakra-ui/react"
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
        getTracks(playlist_id).then(({items})=>setTracks(items))
    }, [])

    return(
        <Box>
            <NavBar/>
            <Heading textAlign={'center'} py={10}>Tracks</Heading>
            <VStack>
                <TableContainer>
                    <Table size={'md'} variant='simple'>
                        <Tbody>
                            {tracks.map(({track})=><Tr border='1px' borderColor='gray.200'> <Text fontSize='lg'>{track.name}</Text></Tr>)}
                        </Tbody>
                    </Table>
                </TableContainer>
            </VStack>
        </Box>
    )
}