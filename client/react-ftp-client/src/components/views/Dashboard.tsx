// Function that will be called when the component is mounted
// Also serves as the Home page for the application
import * as React from "react";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { NavbarComponent } from "../NavbarComponent";
import { Spinner } from "../Spinner";

export function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Flex direction="column" justify="top" bg="blue.100">
        <NavbarComponent />
      </Flex>
      <Box bg={useColorModeValue("blue.100", "gray.900")}  py={20}>
      <Spinner description={t("loading_content")}/>
      </Box>
    </>
  );
}
