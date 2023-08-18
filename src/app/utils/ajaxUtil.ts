import axios from "axios"
import {
  setAccessToken,
  setLoggedIn,
} from "../../features/authorization/authorizationSlice"
import { authEndpoint } from "../../oauthConfig"
import { store } from "../store"

interface Params {
  baseUrl: string
  headers: any
  method: string
}

export type APIResponse = {
  error?: object
  data?: object
}

const getAccessToken = () => {
  const auth = localStorage.getItem("persist:authorization")
  let accessToken = ""
  if (auth) {
    accessToken = JSON.parse(auth).accessToken
  }
  return accessToken
}

const postConfig: Params = {
  baseUrl: authEndpoint,
  headers: {
    "Content-Type": "application/json",
  },
  method: "post",
}

const { dispatch } = store

export const postAPI = async (
  url: string,
  data: any,
  options?: any,
): Promise<any> => {
  return await axios({
    ...postConfig,
    url: `${postConfig.baseUrl}/${url}`,
    data,
    headers: options?.credential
      ? {
          ...postConfig.headers,
          Authorization: `Bearer ${getAccessToken()}`,
        }
      : {
          ...postConfig.headers,
        },
  })
    .then((response) => {
      console.info("Post API response", response)
      return {
        data: response.data,
      }
    })
    .catch((error) => {
      console.warn("Post API error", error)
      return {
        error,
      }
    })
}

//config for get request note that the method as changed to get this is very important
const getConfig: Params = {
  baseUrl: authEndpoint,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  method: "get",
}

export const getAPI = async (
  url: string,
  data: any,
  options: any,
): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/${url}/${data}`,
    headers: options?.credential
      ? {
          ...postConfig.headers,
          Authorization: `Bearer ${getAccessToken()}`,
        }
      : {
          ...postConfig.headers,
        },
  })
    .then((response) => {
      console.info(response)

      return {
        status: response.status,
        data: response.data,
      }
    })
    .catch((error) => {
      console.warn(error)
      if (
        error.response.data.message === "Invalid/Expired Token!" ||
        error.response.data.message === "invalid token"
      ) {
        dispatch(setLoggedIn(false))
        dispatch(setAccessToken(""))
      }
      return {
        status: error.status,
        data: error.response,
      }
    })
}
