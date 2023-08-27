import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInApi } from "@/api";
import { signinRequest, signinSuccess, signinFailure } from "./signInSlice";

interface SigninData {
  email: string;
  password: string;
}

export const signinUser = createAsyncThunk(
  "signin",
  async (signinData: SigninData, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(signinRequest());
    try {
      const response = await signInApi(signinData);
      dispatch(signinSuccess());
      return response.data;
    } catch (error) {
      const errorMessage = (error as Error).message || "An error occurred.";
      dispatch(signinFailure(errorMessage));
      throw error;
    }
  }
);