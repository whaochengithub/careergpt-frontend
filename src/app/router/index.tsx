import { useSelector } from "react-redux"
import { createBrowserRouter, Navigate, useLocation } from "react-router-dom"
import App from "../../App"
import {
  ROLE,
  selectRole,
} from "../../features/authorization/authorizationSlice"
import { useAuth } from "../../features/authorization/useAuth"
import Interview from "../pages/candidate/Interview"
import JobApplication from "../pages/candidate/JobApplication"
import CandidateProfile from "../pages/candidate/Profile"
import CandidateSearch from "../pages/recruiter/CandidateSearch"
import RecruiterProfile from "../pages/recruiter/Profile"
import Setting from "../pages/Setting"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import { store } from "../store"

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  // let auth = useAuth();
  const { isLoggedIn } = useAuth()
  let location = useLocation()

  if (!isLoggedIn) {
    return <Navigate to="/signin" state={{ from: location }} replace />
  }
  return children
}

const Profile = (props: {}) => {
  const role = useSelector(selectRole)
  if (role === ROLE.CANDIDATE) {
    return <CandidateProfile />
  } else {
    return <RecruiterProfile />
  }
}
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <Profile />
      </RequireAuth>
    ),
  },
  {
    path: "/showcase",
    element: <App />,
  },
  {
    path: "/profile",
    element: (
      <RequireAuth>
        <Profile />
      </RequireAuth>
    ),
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
    path: "/job_application",
    element: (
      <RequireAuth>
        <JobApplication />
      </RequireAuth>
    ),
  },
  {
    path: "/interview",
    element: (
      <RequireAuth>
        <Interview />
      </RequireAuth>
    ),
  },
  {
    path: "/recruiter/profile",
    element: (
      <RequireAuth>
        <RecruiterProfile />
      </RequireAuth>
    ),
  },
  {
    path: "/candidate_search",
    element: (
      <RequireAuth>
        <CandidateSearch />
      </RequireAuth>
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
