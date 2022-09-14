import { Flex } from "@chakra-ui/react"

export const FlexView = ({data})=>{
  return <Flex minWidth={'max-content'} alignItems={'center'} gap={10} justifyContent={'center'} wrap={'wrap'}>
      {data}
    </Flex>
}