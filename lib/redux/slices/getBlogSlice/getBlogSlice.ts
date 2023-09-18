import { createSlice } from "@reduxjs/toolkit";

interface getBlogState {
  data: {
    title: string;
    content: string;
    author: string;
    email: string;
    coverImage: string | null;
    createdAt: number;
  } | null;
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

const initialState: getBlogState = {
  data: null,
  isLoading: false,
  error: null,
  isSuccess: false,
};

export const getBlogSlice = createSlice({
  name: "getBlog",
  initialState,
  reducers: {
    getBlogRequest: (state) => {
      state.isLoading = true;
      state.error = null;
      state.isSuccess = false;
    },
    getBlogSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    },
    getBlogFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // getBlogResetState: (state) => {
    //   state.isSuccess = false;
    // },
  },
});

export const {
  getBlogRequest,
  getBlogSuccess,
  getBlogFailure,
  // getBlogResetState,
} = getBlogSlice.actions;
export default getBlogSlice.reducer;
