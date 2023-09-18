import { ExpandLess, ExpandMore } from "@mui/icons-material"
import {
  Box,
  Collapse,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Pagination,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material"
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
  const [interviewTab, setInterviewTab] = useState(0)
  const [resumeTab, setResumeTab] = useState(0)
  const [open, setOpen] = React.useState(true)

  const handleClick = () => {
    setOpen(!open)
  }
  const handleInterviewTabChange = (event, newTab: number) => {
    setInterviewTab(newTab)
  }
  const handleResumeTabChange = (event, newTab: number) => {
    setResumeTab(newTab)
  }
  return (
    <Box sx={{ flexDirection: "column", height: "100vh" }}>
      <AppHeader />
      <Nav />
      <Paper sx={{ flexGrow: "1", m: 1 }}>
        <Tabs
          value={interviewTab}
          onChange={handleInterviewTabChange}
          aria-label="interview tabs"
        >
          <Tab label="Software Engineer" {...a11yProps(0)} />
          <Tab label="Python Developer" {...a11yProps(1)} />
          <Tab label="QA Tester" {...a11yProps(2)} />
        </Tabs>
        <InterviewTabPanel value={interviewTab} index={0}>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Stack bgcolor={"#FAFAFA"} px={4} py={2} gap={2}>
                <Typography variant="subtitle1" fontWeight={"bold"}>
                  Job Description
                </Typography>
                <Typography variant="body1">
                  You can post your target position description on the
                  clipboard, our service can provide you with updated resume and
                  customized preparation material.
                </Typography>
                <Box height={500} overflow={"auto"} bgcolor="white">
                  <ul>
                    <Typography variant="body1" component={"li"}>
                      Develops information systems by designing, developing, and
                      installing software solutions.
                    </Typography>
                    <Typography variant="body1" component={"li"}>
                      Determines operational feasibility by evaluating analysis,
                      problem definition, requirements, solution development,
                      and proposed solutions.
                    </Typography>
                    <Typography variant="body1" component={"li"}>
                      Develops software solutions by studying information needs,
                      conferring with users, and studying systems flow, data
                      usage, and work processes.
                    </Typography>
                    <Typography variant="body1" component={"li"}>
                      Investigates problem areas.
                    </Typography>
                    <Typography variant="body1" component={"li"}>
                      Follows the software development lifecycle.
                    </Typography>
                    <Typography variant="body1" component={"li"}>
                      Documents and demonstrates solutions by developing
                      documentation, flowcharts, layouts, diagrams, charts, code
                      comments and clear code.
                    </Typography>
                    <Typography variant="body1" component={"li"}>
                      Prepares and installs solutions by determining and
                      designing system specifications, standards, and
                      programming.
                    </Typography>
                    <Typography variant="body1" component={"li"}>
                      Improves operations by conducting systems analysis and
                      recommending changes in policies and procedures.
                    </Typography>
                    <Typography variant="body1" component={"li"}>
                      Obtains and licenses software by obtaining required
                      information from vendors, recommending purchases, and
                      testing and approving products.
                    </Typography>
                    <Typography variant="body1" component={"li"}>
                      Protects operations by keeping information confidential.
                    </Typography>
                    <Typography variant="body1" component={"li"}>
                      Provides information by collecting, analyzing, and
                      summarizing development and service issues.
                    </Typography>
                    <Typography variant="body1" component={"li"}>
                      Accomplishes engineering and organization mission by
                      completing related results as needed.
                    </Typography>
                    <Typography variant="body1" component={"li"}>
                      Protects operations by keeping information confidential.
                    </Typography>
                    <Typography variant="body1" component={"li"}>
                      Provides information by collecting, analyzing, and
                      summarizing development and service issues.
                    </Typography>
                    <Typography variant="body1" component={"li"}>
                      Accomplishes engineering and organization mission by
                      completing related results as needed.
                    </Typography>
                  </ul>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <Stack bgcolor={"#FAFAFA"} px={4} py={2} gap={2}>
                <Typography variant="subtitle1" fontWeight={"bold"}>
                  Optimized Profile
                </Typography>
                <Typography variant="body1">
                  When you optimize the resume based on the job description, we
                  can provide you with the customized resume for your target
                  positions.
                </Typography>
                <Box height={500} overflow={"auto"} bgcolor="white">
                  <object
                    data="http://africau.edu/images/default/sample.pdf"
                    type="application/pdf"
                    width="100%"
                    height="100%"
                  >
                    <p>
                      Alternative text - include a link{" "}
                      <a href="http://africau.edu/images/default/sample.pdf">
                        to the PDF!
                      </a>
                    </p>
                  </object>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Stack bgcolor={"#FAFAFA"} px={4} py={2} gap={2}>
                <Typography variant="subtitle1" fontWeight={"bold"}>
                  Interview Preparation
                </Typography>
                <Typography variant="body1">
                  When you optimize the resume based on the job description, we
                  can provide you with the customized resume for your target
                  positions.
                </Typography>
                <Box
                  height={300}
                  overflow={"auto"}
                  bgcolor="white"
                  sx={{ display: "flex" }}
                >
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 200,
                      bgcolor: "background.paper",
                    }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                  >
                    <ListItemButton onClick={handleClick}>
                      <ListItemText primary="JAVA" />
                      {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemText primary="Data Structure" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemText primary="Programming Language" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemText primary="Syntax" />
                        </ListItemButton>
                      </List>
                    </Collapse>
                    <ListItemButton>
                      <ListItemText primary="Javascript" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary="SQL" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemText primary="Machine Learning" />
                    </ListItemButton>
                  </List>
                  <InterviewTabPanel value={resumeTab} index={0}>
                    <ul>
                      <Typography variant="body1" component={"li"}>
                        Develops information systems by designing, developing,
                        and installing software solutions.
                      </Typography>
                      <Typography variant="body1" component={"li"}>
                        Determines operational feasibility by evaluating
                        analysis, problem definition, requirements, solution
                        development, and proposed solutions.
                      </Typography>
                      <Typography variant="body1" component={"li"}>
                        Develops software solutions by studying information
                        needs, conferring with users, and studying systems flow,
                        data usage, and work processes.
                      </Typography>
                      <Typography variant="body1" component={"li"}>
                        Investigates problem areas.
                      </Typography>
                      <Typography variant="body1" component={"li"}>
                        Follows the software development lifecycle.
                      </Typography>
                      <Typography variant="body1" component={"li"}>
                        Documents and demonstrates solutions by developing
                        documentation, flowcharts, layouts, diagrams, charts,
                        code comments and clear code.
                      </Typography>
                      <Typography variant="body1" component={"li"}>
                        Prepares and installs solutions by determining and
                        designing system specifications, standards, and
                        programming.
                      </Typography>
                    </ul>
                    <Pagination count={10} color="primary" />
                  </InterviewTabPanel>
                  <InterviewTabPanel value={resumeTab} index={1}>
                    QA Tester
                  </InterviewTabPanel>
                </Box>
              </Stack>
            </Grid>
          </Grid>
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
