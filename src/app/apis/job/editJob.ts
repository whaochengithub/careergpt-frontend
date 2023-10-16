import { putAPI } from "../../utils/ajaxUtil"

export const editJob = async (
  jobId: number,
  job: {
    title: string
    jobType: string
    location: string
    description: string
  },
) => {
  return putAPI(`job/editJob/${jobId}`, job, {
    credential: true,
  })
}
