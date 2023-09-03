import { createSlice } from '@reduxjs/toolkit';

interface signUpState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

const initialState: signUpState = {
  isLoading: false,
  error: null,
  isSuccess: false,
};

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    signUpRequest: (state) => {
      state.isLoading = true;
      state.error = null;
      state.isSuccess = false; 
    },
    signUpSuccess: (state) => {
      state.isLoading = false;
      state.isSuccess = true;
    },
    signUpFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    resetSignUp: (state) => {
      state.isLoading = false;
      state.error = null;
      state.isSuccess = false;
    },
  },
});

export const { signUpRequest, signUpSuccess, signUpFailure, resetSignUp } = signUpSlice.actions;
export default signUpSlice.reducer;
