import { createSlice } from "@reduxjs/toolkit";

interface postBlogState {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

const initialState: postBlogState = {
  isLoading: false,
  error: null,
  isSuccess: false,
};

export const postBlogSlice = createSlice({
  name: "postBlog",
  initialState,
  reducers: {
    postBlogRequest: (state) => {
      state.isLoading = true;
      state.error = null;
      state.isSuccess = false;
    },
    postBlogSuccess: (state) => {
      state.isLoading = false;
      state.isSuccess = true;
    },
    postBlogFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    postBlogResetState: (state) => {
      state.isSuccess = false;
    },
  },
});

export const {
  postBlogRequest,
  postBlogSuccess,
  postBlogFailure,
  postBlogResetState,
} = postBlogSlice.actions;
export default postBlogSlice.reducer;
