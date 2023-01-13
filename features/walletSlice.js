import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignedIn: false,
  contract_id: null,
  wallet: null,
};

const walletSlice = createSlice({
  name: "walletSlice",
  initialState,
  reducers: {
    getSignInWallet: (state, action) => {
      const newState = { ...action.payload };

      return {
        ...newState,
      };
    },
  },
});

export const { getSignInWallet } = walletSlice.actions;

export default walletSlice.reducer;
