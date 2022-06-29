import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import { CoinGecko } from "./CoinGecko";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ChakraProvider>
    <React.StrictMode>
      <CoinGecko />
    </React.StrictMode>
  </ChakraProvider>
);
