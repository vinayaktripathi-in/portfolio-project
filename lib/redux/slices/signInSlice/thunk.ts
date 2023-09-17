import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInApi } from "@/api";
import {
  signinRequest,
  signinSuccess,
  signinFailure,
  setToken,
} from "./signInSlice";

interface SigninData {
  email: string;
  password: string;
}

export const signInUser = createAsyncThunk(
  "signin",
  async (signInData: SigninData, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(signinRequest());
    try {
      const response = await signInApi(signInData);
      dispatch(signinSuccess());
      dispatch(setToken(response.token));
      return response;
    } catch (error) {
      const errorMessage = (error as Error).message || "An error occurred.";
      dispatch(signinFailure(errorMessage));
      throw error;
    }
  }
);
