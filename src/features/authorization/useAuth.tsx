import { useSelector, useDispatch } from "react-redux"
import {
  setLoggedIn,
  setAccessToken,
  setTokenExpiryDate,
  selectIsLoggedIn,
  selectTokenExpiryDate,
} from "./authorizationSlice"
import { authEndpoint } from "../../oauthConfig"
import { authorization } from "../../app/apis/auth"

export function useAuth() {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const tokenExpiryDate = useSelector(selectTokenExpiryDate)
  const dispatch = useDispatch()

  const signin = (username: string, callback: () => void) => {
    return authorization().then((response) => {
      const token = response.data.token
      if (token) {
        dispatch(setLoggedIn(true))
        dispatch(setAccessToken(token))
        callback()
        //dispatch(setTokenExpiryDate(Number(expires_in)))
      }
    })
  }

  const signup = () => {}

  const signout = () => {}

  return { signin, signup, signout, isLoggedIn, tokenExpiryDate }
}
