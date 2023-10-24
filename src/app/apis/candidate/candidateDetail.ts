import { getAPI } from "../../utils/ajaxUtil"

export const getCandidateDetail = async (access_token: string) => {
  return getAPI("candidate", "", {
    credential: true,
    access_token,
  })
}
