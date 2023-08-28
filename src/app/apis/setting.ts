import { getAPI } from "../utils/ajaxUtil"

export const getSetting = async () => {
  return getAPI("settings", "account", {
    credential: true,
  })
}
