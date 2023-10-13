import { postAPI, putAPI } from "../utils/ajaxUtil"

export const getResetPasswordLink = async (info: { email: string }) => {
  return postAPI("auth/sendPasswordResetLink ", info)
}

export const resetPassword = async (info: {
  email: string
  password: string
  resetToken: string
}) => {
  return putAPI("auth/resetPassword", info)
}
