import { postAPI } from "../../utils/ajaxUtil"

export type Education = {
  candidateId: number
  degree: string
  school: string
  startDate: string
  endDate: string
}

export const addEducations = async (educations: Education[]) => {
  return postAPI("candidate/educations", educations, {
    credential: true,
  })
}
