import { postAPI } from "../utils/ajaxUtil"

export const signin = async () => {
  return postAPI("auth/login", {
    email: "student1@gmail.com",
    password: "password",
  })
}
