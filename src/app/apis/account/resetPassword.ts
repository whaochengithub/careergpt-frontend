import { putAPI } from "../../utils/ajaxUtil"

export const resetPassword = async (info: {
  email: string
  password: string
}) => {
  return putAPI("settings/account/resetPassword", info, { credential: true })
}
