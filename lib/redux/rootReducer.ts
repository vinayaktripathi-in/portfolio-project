/* Instruments */
import { counterSlice } from "./slices";
// import { signUpSlice } from "./slices/signup";

export const reducer = {
  counter: counterSlice.reducer,
  // signUp: signUpSlice.reducer,
};
