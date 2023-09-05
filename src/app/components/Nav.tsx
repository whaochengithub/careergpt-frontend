import { Stack, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const Nav = ({}) => {
  const [active, setActive] = useState("Dashboard")
  let location = useLocation()

  useEffect(() => {
    switch (location?.pathname) {
      case "/candidate/profile":
      case "/recruiter/profile":
        setActive("Profile")
        break
      case "/setting":
        setActive("Setting")
        break
      case "/job-application":
        setActive("Job Application")
        break
      case "/interview":
        setActive("Interview Preparation")
        break
      case "/candidate-search":
        setActive("Candidate Search")
        break
      default:
        break
    }
  }, [location])

  return (
    <Stack marginLeft={2} direction={"row"} alignItems="center" gap={2}>
      <Typography variant="h6" fontWeight={"bolder"}>
        {active}
      </Typography>
    </Stack>
  )
}

export default Nav
