import { ROLE } from "../../features/authorization/authorizationSlice"
import { postAPI } from "../utils/ajaxUtil"

export const register = async (account: {
  email: string
  password: string
  userName: string
  role: ROLE
}) => {
  return postAPI("auth/register", account)
}
