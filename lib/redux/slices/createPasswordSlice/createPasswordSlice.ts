import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface createPasswordState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  token: string | null;
}

const initialState: createPasswordState = {
  isLoading: false,
  isSuccess: false,
  error: null,
  token: null,
};

export const createPasswordSlice = createSlice({
  name: "createPassword",
  initialState,
  reducers: {
    createPasswordRequest: (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.error = null;
    },
    createPasswordSuccess: (state) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.error = null;
    },
    createPasswordFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
  },
});

export const { createPasswordRequest, createPasswordSuccess, createPasswordFailure } = createPasswordSlice.actions;
export default createPasswordSlice.reducer;