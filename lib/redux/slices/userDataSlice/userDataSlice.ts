import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserdataState {
  userData: {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    token: string;
  } | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserdataState = {
  userData: null,
  loading: false,
  error: null,
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserdataState['userData']>) => {
      state.userData = action.payload;
      state.loading = false;
      state.error = null;
    },
    clearUser: (state) => {
      state.userData = null;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setUser, clearUser, setLoading, setError } = userDataSlice.actions;

export default userDataSlice.reducer;
