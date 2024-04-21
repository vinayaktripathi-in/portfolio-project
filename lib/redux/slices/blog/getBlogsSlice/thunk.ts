import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBlogsApi } from "@/api";
import {
  getBlogsRequest,
  getBlogsSuccess,
  getBlogsFailure,
} from "./getBlogsSlice";

export const getBlogsUser = createAsyncThunk(
  "getBlogs",
  async (_, { rejectWithValue, dispatch }) => {
    // const token = localStorage.getItem("token");
    // if (token === null) {
    //   return rejectWithValue("Token not found in local storage");
    // }
    try {
      dispatch(getBlogsRequest()); // Pass 'true' to setLoading to indicate loading
      const response = await getBlogsApi();
      dispatch(getBlogsSuccess(response)); // Pass the response as payload
      return response;
    } catch (error: any) {
      dispatch(getBlogsFailure(error)); // Pass the error object itself
      return rejectWithValue(error);
    } finally {
      dispatch(getBlogsRequest()); // Pass 'false' to setLoading when loading is done
    }
  }
);
