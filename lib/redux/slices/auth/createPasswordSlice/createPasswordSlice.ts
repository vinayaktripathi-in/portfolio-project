import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface createPasswordState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: createPasswordState = {
  loading: false,
  success: false,
  error: null,
};

export const createPasswordSlice = createSlice({
  name: "createPassword",
  initialState,
  reducers: {
    createPasswordRequest: (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },
    createPasswordSuccess: (state) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    createPasswordFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
  },
});

export const { createPasswordRequest, createPasswordSuccess, createPasswordFailure } = createPasswordSlice.actions;
export default createPasswordSlice.reducer;