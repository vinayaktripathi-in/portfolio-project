import { createSlice } from "@reduxjs/toolkit";

interface likeBlogState {
  loading: boolean;
  success: boolean;
  error: string | null;
  likesData:{
    message: string | null;
    likes: number | null;
  }
}

const initialState: likeBlogState = {
  loading: false,
  error: null,
  success: false,
  likesData:{
    message: null,
    likes: null
  }
};

export const likeBlogSlice = createSlice({
  name: "likeBlog",
  initialState,
  reducers: {
    likeBlogRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    likeBlogSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.likesData = action.payload;
    },
    likeBlogFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    likeBlogResetState: (state) => {
      state.success = false;
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
