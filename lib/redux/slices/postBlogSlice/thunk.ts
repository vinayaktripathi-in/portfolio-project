import { createAsyncThunk } from "@reduxjs/toolkit";
import { postBlogApi } from "@/api";
import {
  postBlogRequest,
  postBlogSuccess,
  postBlogFailure,
} from "./postBlogSlice";

interface postBlogData {
  // title: string;
  // content: string;
  // category: string;
  // coverImage: File | null;
}

type FormData = {
  title: string;
  content: string;
  category: string;
  coverImage?: File;
};

// Define an async thunk using createAsyncThunk
export const postBlogUser = createAsyncThunk(
  "postBlog", 
  async (
    { userData }: { userData: postBlogData },
    thunkAPI
  ) => {
    const token = localStorage.getItem("token");
    if (token === null) {
      throw new Error("Token not found in local storage");
    }
    try {
      thunkAPI.dispatch(postBlogRequest());
      const response = await postBlogApi(userData, token);
      thunkAPI.dispatch(postBlogSuccess());
      return response.data;
    } catch (error) {
      const errorMessage = (error as Error).message || "An error occurred.";
      thunkAPI.dispatch(postBlogFailure(errorMessage));
      throw error;
    }
  }
);
