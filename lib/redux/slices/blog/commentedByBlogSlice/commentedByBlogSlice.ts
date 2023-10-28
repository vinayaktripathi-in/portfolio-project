import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Comment {
  author: string;
  text: string;
}

interface UserDataState {
  commentedby: Comment[] | null | any; // Change the type based on the actual data type expected
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: UserDataState = {
  commentedby: null,
  loading: false,
  success: false,
  error: null,
};

export const commentedByBlogSlice = createSlice({
  name: "commentedByBlog",
  initialState,
  reducers: {
    commentedByBlogRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    commentedByBlogSuccess: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.success = true;
      state.commentedby = action.payload;
    },
    commentedByBlogFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    commentedByBlogResetState: (state) => {
      state.success = false;
    },
  },
});

export const {
  commentedByBlogRequest,
  commentedByBlogSuccess,
  commentedByBlogFailure,
  commentedByBlogResetState,
} = commentedByBlogSlice.actions;

export default commentedByBlogSlice.reducer;
