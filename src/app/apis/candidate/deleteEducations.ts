import { deleteAPI } from "../../utils/ajaxUtil"

export const deleteEducations = async (candidateIDs: number[]) => {
  return deleteAPI(`candidate/educations`, candidateIDs, {
    credential: true,
  })
}
