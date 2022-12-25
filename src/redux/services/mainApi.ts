import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IPost } from "../features/post/post.reducer";

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:3300/api' }),
  endpoints: (builder) => ({
    getFeedPostsByPage: builder.query<IPost[], string>({
      query: (pageNum: string) => "/posts?page="+pageNum,
    })
  }),
});

export const { useGetFeedPostsByPageQuery } = mainApi;