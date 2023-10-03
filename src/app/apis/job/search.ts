import { getAPI } from "../../utils/ajaxUtil"

export const getJobs = async (title: string) => {
  return getAPI("job", `search?title=${title}`, {
    credential: true,
    access_token:
      "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUkVDUlVJVEVSIiwidXNlcl9pZCI6Mywic3ViIjoidGVzdDFAZ21haWwuY29tIiwiaWF0IjoxNjk2Mjk1MDUyLCJleHAiOjE2OTYzODE0NTJ9.qly01dHggCAL4HVNVY5QRCHu9uekAlkTqBtzPEpr8XY",
  })
}
