import { getAPI } from "../utils/ajaxUtil"

export const getRecruiterDetail = async () => {
  return getAPI("recruiters", "recruiterdetail", {
    credential: true,
  })
}
