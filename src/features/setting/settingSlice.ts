import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { ROLE } from "../authorization/authorizationSlice"

interface AccountState {
  credit: number
  curEmail: string | null
  email: string
  id: number
  linkedIn: string | null
  location: string | null
  name: string | null
  password: string
  phone: string | null
  photo: string | null
  role: ROLE
  status: string | null
  userName: string | null
}
interface SettingState {
  account: AccountState
}

const initialState: SettingState = {
  account: {
    credit: 0,
    curEmail: "",
    email: "",
    id: 0,
    linkedIn: "",
    location: "",
    name: "",
    password: "",
    phone: "",
    photo: "",
    role: ROLE.CANDIDATE,
    status: "",
    userName: "",
  },
}

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<AccountState>) => {
      state.account = action.payload
    },
  },
})

export const { setAccount } = settingSlice.actions

export const selectAccount = (state: RootState) => state.setting.account

export default settingSlice.reducer
