import { postAPI } from "../../utils/ajaxUtil"

export const addEducation = async (education: {
  candidateId: number
  degree: string
  school: string
  startDate: string
  endDate: string
}) => {
  return postAPI("candidate/education", education, {
    credential: true,
  })
}
