import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface signInState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  token: string | null;
}

const initialState: signInState = {
  isLoading: false,
  isSuccess: false,
  error: null,
  token: null,
};

export const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    signinRequest: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.error = null;
    },
    signinSuccess: (state) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.error = null;
    },
    signinFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = null;
    },
  },
});

export const { signinRequest, signinSuccess, signinFailure, setToken, removeToken } = signInSlice.actions;

export default signInSlice.reducer;
