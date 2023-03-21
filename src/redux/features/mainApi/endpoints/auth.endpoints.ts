import { mainApiSlice } from "../mainApi.slice";
import { ApiResBody } from "../../../../types/response.types";
import { HomePostsQueryData } from "../../../../types/queries/homePosts.types";
import { SearchPostsQueryData } from "../../../../types/queries/searchPosts.types";
import { IUser } from "../../../../types/user.types";
import { LoginQueryData } from "../../../../types/queries/login.types";

const mainApiPostsEndpoints = mainApiSlice.injectEndpoints({
  endpoints: builder => ({
    // getHomePostsByPage: builder.query<ApiResBody<HomePostsQueryData>, number>({
    //   query: (pageNum: number) => "/posts/home?page="+pageNum,
    // }),
    // searchPosts: builder.query<ApiResBody<SearchPostsQueryData>, { term: string; pageNum: number }>({
    //   query: ({ term, pageNum }) => "/posts/search?term="+term+"&page="+pageNum,
    // }),
    login: builder.query<ApiResBody<LoginQueryData>, { email: string; password: string; }>({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        body: { email, password }
        // ? credentials: include,
      })
    }),
  }),
})

export const {
  // useGetHomePostsByPageQuery,
  // useSearchPostsQuery,
  useLazyLoginQuery,
} = mainApiPostsEndpoints;

export default mainApiPostsEndpoints;