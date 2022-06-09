import React from "react";
import { Box } from "@chakra-ui/react";

const Card = ({ title }) => {
  return (
    <Box borderWidth="1px" p={3} borderRadius={3} minW="150px">
      {title}
    </Box>
  );
};

export default Card;
