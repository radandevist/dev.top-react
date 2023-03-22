import { mainApiSlice } from "../mainApi.slice";
import { ApiResBody } from "../../../../types/response.types";
// import { HomePostsQueryData } from "../../../../types/queries/homePosts.types";
// import { SearchPostsQueryData } from "../../../../types/queries/searchPosts.types";
// import { IUser } from "../../../../types/user.types";
import { LoginQueryData } from "../../../../types/queries/login.types";

type SignupInput = {
  userName?: string;
  password: string;
  firstName?: string;
  lastName: string;
  email: string;
  confirmPassword: string;
};

const mainApiPostsEndpoints = mainApiSlice.injectEndpoints({
  endpoints: builder => ({
    // getHomePostsByPage: builder.query<ApiResBody<HomePostsQueryData>, number>({
    //   query: (pageNum: number) => "/posts/home?page="+pageNum,
    // }),
    // searchPosts: builder.query<ApiResBody<SearchPostsQueryData>, { term: string; pageNum: number }>({
    //   query: ({ term, pageNum }) => "/posts/search?term="+term+"&page="+pageNum,
    // }),
    login: builder.mutation<ApiResBody<LoginQueryData>, { email: string; password: string; }>({
      query: ({ email, password }) => ({
        url: "/auth/login",
        method: "POST",
        body: { email, password }
        // ? credentials: include,
      })
    }),
    signUp: builder.mutation<ApiResBody<LoginQueryData>, SignupInput>({
      query: ({ userName, password, firstName, lastName, email, confirmPassword }) => ({
        url: "/auth/register",
        method: "POST",
        body: { userName, password, firstName, lastName, email, confirmPassword },
      }),
    }),
  }),
})

export const {
  // useGetHomePostsByPageQuery,
  // useSearchPostsQuery,
  // useLazyLoginQuery,
  useLoginMutation,
  useSignUpMutation,
} = mainApiPostsEndpoints;

export default mainApiPostsEndpoints;