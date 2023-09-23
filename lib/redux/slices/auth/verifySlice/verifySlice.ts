import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface verifyState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: verifyState = {
  loading: false,
  success: false,
  error: null,
};

export const verifySlice = createSlice({
  name: "verify",
  initialState,
  reducers: {
    verifyRequest: (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },
    verifySuccess: (state) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    verifyFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
  },
});

export const { verifyRequest, verifySuccess, verifyFailure } = verifySlice.actions;
export default verifySlice.reducer;