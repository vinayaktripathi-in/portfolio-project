import { createAsyncThunk } from "@reduxjs/toolkit";
import { postBlogApi } from "@/api";
import { postBlogRequest, postBlogSuccess, postBlogFailure } from "./postBlogSlice";

interface postBlogData {
  title: string;
  content: string;
  email: string;
  coverImage: File | null;
}

export const postBlogUser = createAsyncThunk(
  "postBlog",
  async (userData: postBlogData, thunkAPI) => {
    try {
      console.log(userData, "thunk")
      thunkAPI.dispatch(postBlogRequest());
      const response = await postBlogApi(userData);
      thunkAPI.dispatch(postBlogSuccess());
      return response.data;
    } catch (error) {
      const errorMessage = (error as Error).message || "An error occurred.";
      thunkAPI.dispatch(postBlogFailure(errorMessage));
      throw error;
    }
  }
);
