import { Heading, Text } from '@chakra-ui/react';
import {useParams} from 'react-router-dom'

const BLOGS = {
  1: {
    title: "La insoportable levedad del ser",
    description: "lorem ipsum"
  },
  2: {
    title: "Como agua para chocolate",
    description: "lorem ipsum"
  }
}

function Blog() {
  const {id} = useParams();
  const blog = BLOGS[id];

  if (!blog) {
    return <Heading>The blog you're searching doesn't exist</Heading>
  }
  return(
    <div>
      <Heading size='md' bg='lightcoral'>Practicando useParams</Heading>
      <Heading>{blog.title}</Heading>
      <Text>{blog.description}</Text>
    </div>
  )
}

export default Blog;