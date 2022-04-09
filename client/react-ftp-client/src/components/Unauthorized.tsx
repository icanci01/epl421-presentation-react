import * as React from "react";
import { Box } from "@chakra-ui/react";
import { Login } from "./views/Login";

export function Unauthorized() {
  return (
    <Box h="80vh" bg="blue.500">
      <Login />
    </Box>
  );
}