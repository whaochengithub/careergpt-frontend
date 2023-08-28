import { postAPI, putAPI } from "../utils/ajaxUtil"

export const resetPassword = async (info: {
  oldPassword: string
  newPassword: string
}) => {
  return postAPI("auth/resetPassword", info)
}

export const getResetPasswordLink = async (info: { email: string }) => {
  return putAPI("auth/resetPassword", info)
}
