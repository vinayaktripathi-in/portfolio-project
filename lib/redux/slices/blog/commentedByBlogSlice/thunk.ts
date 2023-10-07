import { createAsyncThunk } from "@reduxjs/toolkit";
import { commentedByBlogApi } from "@/api";
import {
  commentedByBlogRequest,
  commentedByBlogSuccess,
  commentedByBlogFailure,
  // commentedByBlogResetState
} from "./commentedByBlogSlice";

interface commentedByBlogData {
  id: string;
}

export const commentedByBlogUser = createAsyncThunk(
  "commentedByBlog",
  async (id: string, { rejectWithValue, dispatch }) => {
    const token = localStorage.getItem("token");
    if (token === null) {
      return rejectWithValue("Token not found in local storage");
    }
    try {
      dispatch(commentedByBlogRequest()); // Pass 'true' to setLoading to indicate loading
      const response = await commentedByBlogApi(token, id);
      console.log(response);
      dispatch(commentedByBlogSuccess(response)); // Pass the response as payload
      return response;
    } catch (error: any) {
      dispatch(commentedByBlogFailure(error)); // Pass the error object itself
      return rejectWithValue(error);
    } finally {
      // dispatch(commentedByBlogResetState()); // Pass 'false' to setLoading when loading is done
    }
  }
);
