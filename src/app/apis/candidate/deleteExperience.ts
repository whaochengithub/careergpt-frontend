import { deleteAPI } from "../../utils/ajaxUtil"

export const deleteExperience = async (candidateID: number) => {
  return deleteAPI(`candidate/experience/${candidateID}`, "", {
    credential: true,
  })
}
