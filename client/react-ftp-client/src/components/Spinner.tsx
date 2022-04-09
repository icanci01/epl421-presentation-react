import * as React from "react";
import { Spinner as ChakraSpinner, Box, Text } from "@chakra-ui/react";

export function Spinner({
  description,
  size = "lg",
}: {
  description: string;
  size?: string;
}) {
  return (
    <Box textAlign="center">
      <ChakraSpinner color="blue.500" size={size} />
      {description !== "" && <Text fontSize="sm">{description}</Text>}
    </Box>
  );
}