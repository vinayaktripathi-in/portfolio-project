/* Instruments */
import { signUpSlice } from "./slices";
import { signInSlice } from "./slices";
import { verifySlice } from "./slices";
import { userDataSlice } from "./slices";
import { forgotPasswordSlice } from "./slices";
import { createPasswordSlice } from "./slices";
import { postBlogSlice } from "./slices";
import { getBlogsSlice } from "./slices";
import { getBlogSlice } from "./slices";
import { likeBlogSlice } from "./slices";
import { likedByBlogSlice } from "./slices";
import { commentBlogSlice } from "./slices";
import { commentedByBlogSlice } from "./slices";

export const reducer = {
  signUp: signUpSlice.reducer,
  signIn: signInSlice.reducer,
  verify: verifySlice.reducer,
  userData: userDataSlice.reducer,
  forgotPassword: forgotPasswordSlice.reducer,
  createPassword: createPasswordSlice.reducer,
  postBlog: postBlogSlice.reducer,
  getBlogs: getBlogsSlice.reducer,
  getBlog: getBlogSlice.reducer,
  likeBlog: likeBlogSlice.reducer,
  likedByBlog: likedByBlogSlice.reducer,
  commentBlog: commentBlogSlice.reducer,
  commentedByBlog: commentedByBlogSlice.reducer,
};
