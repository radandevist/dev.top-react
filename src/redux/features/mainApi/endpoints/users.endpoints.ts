import { GetUserProfileQueryData } from "../../../../types/queries/userProfile.types";
import { UserProfilePostsQueryData } from "../../../../types/queries/userProfilePosts.types";
import { ApiResBody } from "../../../../types/response.types";
import { mainApiSlice } from "../mainApi.slice";

const mainApiUsersEndpoints = mainApiSlice.injectEndpoints({
  endpoints: builder => ({
    getUserProfile: builder.query<ApiResBody<GetUserProfileQueryData>, string>({
      query: (userName) => "/users/"+userName+"/profile",
    }),
    getUserProfilePosts: builder.query<ApiResBody<UserProfilePostsQueryData>, { userName: string; pageNum: number; }>({
      query: ({ userName, pageNum }) => "/users/"+userName+"/posts/profile?page="+pageNum
    })
  }),
})

export const {
  useGetUserProfileQuery,
  useGetUserProfilePostsQuery,
} = mainApiUsersEndpoints;

export default mainApiUsersEndpoints;