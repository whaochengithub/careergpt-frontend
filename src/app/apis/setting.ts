import { getAPI } from "../utils/ajaxUtil"

export const getSetting = async () => {
  return getAPI("auth", "RESOURCE", {
    credential: true,
  })
}
