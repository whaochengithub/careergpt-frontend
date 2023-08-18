import React from "react"
import { useDispatch } from "react-redux"
import { getSetting as getSettingAPI } from "../../app/apis/setting"
import {
  setAccessToken,
  setLoggedIn,
} from "../authorization/authorizationSlice"

function useSetting() {
  const dispatch = useDispatch()

  const getSetting = () => {
    return getSettingAPI().then((response) => {})
  }
  const setting = {}

  return { getSetting, setting }
}

export default useSetting
