import { createSlice } from "@reduxjs/toolkit";

interface Blog {
  id: number;
  blogId: string;
  title: string;
  content: string;
  author: string;
  email: string;
  coverImage: string;
  createdAt: Date;
}

interface getBlogsState {
  data: Blog[] | null; // Use an array of Blog objects
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

const initialState: getBlogsState = {
  data: null,
  isLoading: false,
  error: null,
  isSuccess: false,
};

export const getBlogsSlice = createSlice({
  name: "getBlogs",
  initialState,
  reducers: {
    getBlogsRequest: (state) => {
      state.isLoading = true;
      state.error = null;
      state.isSuccess = false;
    },
    getBlogsSuccess: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    },
    getBlogsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getBlogsResetState: (state) => {
      state.isSuccess = false;
    },
  },
});

export const {
  getBlogsRequest,
  getBlogsSuccess,
  getBlogsFailure,
  getBlogsResetState,
} = getBlogsSlice.actions;
export default getBlogsSlice.reducer;
