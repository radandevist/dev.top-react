import { mainApiSlice } from "../mainApi.slice";
import { ApiResBody } from "../../../../types/response.types";
import { HomePostsQueryData } from "../../../../types/queries/homePosts.types";
import { SearchPostsQueryData } from "../../../../types/queries/searchPosts.types";
// import { UserProfilePostsQueryData } from "../../../../types/queries/userProfilePosts.types";

const mainApiPostsEndpoints = mainApiSlice.injectEndpoints({
  endpoints: builder => ({
    getHomePostsByPage: builder.query<ApiResBody<HomePostsQueryData>, number>({
      query: (pageNum: number) => "/posts/home?page="+pageNum,
    }),
    searchPosts: builder.query<ApiResBody<SearchPostsQueryData>, { term: string; pageNum: number }>({
      query: ({ term, pageNum }) => "/posts/search?term="+term+"&page="+pageNum,
    }),
  }),
})

export const {
  useGetHomePostsByPageQuery,
  useSearchPostsQuery,
} = mainApiPostsEndpoints;

export default mainApiPostsEndpoints;