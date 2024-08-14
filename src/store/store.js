import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./reducers/postsReduce";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
