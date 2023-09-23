import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBlogApi } from "@/api";
import {
  getBlogRequest,
  getBlogSuccess,
  getBlogFailure,
  // getBlogResetState
} from "./getBlogSlice";

interface getBlogData {
  id: string;
}

export const getBlogUser = createAsyncThunk(
  "getBlog",
  async (id: string, { rejectWithValue, dispatch }) => {
    const token = localStorage.getItem("token");
    if (token === null) {
      return rejectWithValue("Token not found in local storage");
    }
    try {
      dispatch(getBlogRequest()); // Pass 'true' to setLoading to indicate loading
      const response = await getBlogApi(token, id);
      console.log(response);
      dispatch(getBlogSuccess(response)); // Pass the response as payload
      return response;
    } catch (error: any) {
      dispatch(getBlogFailure(error)); // Pass the error object itself
      return rejectWithValue(error);
    } finally {
      // dispatch(getBlogResetState()); // Pass 'false' to setLoading when loading is done
    }
  }
);
