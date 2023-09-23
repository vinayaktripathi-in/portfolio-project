// forgotPasswordSlice.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { forgotPasswordApi } from "@/api";
import {
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFailure,
} from "./forgotPasswordSlice";

interface ForgotPasswordData {
  email: string;
}

export const forgotPassword = createAsyncThunk(
  "forgotPassword",
  async (forgotPasswordData: ForgotPasswordData, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(forgotPasswordRequest());
    try {
      const response = await forgotPasswordApi(forgotPasswordData);
      dispatch(forgotPasswordSuccess());
      return response;
    } catch (error) {
      const errorMessage = (error as Error).message || "An error occurred.";
      dispatch(forgotPasswordFailure(errorMessage));
      throw error;
    }
  }
);
