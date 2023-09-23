import { createAsyncThunk } from "@reduxjs/toolkit";
import { likedByBlogApi } from "@/api";
import {
  likedByBlogRequest,
  likedByBlogSuccess,
  likedByBlogFailure,
  // likedByBlogResetState
} from "./likedByBlogSlice";

interface likedByBlogData {
  id: string;
}

export const likedByBlogUser = createAsyncThunk(
  "likedByBlog",
  async (id: string, { rejectWithValue, dispatch }) => {
    const token = localStorage.getItem("token");
    if (token === null) {
      return rejectWithValue("Token not found in local storage");
    }
    try {
      dispatch(likedByBlogRequest()); // Pass 'true' to setLoading to indicate loading
      const response = await likedByBlogApi(token, id);
      console.log(response);
      dispatch(likedByBlogSuccess(response)); // Pass the response as payload
      return response;
    } catch (error: any) {
      dispatch(likedByBlogFailure(error)); // Pass the error object itself
      return rejectWithValue(error);
    } finally {
      // dispatch(likedByBlogResetState()); // Pass 'false' to setLoading when loading is done
    }
  }
);
