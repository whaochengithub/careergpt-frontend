import { deleteAPI } from "../../utils/ajaxUtil"

export const deleteEducation = async (candidateID: number) => {
  return deleteAPI(`candidate/education/${candidateID}`, "", {
    credential: true,
  })
}
