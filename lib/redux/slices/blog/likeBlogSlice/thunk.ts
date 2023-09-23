import { createAsyncThunk } from "@reduxjs/toolkit";
import { likeBlogApi } from "@/api";
import {
  likeBlogRequest,
  likeBlogSuccess,
  likeBlogFailure,
} from "./likeBlogSlice";

interface likeBlogData {
  id: string;
}

export const likeBlogUser = createAsyncThunk(
  "likeBlog",
  async (id: string, { rejectWithValue, dispatch }) => {
    const token = localStorage.getItem("token");
    if (token === null) {
      return rejectWithValue("Token not found in local storage");
    }
    try {
      dispatch(likeBlogRequest()); // Pass 'true' to setLoading to indicate loading
      const response = await likeBlogApi(token, id);
      console.log(response);
      dispatch(likeBlogSuccess(response)); // Pass the response as payload
      return response;
    } catch (error: any) {
      dispatch(likeBlogFailure(error)); // Pass the error object itself
      return rejectWithValue(error);
    } finally {
      // dispatch(likeBlogResetState()); // Pass 'false' to setLoading when loading is done
    }
  }
);
