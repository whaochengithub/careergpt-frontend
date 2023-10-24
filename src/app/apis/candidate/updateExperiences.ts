import { putAPI } from "../../utils/ajaxUtil"
import { Experience } from "./addExperiences"

export const updateExperiences = async (experiences: Experience[]) => {
  return putAPI(`candidate/experiences`, experiences, {
    credential: true,
  })
}
