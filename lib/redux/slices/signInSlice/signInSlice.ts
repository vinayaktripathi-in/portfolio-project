import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SigninState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  token: string | null;
}

const initialState: SigninState = {
  isLoading: false,
  isSuccess: false,
  error: null,
  token: null,
};

export const signInSlice = createSlice({
  name: "signin",
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
  },
});

export const { signinRequest, signinSuccess, signinFailure, setToken } = signInSlice.actions;

export default signInSlice.reducer;
