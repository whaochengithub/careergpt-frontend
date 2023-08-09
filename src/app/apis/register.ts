import { postAPI } from "../utils/ajaxUtil"

export const register = async () => {
  return postAPI("auth/login", {
    email: "student1@gmail.com",
    password: "password",
    userName: "student1",
    role: "CANDIDATE",
  })
}
