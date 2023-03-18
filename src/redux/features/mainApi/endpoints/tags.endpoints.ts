import { ApiResBody } from "../../../../types/response.types";
import { TagsLisQueryData } from "../../../../types/queries/tagsList.types";
import { mainApiSlice } from "../mainApi.slice";

const mainApiTagsEndpoints = mainApiSlice.injectEndpoints({
  endpoints: builder => ({
    getTagsListByPage: builder.query<ApiResBody<TagsLisQueryData>, number>({
      query: (pageNum: number) => "/posts/home?page="+pageNum,
    }),
  }),
})

export const {
  useGetTagsListByPageQuery,
} = mainApiTagsEndpoints;

export default mainApiTagsEndpoints;