import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSetting as getSettingAPI } from "../../app/apis/setting"
import { selectAccount, setAccount } from "./settingSlice"

function useSetting() {
  const setting = useSelector(selectAccount)
  const dispatch = useDispatch()

  const getSetting = () => {
    return getSettingAPI().then((response) => {
      if (!response.error) {
        dispatch(setAccount(response.data))
      }
    })
  }

  return { getSetting, setting }
}

export default useSetting
