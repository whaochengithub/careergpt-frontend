import { postAPI } from "../../utils/ajaxUtil"

export const postJob = async (job: {
  postBy: number
  title: string
  postTime: string
  jobType: string
  location: string
  description: string
}) => {
  return postAPI("job/postJob", job, {
    credential: true,
  })
}
