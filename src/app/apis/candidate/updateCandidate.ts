import { putAPI } from "../../utils/ajaxUtil"

export const updateCandidate = async (candidate: {
  id: number
  uploadedResume: string
  workAuth: string
  desiredJob: string
  relocation: boolean
  summary: string
  skills: []
  experiences: []
  educations: []
}) => {
  return putAPI(`candidate`, candidate, {
    credential: true,
  })
}
