import { GetUserProfileQueryData } from "../../../../types/queries/userProfile.types";
import { ApiResBody } from "../../../../types/response.types";
// import { TagsLisQueryData } from "../../../../types/queries/tagsList.types";
import { mainApiSlice } from "../mainApi.slice";

const mainApiUsersEndpoints = mainApiSlice.injectEndpoints({
  endpoints: builder => ({
    getUserProfile: builder.query<ApiResBody<GetUserProfileQueryData>, string>({
      query: (userName) => "/users/profile/"+userName,
    }),
  }),
})

export const {
  useGetUserProfileQuery,
} = mainApiUsersEndpoints;

export default mainApiUsersEndpoints;