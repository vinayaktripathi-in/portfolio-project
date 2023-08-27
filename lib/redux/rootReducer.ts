/* Instruments */
import { signUpSlice } from "./slices";
import { signInSlice } from "./slices";

export const reducer = {
  signUp: signUpSlice.reducer,
  signIn: signInSlice.reducer,

};
