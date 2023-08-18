import { postAPI } from "../utils/ajaxUtil"

export const signin = async (credential: {
  email: string
  password: string
}) => {
  return postAPI("auth/authenticate", credential)
}
