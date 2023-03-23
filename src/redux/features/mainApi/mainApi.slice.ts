import { BaseQueryFn, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ApiErrorBody, ApiResBody } from "../../../types/response.types";
import { resetAuthState, setAccessToken, setExpiredAt } from "../auth/auth.slice";
import { IUser } from "../../../types/user.types";
import { RootState, persistor } from "../../store";
// import { IPost } from "../features/post/post.reducer";
// import { ApiResBody } from "../../../types/response.types";
// import { HomePostsQueryData } from "../../../types/queries/homePosts.types";
// import { TagsLisQueryData } from "../../../types/queries/tagsList.types";
// import { HomePostsQueryData } from "../../types/post.types";

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3300/api', // TODO: put in a centralized config
  credentials: "include",
  prepareHeaders: (headers, api) => {
    const token = (api.getState() as RootState).auth.accessToken;
    if (token) headers.set("authorization", token);
    return headers;
  },
});

const baseQueryWithReAuth: BaseQueryFn = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (
    // see our backend
    result?.error?.status === 401
    && (result.error.data as ApiErrorBody)?.message === "Authentication required"
  ) {
    const refreshResult = await baseQuery('/refresh', api, extraOptions)

    if (refreshResult.data) {
      const {
        data: {
          accessToken,
          expiredAt,
        },
      } = refreshResult.data as ApiResBody<{
        accessToken: string;
        expiredAt: number;
        user: IUser;
      }>; 

      api.dispatch(setAccessToken(accessToken));
      api.dispatch(setExpiredAt(expiredAt))

      result = await baseQuery(args, api, extraOptions);
    } else {
      // if auth fails for example when the refresh token cookie is expired too
      await baseQuery("/logout", api, extraOptions);
      api.dispatch(resetAuthState());
      persistor.purge();
    }
  }

  return result;
};

export const mainApiSlice = createApi({
  reducerPath: 'mainApi',
  baseQuery: baseQueryWithReAuth,
  endpoints: _builder => ({}),
});

// export const { reducer: mainApiReducer, reducerPath: mainApiReducerPath } = mainApiSlice;