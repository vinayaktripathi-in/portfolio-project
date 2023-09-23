// createPasswordSlice.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createPasswordApi } from "@/api";
import {
  createPasswordRequest,
  createPasswordSuccess,
  createPasswordFailure,
} from "./createPasswordSlice";

interface createPasswordData {
  email: string;
  password: string;
}

export const createPassword = createAsyncThunk(
  "createPassword",
  async (createPasswordData: createPasswordData, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(createPasswordRequest());
    try {
      const response = await createPasswordApi(createPasswordData);
      dispatch(createPasswordSuccess());
      return response;
    } catch (error) {
      const errorMessage = (error as Error).message || "An error occurred.";
      dispatch(createPasswordFailure(errorMessage));
      throw error;
    }
  }
);
