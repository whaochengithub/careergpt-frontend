import { putAPI } from "../../utils/ajaxUtil"
import { Education } from "./addEducation"

export const updateEducations = async (educations: Education[]) => {
  return putAPI(`candidate/educations`, educations, {
    credential: true,
  })
}
