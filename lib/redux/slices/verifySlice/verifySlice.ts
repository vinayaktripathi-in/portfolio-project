import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface verifyState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

const initialState: verifyState = {
  isLoading: false,
  isSuccess: false,
  error: null,
};

export const verifySlice = createSlice({
  name: "verify",
  initialState,
  reducers: {
    verifyRequest: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.error = null;
    },
    verifySuccess: (state) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.error = null;
    },
    verifyFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
  },
});

export const { verifyRequest, verifySuccess, verifyFailure } = verifySlice.actions;
export default verifySlice.reducer;