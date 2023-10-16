import { postAPI } from "../../utils/ajaxUtil"

export const addExperience = async (experience: {
  candidateId: number
  title: string
  company: string
  startDate: string
  endDate: string
  keywords: string
  description: string
}) => {
  return postAPI("candidate/experience", experience, {
    credential: true,
  })
}
