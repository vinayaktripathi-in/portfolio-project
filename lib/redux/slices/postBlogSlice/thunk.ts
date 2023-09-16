import { createAsyncThunk } from "@reduxjs/toolkit";
import { postBlogApi } from "@/api";
import { postBlogRequest, postBlogSuccess, postBlogFailure } from "./postBlogSlice";

interface postBlogData {
  title: string;
  content: string;
  coverImage: File | null;
}

// Add a token parameter to postBlogUser
export const postBlogUser = createAsyncThunk(
  "postBlog",
  async ({ userData, token }: { userData: postBlogData; token: string }, thunkAPI) => {
    try {
      console.log(userData, "thunk")
      thunkAPI.dispatch(postBlogRequest());
      const response = await postBlogApi(userData, token); // Pass the token to postBlogApi
      thunkAPI.dispatch(postBlogSuccess());
      return response.data;
    } catch (error) {
      const errorMessage = (error as Error).message || "An error occurred.";
      thunkAPI.dispatch(postBlogFailure(errorMessage));
      throw error;
    }
  }
);
