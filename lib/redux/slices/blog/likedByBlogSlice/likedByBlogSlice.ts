import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserDataState {
  likedby: null | any[]; // Change the type based on the actual data type expected
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: UserDataState = {
  likedby: null,
  loading: false,
  success: false,
  error: null,
};

export const likedByBlogSlice = createSlice({
  name: "likedByBlog",
  initialState,
  reducers: {
    likedByBlogRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    likedByBlogSuccess: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.success = true;
      state.likedby = action.payload;
    },
    likedByBlogFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    likedByBlogResetState: (state) => {
      state.success = false;
    },
  },
});

export const {
  likedByBlogRequest,
  likedByBlogSuccess,
  likedByBlogFailure,
  likedByBlogResetState,
} = likedByBlogSlice.actions;

export default likedByBlogSlice.reducer;
