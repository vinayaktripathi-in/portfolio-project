/* Instruments */
import { signUpSlice } from "./slices";
import { signInSlice } from "./slices";
import { forgotPasswordSlice } from "./slices";
import { userDataSlice } from "./slices";

export const reducer = {
  signUp: signUpSlice.reducer,
  signIn: signInSlice.reducer,
  forgotPassword: forgotPasswordSlice.reducer,
  userData: userDataSlice.reducer,
};
