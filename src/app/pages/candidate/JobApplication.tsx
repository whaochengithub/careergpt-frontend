import { Box, Paper } from "@mui/material"
import React from "react"
import AppHeader from "../../components/AppHeader"
import Nav from "../../components/Nav"

type Props = {}

const JobApplication = (props: Props) => {
  return (
    <Box sx={{ flexDirection: "column", height: "100vh" }}>
      <AppHeader />
      <Nav />
      <Paper sx={{ flexGrow: "1", m: 1 }}></Paper>
    </Box>
  )
}

export default JobApplication
