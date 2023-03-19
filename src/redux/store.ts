import { configureStore } from "@reduxjs/toolkit";
// import { postReducer } from "./features/post/post.reducer";
// import { mainApiReducer, mainApiReducerPath } from "./features/mainApi/mainApi.reducer";
import { mainApiSlice } from "./features/mainApi/mainApi.slice";
import { searchReducer } from "./features/search/search.slice";

export const store = configureStore({
  reducer: {
    [mainApiSlice.reducerPath]: mainApiSlice.reducer,
    // auth for later
    // post: postReducer,
    search: searchReducer, 
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(mainApiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch