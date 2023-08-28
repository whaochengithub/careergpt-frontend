import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from "@reduxjs/toolkit"
import authorizationReducer from "../features/authorization/authorizationSlice"
import settingReducer from "../features/setting/settingSlice"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"

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
    setting: settingReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
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
