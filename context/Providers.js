"use client";

import { ThemeProvider } from "next-themes";
import ReduxProvider from "./ReduxProvider";
import Web3Provider from "./Web3Provider";

const Providers = ({ children }) => {
  return (
    <>
      <ThemeProvider attribute="class">
        <ReduxProvider>
          <Web3Provider>{children}</Web3Provider>
        </ReduxProvider>
      </ThemeProvider>
    </>
  );
};

export default Providers;
