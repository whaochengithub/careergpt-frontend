import { putAPI } from "../../utils/ajaxUtil"

export const updateExperience = async (
  candidateID: number,
  experience: {
    candidateId: number
    title: string
    company: string
    startDate: string
    endDate: string
    keywords: string
    description: string
  },
) => {
  return putAPI(`candidate/experience/${candidateID}`, experience, {
    credential: true,
  })
}
