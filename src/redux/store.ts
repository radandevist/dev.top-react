import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { postReducer } from "./features/post/post.reducer";
// import { mainApiReducer, mainApiReducerPath } from "./features/mainApi/mainApi.reducer";
import { mainApiSlice } from "./features/mainApi/mainApi.slice";
import { searchReducer } from "./features/search/search.slice";
import { authReducer } from "./features/auth/auth.slice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  [mainApiSlice.reducerPath]: mainApiSlice.reducer,
    search: searchReducer,
    auth: authReducer,
});

const persistedRootReducer = persistReducer({
  key: 'root',
  storage,
  whitelist: ['auth'],
}, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(mainApiSlice.middleware)
  },
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch