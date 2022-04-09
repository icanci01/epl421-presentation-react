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

      <Box bg={useColorModeValue("blue.200", "gray.900")} px={4}>
        <Text>Welcome to the {t("app_name")}</Text>
      </Box>
      <Spinner description={"Loading"} />
    </>
  );
}
