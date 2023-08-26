/* Instruments */
// import { counterSlice } from "./slices";
import { signUpSlice } from "./slices";
import { loadingSlice } from "./slices";

export const reducer = {
  // counter: counterSlice.reducer,
  loading: loadingSlice.reducer,
  signUp: signUpSlice.reducer,

};
