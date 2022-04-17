// Function that will be called when the component is mounted
// Also serves as the Home page for the application
import * as React from "react";
import axios from "axios";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { NavbarComponent } from "../NavbarComponent";
import { Spinner } from "../Spinner";
import { useEffect, useState } from "react";
import Table from "./../Table";

export function Home() {
  const { t } = useTranslation();
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "." }),
    };
    console.log("ddd");
    fetch("/list", requestOptions).then((response) =>
      response
        .json()
        .then((data) => ({
          data: data,
          status: response.status,
        }))
        .then((res) => {
          setDataTable(res.data);
        })
    );
  }, []);

  const column = [
    { heading: "File Name", value: "name" },
    { heading: "File Type", value: "type" },
  ];
  return (
    <>
      <Flex direction="column" justify="top" bg="blue.100">
        <NavbarComponent />
      </Flex>

      <Box bg={useColorModeValue("blue.200", "gray.900")} px={4}>
        <Text>Welcome to the {t("app_name")}</Text>
      </Box>
      <Spinner description={"Loading"} />
      <Box>
        <h1>Dynamic Table</h1>
        <Table data={dataTable} column={column} />
      </Box>
    </>
  );
}
