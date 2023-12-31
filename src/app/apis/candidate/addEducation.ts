import { postAPI } from "../../utils/ajaxUtil"

export type Education = {
  candidateId: number
  degree: string
  school: string
  startDate: string
  endDate: string
}

export const addEducation = async (education: Education) => {
  return postAPI("candidate/education", education, {
    credential: true,
  })
}
