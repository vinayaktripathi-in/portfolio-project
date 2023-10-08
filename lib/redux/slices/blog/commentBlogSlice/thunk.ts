import { createAsyncThunk } from "@reduxjs/toolkit";
import { commentBlogApi } from "@/api";
import {
  commentBlogRequest,
  commentBlogSuccess,
  commentBlogFailure,
} from "./commentBlogSlice";

interface commentBlogData {
  blogId: string;
  text: string;
}

type FormData = {
  text: string;
};

// Define an async thunk using createAsyncThunk
export const commentBlogUser = createAsyncThunk(
  "commentBlog",
  async ({ blogId, text }: { blogId: string; text: string }, thunkAPI) => {
    const token = localStorage.getItem("token");
    if (token === null) {
      throw new Error("Token not found in local storage");
    }
    try {
      thunkAPI.dispatch(commentBlogRequest());
      const response = await commentBlogApi(token, blogId, text);
      thunkAPI.dispatch(commentBlogSuccess());
      return response.data;
    } catch (error) {
      const errorMessage = (error as Error).message || "An error occurred.";
      thunkAPI.dispatch(commentBlogFailure(errorMessage));
      throw error;
    }
  }
);
