import { getAPI } from "../utils/ajaxUtil"

export const getSetting = async (access_token?: string) => {
  return getAPI("settings", "/account", {
    credential: true,
    access_token,
  })
}
