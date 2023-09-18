import { postAPI } from "../../utils/ajaxUtil"

export const applyJob = async (job: {
  jobId: number
  applicantId: number
  applicantName: string
  status: string
}) => {
  return postAPI("job/apply", job, {
    credential: true,
  })
}
