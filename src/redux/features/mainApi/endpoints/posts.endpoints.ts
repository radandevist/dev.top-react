import { ApiResBody } from "../../../../types/response.types";
import { HomePostsQueryData } from "../../../../types/queries/homePosts.types";
import { mainApiSlice } from "../mainApi.slice";

const mainApiPostsEndpoints = mainApiSlice.injectEndpoints({
  endpoints: builder => ({
    getHomePostsByPage: builder.query<ApiResBody<HomePostsQueryData>, number>({
      query: (pageNum: number) => "/posts/home?page="+pageNum,
    }),
  }),
})

export const {
  useGetHomePostsByPageQuery,
} = mainApiPostsEndpoints;

export default mainApiPostsEndpoints;