import { putAPI } from "../../utils/ajaxUtil"

export const updateEducation = async (
  candidateID: number,
  education: {
    candidateId: number
    degree: string
    school: string
    startDate: string
    endDate: string
  },
) => {
  return putAPI(`candidate/education/${candidateID}`, education, {
    credential: true,
  })
}
