import { useSelector } from "react-redux"
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom"
import App from "../../App"
import {
  ROLE,
  selectAccessToken,
  selectRole,
} from "../../features/authorization/authorizationSlice"
import { useAuth } from "../../features/authorization/useAuth"
import { ErrorBoundary } from "react-error-boundary"
import Interview from "../pages/candidate/Interview"
import JobApplication from "../pages/candidate/JobApplication"
import CandidateProfile from "../pages/candidate/Profile"
import NoPermission from "../pages/NoPermission"
import CandidateSearch from "../pages/recruiter/CandidateSearch"
import RecruiterProfile from "../pages/recruiter/Profile"
import ResetPassword from "../pages/ResetPassword"
import Setting from "../pages/Setting"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import PageNotFound from "../pages/PageNotFound"
import ErrorPage from "../pages/ErrorPage"
import { useEffect } from "react"
import useSetting from "../../features/setting/useSetting"

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let auth = useAuth()
  const access_token = useSelector(selectAccessToken)
  let location = useLocation()
  const { getSetting, setting } = useSetting()

  useEffect(() => {
    if (access_token) {
      getSetting(access_token)
    }
  }, [access_token])

  if (!auth.isLoggedIn) {
    return <Navigate to="/signin" state={{ from: location }} replace />
  }

  return children
}

const RequireCandidate = ({ children }: { children: JSX.Element }) => {
  // let auth = useAuth();
  const { isCandidate } = useAuth()
  let location = useLocation()

  if (!isCandidate) {
    return <Navigate to="/no-permission" state={{ from: location }} replace />
  }
  return children
}

const RequireRecruiter = ({ children }: { children: JSX.Element }) => {
  // let auth = useAuth();
  const { isRecruiter } = useAuth()
  let location = useLocation()

  if (!isRecruiter) {
    return <Navigate to="/no-permission" state={{ from: location }} replace />
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

const ErrorBoundaryLayout = () => (
  <ErrorBoundary fallback={<ErrorPage />}>
    <Outlet />
  </ErrorBoundary>
)

export const router = createBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: [
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
        path: "/no-permission",
        element: <NoPermission />,
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
            <RequireCandidate>
              <CandidateProfile />
            </RequireCandidate>
          </RequireAuth>
        ),
      },
      {
        path: "/job-application",
        element: (
          <RequireAuth>
            <RequireCandidate>
              <JobApplication />
            </RequireCandidate>
          </RequireAuth>
        ),
      },
      {
        path: "/interview",
        element: (
          <RequireAuth>
            <RequireCandidate>
              <Interview />
            </RequireCandidate>
          </RequireAuth>
        ),
      },
      {
        path: "/recruiter/profile",
        element: (
          <RequireAuth>
            <RequireRecruiter>
              <RecruiterProfile />
            </RequireRecruiter>
          </RequireAuth>
        ),
      },
      {
        path: "/candidate-search",
        element: (
          <RequireAuth>
            <RequireRecruiter>
              <CandidateSearch />
            </RequireRecruiter>
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
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
])
