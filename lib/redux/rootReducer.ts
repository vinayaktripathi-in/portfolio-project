/* Instruments */
import { signUpSlice } from "./slices";
import { signInSlice } from "./slices";
import { userDataSlice } from "./slices";

export const reducer = {
  signUp: signUpSlice.reducer,
  signIn: signInSlice.reducer,
  userData: userDataSlice.reducer,
};
