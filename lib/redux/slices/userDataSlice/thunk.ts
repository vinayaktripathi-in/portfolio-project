// userThunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserDataApi } from "@/api";
import { setUser, setLoading, setError } from "./userDataSlice";

export const fetchUserData = createAsyncThunk(
  "fetchUserData",
  async (_, { rejectWithValue, dispatch }) => {
    const token = localStorage.getItem("token");
    if (token === null) {
      return rejectWithValue("Token not found in local storage");
    }
    try {
      dispatch(setLoading(true)); // Pass 'true' to setLoading to indicate loading
      const response = await getUserDataApi(token);
      dispatch(setUser(response));
      return response;
    } catch (error: any) {
      dispatch(setError(error.response.data));
      return rejectWithValue(error.response.data);
    } finally {
      dispatch(setLoading(false)); // Pass 'false' to setLoading when loading is done
    }
  }
);
