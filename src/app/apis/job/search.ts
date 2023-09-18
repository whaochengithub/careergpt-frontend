import { getAPI } from "../../utils/ajaxUtil"

export const getJobs = async (title: string) => {
  return getAPI("job", `search?title=${title}`, {
    credential: true,
  })
}
