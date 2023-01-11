"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Contract } from "../near-interface";
import { Wallet } from "../near-wallet";

export const Web3Context = createContext({
  wallet: null,
  contract: null,
  isSignedIn: null,
});

const CONTRACT_ID = "dev-1672666255549-42728942536096";

function Web3Provider({ children }) {
  const [web3, setWeb3] = useState({
    wallet: null,
    contract: null,
    isSignedIn: null,
  });

  useEffect(() => {
    const loadProvider = async () => {
      const wallet = await new Wallet({
        createAccessKeyFor: CONTRACT_ID,
        network: "testnet",
      });

      const contract = await new Contract({
        contractId: CONTRACT_ID,
        walletToUse: wallet,
      });

      const isSignedIn = await wallet.startUp();
      setWeb3({
        wallet,
        contract,
        isSignedIn,
      });
    };

    loadProvider();
  }, []);

  return <Web3Context.Provider value={web3}>{children}</Web3Context.Provider>;
}

export function useWeb3() {
  return useContext(Web3Context);
}

export default Web3Provider;
