import { putAPI } from "../../utils/ajaxUtil"
import { Education } from "./addEducation"
import { Experience } from "./addExperiences"

export type Candidate = {
  id: number
  uploadedResume: string
  workAuth: string
  desiredJob: string
  relocation: boolean
  summary: string
  skills: string
  experiences: Experience[]
  educations: Education[]
}

export const updateCandidate = async (candidate: Candidate) => {
  return putAPI(`candidate`, candidate, {
    credential: true,
  })
}
