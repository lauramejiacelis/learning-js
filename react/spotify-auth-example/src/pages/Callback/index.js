import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getToken } from "services/spotify";
import { Center, Flex, Spinner } from "@chakra-ui/react";

export default () => {
  const [params] = useSearchParams();
  console.log(params)

  const navigate = useNavigate();

  useEffect(() => {
    const code = params.get("code");

    getToken(code)
      .then(({ ok }) => {
        if (ok) {
          return navigate("/homemenu");
        }

        //TODO: implement error state
        console.error("Something went wrong");
      })
      .catch(() => {
        //TODO: implement error state
      });
  }, [params]);

  //TODO: implement spinner
  return <Flex w={'100%'} h={'100vh'} align={'center'} justify={'center'} direction={'column'}>
    <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='green.400'
      size='xl'
    />
  </Flex>
  
};
