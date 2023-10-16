import { getAPI } from "../../utils/ajaxUtil"

export const getCandidateDetail = async () => {
  return getAPI("candidate", "", {
    credential: true,
  })
}
