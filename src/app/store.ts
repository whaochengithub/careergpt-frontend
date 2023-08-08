import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import authorizationReducer from "../features/authorization/authorizationSlice"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web
import { persistStore, persistReducer } from "redux-persist"

const persistConfig = {
  key: "authorization",
  storage,
}

const persistedAuthorizationReducer = persistReducer(
  persistConfig,
  authorizationReducer,
)

export const store = configureStore({
  reducer: {
    authorization: persistedAuthorizationReducer,
  },
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
