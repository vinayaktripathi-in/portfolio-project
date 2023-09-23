import { createSlice } from "@reduxjs/toolkit";

interface likeBlogState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

const initialState: likeBlogState = {
  isLoading: false,
  error: null,
  isSuccess: false,
};

export const likeBlogSlice = createSlice({
  name: "likeBlog",
  initialState,
  reducers: {
    likeBlogRequest: (state) => {
      state.isLoading = true;
      state.error = null;
      state.isSuccess = false;
    },
    likeBlogSuccess: (state) => {
      state.isLoading = false;
      state.isSuccess = true;
    },
    likeBlogFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    likeBlogResetState: (state) => {
      state.isSuccess = false;
    },
  },
});

export const {
  likeBlogRequest,
  likeBlogSuccess,
  likeBlogFailure,
  likeBlogResetState,
} = likeBlogSlice.actions;
export default likeBlogSlice.reducer;
