import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SigninState {
  loading: boolean;
  error: string | null;
}

const initialState: SigninState = {
  loading: false,
  error: null,
};

export const signInSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    signinRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    signinSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    signinFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { signinRequest, signinSuccess, signinFailure } = signInSlice.actions;

export default signInSlice.reducer;
