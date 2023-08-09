import { useSelector, useDispatch } from "react-redux"
import {
  setLoggedIn,
  setAccessToken,
  setTokenExpiryDate,
  selectIsLoggedIn,
  selectTokenExpiryDate,
} from "./authorizationSlice"
import { authEndpoint } from "../../oauthConfig"
import { signin as signinAPI } from "../../app/apis/signin"
import { Navigate, useNavigate } from "react-router"
import { register } from "../../app/apis/register"

export function useAuth() {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const tokenExpiryDate = useSelector(selectTokenExpiryDate)
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const signin = (username: string, callback: () => void) => {
    return signinAPI().then((response) => {
      const token = response.data.token
      if (token) {
        dispatch(setLoggedIn(true))
        dispatch(setAccessToken(token))
        callback()
        //dispatch(setTokenExpiryDate(Number(expires_in)))
      }
    })
  }

  const signup = (
    username: string,
    email: string,
    password: string,
    role: string,
    callback: () => void,
  ) => {
    return register().then((response) => {
      console.log("signup resp", response)
      navigate("/signin", { replace: true })
      callback()
    })
  }

  const signout = () => {
    dispatch(setLoggedIn(false))
    dispatch(setAccessToken(""))
    navigate("/signin", { replace: false })
  }

  return { signin, signup, signout, isLoggedIn, tokenExpiryDate }
}
