import { createAsyncThunk } from "@reduxjs/toolkit";
import { verifyApi } from "@/api";
import { verifyRequest, verifySuccess, verifyFailure } from "./verifySlice";

interface verifyData {
  email: string;
  otp: string;
}

export const verifyUser = createAsyncThunk(
  "verify",
  async (verifyData: verifyData, thunkAPI) => {
    const { dispatch } = thunkAPI;
    dispatch(verifyRequest());
    try {
      const response = await verifyApi(verifyData);
      dispatch(verifySuccess());
      return response;
    } catch (error) {
      const errorMessage = (error as Error).message || "An error occurred.";
      dispatch(verifyFailure(errorMessage));
      throw error;
    }
  }
);
