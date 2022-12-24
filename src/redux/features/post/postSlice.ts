import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type IPost = {
  title: string;
  content: string;
  author: string;
} & Record<string, any>;

type IPostSliceState = {
  // loading: boolean;
  // content: string;
  currentPost: IPost | null;
  posts: IPost[];
};

const initialState: IPostSliceState = {
  currentPost: null,
  posts: [],
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setCurrentPost: (state, action: PayloadAction<IPost | null>) => {
      state.currentPost = action.payload;
    }
  }
})

export const {
  setCurrentPost,
} = postSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPostCurrentPost = (state: RootState) => state.post.currentPost;

export const postReducer = postSlice.reducer;