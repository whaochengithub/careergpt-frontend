import { Box, Paper, Tab, Tabs, Typography } from "@mui/material"
import React, { useState } from "react"
import AppHeader from "../../components/AppHeader"
import Nav from "../../components/Nav"
import { a11yProps } from "../../utils/a11yProps"

type Props = {}

function InterviewTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const Interview = (props: Props) => {
  const [interviewTab, setInterviewTab] = useState("")
  const handleTabChange = (event, newTab: string) => {
    setInterviewTab(newTab)
  }
  return (
    <Box sx={{ flexDirection: "column", height: "100vh" }}>
      <AppHeader />
      <Nav />
      <Paper sx={{ flexGrow: "1", m: 1 }}>
        <Tabs
          value={interviewTab}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
          <Tab label="Software Engineer" {...a11yProps(0)} />
          <Tab label="Python Developer" {...a11yProps(1)} />
          <Tab label="QA Tester" {...a11yProps(2)} />
        </Tabs>
        <InterviewTabPanel value={interviewTab} index={0}>
          Software Engineer
        </InterviewTabPanel>
        <InterviewTabPanel value={interviewTab} index={1}>
          Python Developer
        </InterviewTabPanel>
        <InterviewTabPanel value={interviewTab} index={2}>
          QA Tester
        </InterviewTabPanel>
      </Paper>
    </Box>
  )
}

export default Interview
