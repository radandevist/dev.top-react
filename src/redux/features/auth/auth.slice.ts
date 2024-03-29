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
    setAuthState: (state, action: PayloadAction<Required<AuthSliceState>>) => {
      // _state = action.payload;
      state.accessToken = action.payload.accessToken
      state.expiredAt = action.payload.expiredAt
      state.user = action.payload.user
    },
    resetAuthState: (state) => {
      state.accessToken = null;
      state.expiredAt = null;
      state.user = null;
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
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setUserCredentials: (state, action: PayloadAction<Partial<IUser>>) => {
      if (!state.user) {
        return;
      }
      state.user = {
        ...state.user,
        ...action.payload,
      }
    }
  }
})

export const {
  setAuthState,
  resetAuthState,
  setAccessToken,
  resetAccessToken,
  setExpiredAt,
  resetExpiredAt,
  setUser,
  setUserCredentials,
} = authSlice.actions;

export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectCurrentUser = (state: RootState) => state.auth.user;

export const { reducer: authReducer } = authSlice;