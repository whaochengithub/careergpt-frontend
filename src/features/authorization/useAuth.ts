import { useSelector, useDispatch } from "react-redux"
import {
  setLoggedIn,
  setAccessToken,
  setTokenExpiryDate,
  selectIsLoggedIn,
  selectTokenExpiryDate,
  setRole,
  ROLE,
  selectRole,
} from "./authorizationSlice"
import { authEndpoint } from "../../oauthConfig"
import { signin as signinAPI } from "../../app/apis/signin"
import { Navigate, useNavigate } from "react-router"
import { register } from "../../app/apis/register"
import parseJwt from "../../app/utils/parseJWT"
import { APIResponse } from "../../app/utils/ajaxUtil"

export function useAuth() {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const isCandidate = useSelector(selectRole) === ROLE.CANDIDATE
  const isRecruiter = useSelector(selectRole) === ROLE.RECRUITER
  const tokenExpiryDate = useSelector(selectTokenExpiryDate)
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const signin = (
    email: string,
    password: string,
    callback: (resp: APIResponse) => void,
  ) => {
    return signinAPI({ email, password }).then((response: APIResponse) => {
      if (response.error) {
        callback({ error: response.error })
      } else if (response.data) {
        const token = response.data.access_token
        try {
          const { role } = parseJwt(token)
          if (token) {
            dispatch(setLoggedIn(true))
            dispatch(setAccessToken(token))
            dispatch(setRole(role))
            callback(response)
            //dispatch(setTokenExpiryDate(Number(expires_in)))
          }
        } catch (error) {
          console.warn("Jwt parse failed.")
          callback({ error })
        }
      }
    })
  }

  const signup = (
    userName: string,
    email: string,
    password: string,
    role: ROLE,
    callback: (response: object) => void,
  ) => {
    return register({
      userName,
      email,
      password,
      role,
    }).then((response) => {
      if (response.error) {
        console.warn("Sign Up failed.")
        callback(response)
      }
      const token = response.data.access_token
      try {
        const { role } = parseJwt(token)
        if (token) {
          dispatch(setLoggedIn(true))
          dispatch(setAccessToken(token))
          dispatch(setRole(role))
          //dispatch(setTokenExpiryDate(Number(expires_in)))
          callback(response)
        }
      } catch (error) {
        console.warn("Jwt parse failed.")
      }
    })
  }

  const signout = () => {
    dispatch(setLoggedIn(false))
    dispatch(setAccessToken(""))
    navigate("/signin", { replace: false })
  }

  return {
    signin,
    signup,
    signout,
    isLoggedIn,
    isCandidate,
    isRecruiter,
    tokenExpiryDate,
  }
}
