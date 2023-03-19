import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

type SearchSliceState = {
  value: string;
}

const initialState: SearchSliceState = {
  value: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    resetValue: (state) => {
      state.value = initialState.value;
    }
  }
})

export const {
  setSearchValue,
  resetValue,
} = searchSlice.actions;

export const selectSearchValue = (state: RootState) => state.search.value;

export const { reducer: searchReducer } = searchSlice;
