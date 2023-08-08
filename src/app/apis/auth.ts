import axios from "axios"
import { authEndpoint } from "../../oauthConfig"

export const authorization = async () => {
  return axios.post(
    "https://dummyjson.com/auth/login",
    {
      username: "kminchelle",
      password: "0lelplR",
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    },
  )
}
