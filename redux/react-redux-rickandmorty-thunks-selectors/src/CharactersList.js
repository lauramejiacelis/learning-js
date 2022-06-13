import { PureComponent } from "react";
import { Box, Flex, Heading, Image } from "@chakra-ui/react"
import { getCharactersSelector } from "./redux/characters";
import { connect } from "react-redux";

class CharacterList extends PureComponent{
    render(){
        const {characters} = this.props;
        return(
            <Flex mt={5} gap={5} wrap='wrap' align='center' justify='center'>{characters.map((character)=>{
                return(
                    <Flex gap={4} bg='grey' borderRadius='md' overflow='hidden'>
                        <Image src={character.image} alt='character'/>
                        <Box w={300} mt={2}>
                            <Heading as='h2' size='xl' fontSize='2em'>{character.name} </Heading>
                            {character.status} 
                            {character.species}
                            <Box>
                                <Heading as='h4' size='md'>Last known location:
                                </Heading> {character.locationName}
                            </Box>
                            <Box>
                                <Heading as='h4' size='md'>First seen in: 
                                </Heading>{character.originName}</Box>
                        </Box>
                    </Flex>
                )
            })}
            </Flex>
        )
    }
}

const mapStateToProps=(state)=>({
    characters: getCharactersSelector(state)
})

const mapDispatchToProps={}

export default connect(mapStateToProps, mapDispatchToProps) (CharacterList);