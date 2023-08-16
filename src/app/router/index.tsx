import { createBrowserRouter, Navigate, useLocation } from "react-router-dom"
import App from "../../App"
import { useAuth } from "../../features/authorization/useAuth"
import CandidateProfile from "../pages/candidate/Profile"
import RecruiterProfile from "../pages/recruiter/Profile"
import Setting from "../pages/Setting"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  // let auth = useAuth();
  const { isLoggedIn } = useAuth()
  let location = useLocation()

  if (!isLoggedIn) {
    return <Navigate to="/signin" state={{ from: location }} replace />
  }

  return children
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <RequireAuth>
      <CandidateProfile />
      // </RequireAuth>
    ),
  },
  {
    path: "/showcase",
    element: <App />,
  },
  {
    path: "/candidate/profile",
    element: (
      <RequireAuth>
        <CandidateProfile />
      </RequireAuth>
    ),
  },
  {
    path: "/recruiter/profile",
    element: (
      // <RequireAuth>
      <RecruiterProfile />
      // </RequireAuth>
    ),
  },
  {
    path: "/setting",
    element: (
      <RequireAuth>
        <Setting />
      </RequireAuth>
    ),
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
])
