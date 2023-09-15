import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBlogsApi } from "@/api";
import { getBlogsRequest, getBlogsSuccess, getBlogsFailure } from "./getBlogsSlice";

interface getBlogsData {
  email: string;
}

export const getBlogsUser = createAsyncThunk(
  "getBlogs",
  async (userData: getBlogsData, thunkAPI) => {
    try {
      console.log(userData, "thunk")
      thunkAPI.dispatch(getBlogsRequest());
      const response = await getBlogsApi(userData);
      thunkAPI.dispatch(getBlogsSuccess());
      console.log(response.data)
      return response.data;
    } catch (error) {
      const errorMessage = (error as Error).message || "An error occurred.";
      thunkAPI.dispatch(getBlogsFailure(errorMessage));
      throw error;
    }
  }
);
