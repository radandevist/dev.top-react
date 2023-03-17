import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IPost } from "../features/post/post.reducer";
import { ApiResBody } from "../../types/response.types";
import { HomePostsQueryData } from "../../types/queries/homePosts.types";
// import { HomePostsQueryData } from "../../types/post.types";

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3300/api' }),
  endpoints: (builder) => ({
    getHomePostsByPage: builder.query<ApiResBody<HomePostsQueryData>, number>({
      query: (pageNum: number) => "/posts/home?page="+pageNum,
    })
  }),
});

export const { useGetHomePostsByPageQuery } = mainApi;