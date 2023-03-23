import { mainApiSlice } from "../mainApi.slice";
import { ApiResBody } from "../../../../types/response.types";
// import { HomePostsQueryData } from "../../../../types/queries/homePosts.types";
// import { SearchPostsQueryData } from "../../../../types/queries/searchPosts.types";
// import { IUser } from "../../../../types/user.types";
import { LoginQueryData } from "../../../../types/queries/login.types";
import { IUser } from "../../../../types/user.types";
import { resetAuthState } from "../../auth/auth.slice";
import { persistor } from "../../../store";

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
      query: (input) => ({
        url: "/auth/login",
        method: "POST",
        body: input,
        credentials: "include",
      })
    }),
    signUp: builder.mutation<ApiResBody<LoginQueryData>, SignupInput>({
      query: (input) => ({
        url: "/auth/register",
        method: "POST",
        body: input,
      }),
    }),
    logout: builder.mutation<ApiResBody<{ user: IUser; }>, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
        credentials: "include",
      }),
      onQueryStarted: async (_, api) => {
        await api.queryFulfilled;
        api.dispatch(resetAuthState());
        persistor.purge();
      },
    }),
  }),
})

export const {
  // useGetHomePostsByPageQuery,
  // useSearchPostsQuery,
  // useLazyLoginQuery,
  useLoginMutation,
  useSignUpMutation,
  useLogoutMutation,
  // useLazyLogoutQuery,s
} = mainApiPostsEndpoints;

export default mainApiPostsEndpoints;