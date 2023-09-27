import { createSlice } from "@reduxjs/toolkit";

interface commentBlogState {
  loading: boolean;
  success: boolean;
  error: string | null;
  commentData: {
    text: string | null;
  };
}

const initialState: commentBlogState = {
  loading: false,
  error: null,
  success: false,
  commentData: {
    text: null,
  },
};

export const commentBlogSlice = createSlice({
  name: "commentBlog",
  initialState,
  reducers: {
    commentBlogRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    commentBlogSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    commentBlogFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    commentBlogResetState: (state) => {
      state.success = false;
    },
  },
});

export const {
  commentBlogRequest,
  commentBlogSuccess,
  commentBlogFailure,
  commentBlogResetState,
} = commentBlogSlice.actions;
export default commentBlogSlice.reducer;
