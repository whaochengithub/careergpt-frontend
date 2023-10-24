import { deleteAPI } from "../../utils/ajaxUtil"

export const deleteExperiences = async (experienceIDs: number[]) => {
  return deleteAPI(`candidate/experiences`, experienceIDs, {
    credential: true,
  })
}
