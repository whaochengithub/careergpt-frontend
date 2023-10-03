import {
  Alert,
  Box,
  Card,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  Paper,
  Snackbar,
  Stack,
  Typography,
  useTheme,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import AppHeader from "../../components/AppHeader"
import Nav from "../../components/Nav"
import Select from "react-select"
import { Button } from "../../components/common/Button"
import { BootstrapInput } from "../../components/common/BootstrapInput"
import { EditOutlined } from "@mui/icons-material"

import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined"
import { getJobs } from "../../apis/job/search"
import { applyJob } from "../../apis/job/applyJob"
import useSetting from "../../../features/setting/useSetting"

type Props = {}

const JobApplication = (props: Props) => {
  const theme = useTheme()
  const { setting } = useSetting()
  const [keyword, setKeyword] = useState("")
  const [applySuccess, setApplySuccess] = useState(false)
  const [jobs, setJobs] = useState([])
  const [selectedJob, setSelectedJob] = useState(null)

  useEffect(() => {
    getJobs("").then((jobs) => {
      if (jobs?.data) {
        setJobs(jobs.data)
      }
    })
  }, [])

  const handleApply = () => {
    applyJob({
      jobId: selectedJob?.id,
      applicantId: setting.id,
      applicantName: setting.email,
      status: "applied",
    }).then((response) => {
      if (response.data) {
        setApplySuccess(true)
        setTimeout(() => setApplySuccess(false), 6000)
      }
    })
  }

  const handleSearch = () => {
    getJobs(keyword).then((jobs) => {
      if (jobs?.data) {
        setJobs(jobs.data)
      }
    })
  }

  return (
    <Box sx={{ flexDirection: "column", height: "100vh" }}>
      <AppHeader />
      <Nav />
      <Paper sx={{ flexGrow: "1", m: 1, p: 3 }}>
        <Stack gap={2}>
          <Box display={"flex"} alignItems="flex-end" gap={3}>
            <FormControl variant="standard">
              <InputLabel shrink htmlFor="bootstrap-input">
                Job Title, Keywords, Company
              </InputLabel>
              <BootstrapInput
                placeholder="Search by job title, keywords"
                id="bootstrap-input"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                sx={{ width: 400 }}
              />
            </FormControl>
            <FormControl variant="standard">
              <InputLabel shrink htmlFor="bootstrap-input">
                Location
              </InputLabel>
              <BootstrapInput
                placeholder="Search location"
                id="bootstrap-input"
                sx={{ width: 400 }}
              />
            </FormControl>
            <Button
              variant="outlined"
              shape="square"
              sx={{ color: theme.palette.primary.main }}
              onClick={handleSearch}
            >
              Search
            </Button>
          </Box>
          <Stack direction={"row"} gap={2}>
            <Box width={140}>
              <Select
                placeholder={"Date Posted"}
                options={[
                  { label: "Date Posted", value: "date" },
                  { label: "Green Card", value: "Green Card" },
                ]}
                value={null}
              />
            </Box>
            <Box width={120}>
              <Select
                placeholder={"Job Type"}
                options={[
                  { label: "Job Type", value: "type" },
                  { label: "Green Card", value: "Green Card" },
                ]}
                value={null}
              />
            </Box>
          </Stack>
          <Grid container spacing={2}>
            <Grid item xs={5} sm={5} md={5} lg={5}>
              <Stack gap={2}>
                {jobs.map((job) => (
                  <Card key={`${job.id}`} onClick={() => setSelectedJob(job)}>
                    <Stack
                      direction={"row"}
                      paddingX={"10px"}
                      paddingY={"14px"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      fontSize={"0.2em"}
                    >
                      <Box display={"flex"} alignItems={"center"} gap={1}>
                        <Typography variant="subtitle1">{job.title}</Typography>
                        <Typography variant="body2" color={"primary"}>
                          Moyi Tech
                        </Typography>
                        <Stack direction={"row"} alignItems="center" gap={0.5}>
                          <PlaceOutlinedIcon />
                          <Typography variant="body2" color="text.secondary">
                            {job.location}
                          </Typography>
                        </Stack>
                        <Stack direction={"row"} alignItems="center" gap={0.5}>
                          <CalendarMonthOutlinedIcon />
                          <Typography variant="body2" color="text.secondary">
                            {job.postTime}
                          </Typography>
                        </Stack>
                        <Stack direction={"row"} alignItems="center" gap={0.5}>
                          <PermContactCalendarOutlinedIcon />
                          <Typography variant="body2" color="text.secondary">
                            {job.jobType}
                          </Typography>
                        </Stack>
                      </Box>
                    </Stack>
                    <Typography color="text.secondary" variant="body2" p={2}>
                      {job.description}
                    </Typography>
                  </Card>
                ))}
              </Stack>
            </Grid>
            {selectedJob && (
              <Grid item xs={7} sm={7} md={7} lg={7}>
                <Card>
                  <Stack
                    direction={"row"}
                    paddingX={"10px"}
                    paddingY={"14px"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    fontSize={"0.2em"}
                  >
                    <Box display={"flex"} alignItems={"center"} gap={1}>
                      <Typography variant="subtitle1">
                        {selectedJob.title}
                      </Typography>
                      <Typography variant="body2" color={"primary"}>
                        Moyi Tech
                      </Typography>
                      <Stack direction={"row"} alignItems="center" gap={0.5}>
                        <PlaceOutlinedIcon />
                        <Typography variant="body2" color="text.secondary">
                          {selectedJob.location}
                        </Typography>
                      </Stack>
                      <Stack direction={"row"} alignItems="center" gap={0.5}>
                        <CalendarMonthOutlinedIcon />
                        <Typography variant="body2" color="text.secondary">
                          {selectedJob.postTime}
                        </Typography>
                      </Stack>
                      <Stack direction={"row"} alignItems="center" gap={0.5}>
                        <PermContactCalendarOutlinedIcon />
                        <Typography variant="body2" color="text.secondary">
                          {selectedJob.jobType}
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>
                  <Stack m={1} direction={"row"} spacing={2}>
                    <Button
                      variant="contained"
                      shape={"square"}
                      onClick={handleApply}
                    >
                      Apply
                    </Button>
                    <Button variant="outlined" shape={"square"}>
                      Prepare for Interview
                    </Button>
                    <Button variant="outlined" shape={"square"}>
                      Recruiter Info
                    </Button>
                  </Stack>
                  <Typography color="text.secondary" variant="body2" p={2}>
                    Job Description: {selectedJob.description}.
                  </Typography>
                </Card>
              </Grid>
            )}
          </Grid>
        </Stack>
      </Paper>
      <Snackbar open={applySuccess} autoHideDuration={6000}>
        <Alert severity="success" sx={{ width: "100%" }}>
          Apply Successfully!
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default JobApplication
