import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
  theme as baseTheme,
} from "@chakra-ui/react";

const customTheme = extendTheme(
  {
    colors: {
      brand: baseTheme.colors.orange,
    },
    components: {
      Alert: {
        defaultProps: {
          colorScheme: "orange",
        },
      },
    },
    fonts: {
      heading: "Monospace",
      body: "Monospace",
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
