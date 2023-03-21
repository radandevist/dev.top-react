import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { IUser } from "../../../types/user.types";

type AuthSliceState = {
  // value: string;
  accessToken: string | null;
  expiredAt: number | null;
  user: IUser | null;
}

const initialState: AuthSliceState = {
  accessToken: null,
  expiredAt: null,
  user: null,
};

const authSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setAuthState: (_state, action: PayloadAction<Required<AuthSliceState>>) => {
      _state = action.payload;
    },
    resetAuthState: (_state) => {
      _state = initialState;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    resetAccessToken: (state) => {
      state.accessToken = null;
    },
    setExpiredAt: (state, action: PayloadAction<number>) => {
      state.expiredAt = action.payload;
    },
    resetExpiredAt: (state) => {
      state.expiredAt = null;
    }
  }
})

export const {
  setAuthState,
  resetAuthState,
  setAccessToken,
  resetAccessToken,
  setExpiredAt,
  resetExpiredAt
} = authSlice.actions;

// export const selectSearchValue = (state: RootState) => state.search.value;

export const { reducer: authReducer } = authSlice;