import { createAsyncThunk } from "@reduxjs/toolkit";
import { signUpApi } from "@/api";
import { signUpRequest, signUpSuccess, signUpFailure } from "./signUpSlice";
import { startLoading, stopLoading } from "../loadingSlice";

interface UserData {
  email: string;
  password: string;
}

export const signUpUser = createAsyncThunk(
  "signup",
  async (userData: UserData, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(startLoading());
    try {
      thunkAPI.dispatch(signUpRequest());
      const response = await signUpApi(userData);
      thunkAPI.dispatch(signUpSuccess());
      dispatch(stopLoading());
      return response.data;
    } catch (error) {
      const errorMessage = (error as Error).message || "An error occurred.";
      thunkAPI.dispatch(signUpFailure(errorMessage));
      dispatch(stopLoading());
      throw error;
    }
  }
);