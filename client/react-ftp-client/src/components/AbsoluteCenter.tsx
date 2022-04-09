import * as React from "react";
import { Box, Flex } from "@chakra-ui/react";

export function AbsoluteCenter({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Box
      position="absolute"
      left="50%"
      top="50%"
      transform="translate(-50%, -50%)"
    >
      <Flex h="full" w="full" justify="center" align="center">
        {children}
      </Flex>
    </Box>
  );
}