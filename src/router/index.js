import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import CandidateProfile from "../pages/candidate/Profile";
import RecruiterProfile from "../pages/recruiter/Profile";
import Setting from "../pages/Setting";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Career GPT Dashboard</h1>,
    },
    {
        path: "/showcase",
        element: <App />,
    },
    {
        path: "/candidate/profile",
        element: <CandidateProfile />
    },
    {
        path: "/recruiter/profile",
        element: <RecruiterProfile />
    },
    {
        path: "/setting",
        element: <Setting />
    },
    {
        path: "signin",
        element: <SignIn />
    },
    {
        path: "signup",
        element: <SignUp />
    }
]);