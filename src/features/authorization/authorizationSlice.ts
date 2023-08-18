import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export enum ROLE {
  CANDIDATE = "CANDIDATE",
  RECRUITER = "RECRUITER",
}

interface AuthorizationState {
  loggedIn: boolean
  accessToken: string
  tokenExpiryDate: string
  role: ROLE
}

const initialState: AuthorizationState = {
  loggedIn: false,
  accessToken: "",
  tokenExpiryDate: "",
  role: ROLE.CANDIDATE,
}

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload
    },
    setTokenExpiryDate: (state, action: PayloadAction<number>) => {
      const date = new Date()
      date.setSeconds(date.getSeconds() + action.payload)
      state.tokenExpiryDate = date.toISOString()
    },
    setRole: (state, action: PayloadAction<ROLE>) => {
      state.role = action.payload
    },
  },
})

export const { setLoggedIn, setAccessToken, setTokenExpiryDate, setRole } =
  authorizationSlice.actions

export const selectIsLoggedIn = (state: RootState) =>
  state.authorization.loggedIn
export const selectAccessToken = (state: RootState) =>
  state.authorization.accessToken
export const selectTokenExpiryDate = (state: RootState) =>
  state.authorization.tokenExpiryDate
export const selectRole = (state: RootState) => state.authorization.role

export default authorizationSlice.reducer
