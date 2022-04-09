import * as React from "react";
import {
  Alert,
  Box,
  ChakraProvider,
  ColorModeScript,
  extendTheme,
} from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { AbsoluteCenter } from "./AbsoluteCenter";
import { IconContext } from "react-icons";
import { ErrorBoundary } from "react-error-boundary";
import { I18nextProvider } from "react-i18next";
import i18n from "../utils/i18n";
import { Spinner } from "./Spinner";
import { Main } from "./Main";

const breakpoints = createBreakpoints({
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
});

const theme = extendTheme({ breakpoints });

function ErrorFallback() {
  return (
    <Box position="fixed" top={0} left={0} right={0} bottom={0}>
      <AbsoluteCenter>
        <Alert status="error">An error has occurred</Alert>
      </AbsoluteCenter>
    </Box>
  );
}

function App(): JSX.Element {
  return (
    <IconContext.Provider value={{ size: "24px" }}>
      <ChakraProvider theme={theme}>
        <ColorModeScript />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <I18nextProvider i18n={i18n}>
            <Box minW="100vw" minH="100vh">
              <React.Suspense
                fallback={
                  <AbsoluteCenter>
                    <Spinner description="Loading language.." />
                  </AbsoluteCenter>
                }
              >
                <Main />
              </React.Suspense>
            </Box>
          </I18nextProvider>
        </ErrorBoundary>
      </ChakraProvider>
    </IconContext.Provider>
  );
}

export default App;