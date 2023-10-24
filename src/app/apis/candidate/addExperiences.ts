import { postAPI } from "../../utils/ajaxUtil"

export type Experience = {
  candidateId: number
  title: string
  company: string
  startDate: string
  endDate: string
  keywords: string
  description: string
}

export const addExperiences = async (experiences: Experience[]) => {
  return postAPI("candidate/experiences", experiences, {
    credential: true,
  })
}
