import { postAPI, putAPI } from "../utils/ajaxUtil"

export const getResetPasswordLink = async (info: { email: string }) => {
  return postAPI("auth/resetPassword", info)
}

export const resetPassword = async (info: {
  email: string
  password: string
}) => {
  return putAPI("auth/resetPassword", info)
}
