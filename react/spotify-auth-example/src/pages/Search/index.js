import { Box, Button, Center, Container, Flex, Heading, Input, Radio, RadioGroup, Stack, VStack } from "@chakra-ui/react"
import { NavBar } from "components/NavBar"
import { useEffect, useState } from "react"
import { getSearch } from "services/spotify"

export const Search = ()=>{

  const [value, setValue] = useState('artist')

  const onSearch = ()=>{
    console.log('click')
    getSearch().then(console.log)
  }
    


  return (
    <Box>
      <NavBar/>
      <Heading textAlign={'center'} py={10}>Search</Heading>
      <Flex  align={'center'} justify={'center'} gap={3}>
        <Input w={'40%'}/>
        <Button 
        bgColor="green.400"
        color="white"
        _hover={{ bgColor: "green.600", color: "white" }}
        onClick={onSearch}
        >Search</Button>
      </Flex>
      <Center py={5}>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction={'row'}>
            <Radio value={'album'}> Album </Radio>
            <Radio value={'artist'}> Artist </Radio>
          </Stack>
        </RadioGroup>
      </Center>
    </Box>
  )
}