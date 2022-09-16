import { Box, Button, Center, Flex, Heading, Input, Radio, RadioGroup, Stack } from "@chakra-ui/react"
import { NavBar } from "components/NavBar"
import { useState } from "react"
import { getSearch } from "services/spotify"

export const Search = ()=>{

  const [type, setType] = useState('artist')
  const [inputValue, setInputValue] = useState('')
  const [item, setItem] = useState([])

  const handleChange = ( { target : { value } }) => {
    setInputValue(value)
  }
  console.log(inputValue)

  const handleSearch = ()=>{
    console.log('click')
    getSearch(inputValue, type).then(console.log)
    let types = type.concat('s')
    console.log(types)
    getSearch(inputValue, type).then((info)=>  setItem(info.types.items))
  }

  return (
    <Box>
      <NavBar/>
      <Heading textAlign={'center'} py={10}>Search</Heading>
      <Flex  align={'center'} justify={'center'} gap={3}>
        <Input 
        onChange={handleChange}
        value={inputValue}
        w={'40%'}
        />
        <Button 
        bgColor="green.400"
        color="white"
        _hover={{ bgColor: "green.600", color: "white" }}
        onClick={handleSearch}
        >Search</Button>
      </Flex>
      <Center py={5}>
        <RadioGroup onChange={setType} value={type}>
          <Stack direction={'row'}>
            <Radio value={'artist'}> Artist </Radio>
            <Radio value={'album'}> Album </Radio>
            <Radio value={'track'}> Track </Radio>
          </Stack>
        </RadioGroup>
      </Center>
      <Flex>
        {/* {artists.map((artist)=>artist.name)} */}
      </Flex>
    </Box>
  )
}