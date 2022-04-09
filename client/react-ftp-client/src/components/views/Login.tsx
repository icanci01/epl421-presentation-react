import * as React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Logo } from "../Logo";
import { useTranslation } from "react-i18next";
import { useToken } from "../../hooks/useToken";
import { useForm } from "react-hook-form";
import { Token } from "../../utils/authToken";
import { HiCheck } from "react-icons/hi";

function useLogin() {
  const { t } = useTranslation();
  return React.useCallback(
    (hostname: string, username: string, password: string) => {
      const data = new URLSearchParams();
      data.append("hostname", hostname);
      data.append("username", username);
      data.append("password", password);

      return fetch("/api/login", {
        method: "POST",
        body: data,
      })
        .then((fetchResult) => {
          if (!fetchResult.ok) {
            console.error("Error logging user", fetchResult);
            return Promise.reject(t("wrong_hostname"));
          } else return fetchResult.json();
        })
        .then((token: Token) => {
          return token;
        });
    },
    [t]
  );
}

export function Login() {
  const { t } = useTranslation();
  const [, setToken] = useToken();
  const [submissionError, setSubmissionError] = React.useState<string>();
  const login = useLogin();
  const { register, handleSubmit, formState } = useForm<{
    hostname: string;
    username: string;
    password: string;
  }>({
    resolver: yupResolver(
      yup.object().shape({
        hostname: yup.string().label(t("hostname")).required(),
        username: yup.string().label(t("username")).required(),
        password: yup.string().label(t("password")).required(),
      })
    ),
  });

  return (
    <Flex
      direction="column"
      justify="center"
      py={12}
      px={{ sm: 4, lg: 8 }}
      minH="100vh"
      bg="blue.200"
    >
      <Box
        mx={{ sm: "auto" }}
        w={{ sm: "full" }}
        maxW={{ sm: "md" }}
        bg="white"
        border={2}
        borderStyle="solid"
      >
        <Logo mt={6} mx="auto" w="auto" h="auto"/>
        <Heading
          mt={6}
          textAlign="center"
          fontSize="2xl"
          fontWeight="extrabold"
          color="black"
        >
          {t("sign_in_to_your_account")}
        </Heading>
        <Box
          mt={6}
          mx={{ sm: "auto" }}
          w={{ sm: "full" }}
          maxW={{ sm: "md" }}
          py={8}
          px={{ sm: 10, base: 4 }}
          border={1}
          borderStyle="solid"
          borderColor="gray.200"
        >
          <form
            onSubmit={handleSubmit((values) => {
              return login(values.hostname, values.username, values.password)
                .then(setToken)
                .catch((error) => {
                  setSubmissionError(
                    typeof error === "string"
                      ? error
                      : error?.message ?? "Error logging in"
                  );
                });
            })}
          >
            <Stack spacing={4}>
              <FormControl
                isInvalid={formState.errors.hostname !== undefined}
                isDisabled={formState.isSubmitting}
              >
                <FormLabel htmlFor="hostname">{t("hostname")}</FormLabel>
                <Input {...register("hostname")} />
                <FormErrorMessage>
                  {formState.errors.hostname?.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>
            <Stack spacing={4}>
              <FormControl
                isInvalid={formState.errors.username !== undefined}
                isDisabled={formState.isSubmitting}
              >
                <FormLabel htmlFor="username">{t("username")}</FormLabel>
                <Input {...register("username")} autoComplete="username" />
                <FormErrorMessage>
                  {formState.errors.username?.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>
            <Stack spacing={4}>
              <FormControl
                isInvalid={formState.errors.password !== undefined}
                isDisabled={formState.isSubmitting}
              >
                <FormLabel htmlFor="password">{t("password")}</FormLabel>
                <Input {...register("password")} type="password" />
                <FormErrorMessage>
                  {formState.errors.password?.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>
            {submissionError && (
              <Stack spacing={4}>
                <Text color="red.500">{submissionError}</Text>
              </Stack>
            )}
            <Stack spacing={4} marginTop={5}>
              <Button
                colorScheme="blue"
                isLoading={formState.isSubmitting}
                type="submit"
              >
                <HStack spacing={2} align="center">
                  <HiCheck />
                  <Text fontSize="lg">{t("submit")}</Text>
                </HStack>
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}
