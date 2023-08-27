import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface UserdataState {
  data: UserData | null;
}

const initialState: UserdataState = {
  data: null,
};

export const userDataSlice = createSlice({
  name: "userdata",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.data = action.payload;
    },
    clearUserData: (state) => {
      state.data = null;
    },
  },
});

export const { setUserData, clearUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
