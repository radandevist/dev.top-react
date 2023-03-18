import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { IPost } from "../features/post/post.reducer";
// import { ApiResBody } from "../../../types/response.types";
// import { HomePostsQueryData } from "../../../types/queries/homePosts.types";
// import { TagsLisQueryData } from "../../../types/queries/tagsList.types";
// import { HomePostsQueryData } from "../../types/post.types";

export const mainApiSlice = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3300/api' }),
  endpoints: _builder => ({}),
});

// export const { reducer: mainApiReducer, reducerPath: mainApiReducerPath } = mainApiSlice;