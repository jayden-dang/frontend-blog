"use client";

import {ReactNode} from "react";
import {Provider} from "react-redux";
import {store} from "../hooks/store";

interface IReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider = (props: IReduxProviderProps) => {
  return (
    <>
      <Provider store={store}>{props.children}</Provider>
    </>
  );
};

export default ReduxProvider;
