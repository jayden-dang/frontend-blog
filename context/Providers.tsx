"use client";

import {ThemeProvider} from "next-themes";
import {PropsWithChildren} from "react";
import ReduxProvider from "./ReduxProvider";

const Providers = ({children}: PropsWithChildren) => {
  return (
    <>
      <ReduxProvider>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </ReduxProvider>
    </>
  );
};

export default Providers;
