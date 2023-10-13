import {
  Alert,
  Box,
  Card,
  Chip,
  Divider,
  Grid,
  IconButton,
  Link,
  Paper,
  Snackbar,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import AppHeader from "../../components/AppHeader"
import { Stack } from "@mui/system"
import { Button } from "../../components/common/Button"
import { EditOutlined } from "@mui/icons-material"
import { Avatar } from "../../components/common/Avatar"
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined"
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined"
import Nav from "../../components/Nav"
import { BootstrapInput } from "../../components/common/BootstrapInput"
import { Modal } from "../../components/common/Modal"
import CandidateProfile from "./CandidateProfile"
import Verify from "./Verify"
import NewPosition from "./NewPosition"
import useSetting from "../../../features/setting/useSetting"
import { getRecruiterDetail } from "../../apis/recruiterDetail"
import { postJob } from "../../apis/job/postJob"

const Profile = () => {
  const { getSetting, setting } = useSetting()
  const [profileEditMode, setProfileEditMode] = useState(false)
  const [candidateProfileModalShow, setCandidateProfileModalShow] =
    useState(false)
  const [verifyModalShow, setVerifyModalShow] = useState(false)
  const [positionModalShow, setPositionModalShow] = useState(false)
  const [newPosition, setNewPosition] = useState({})
  const [postSuccess, setPostSuccess] = useState(false)
  const [user, setUser] = useState(null)
  const [postJobs, setPostJobs] = useState([])

  const refreshDetail = () => {
    getRecruiterDetail().then((detail) => {
      if (detail?.data?.jobs) {
        setPostJobs(detail.data.jobs)
      }
      if (detail?.data?.user) {
        setUser(detail.data.user)
      }
    })
  }

  useEffect(() => {
    refreshDetail()
  }, [setting])

  const onPositionChange = (position: object) => {
    setNewPosition(position)
  }

  const handleCandidateProfileModalClose = () => {
    setCandidateProfileModalShow(false)
  }

  const handleVerifyModalClose = () => {
    setVerifyModalShow(false)
  }

  const handlePositionModalClose = () => {
    setPositionModalShow(false)
  }

  const handleSaveCandidateProfile = () => {}

  const handleVerify = () => {}

  const handleNewPosition = () => {
    postJob(newPosition).then((response) => {
      if (response?.data) {
        setPostSuccess(true)
        refreshDetail()
      }
      setPositionModalShow(false)
    })
  }

  return (
    <Box sx={{ flexDirection: "column", height: "100vh" }}>
      <AppHeader />
      <Nav />
      <Paper sx={{ flexGrow: "1", m: 1 }}>
        <Stack direction={"column"}>
          <Box>
            <Button
              sx={{ float: "right", mx: 4, my: 3, mb: 0 }}
              variant="contained"
              shape="square"
              onClick={() => setPositionModalShow(true)}
            >
              Post New Position
            </Button>
          </Box>
          <Stack
            sx={{ padding: 2 }}
            direction={{ xl: "row", lg: "row", md: "row" }}
          >
            <Box flex={3} padding={2}>
              <Card title="test" sx={{ mb: 2 }}>
                <Stack divider={<Divider variant="middle" />}>
                  <Stack
                    direction={"row"}
                    paddingX={"20px"}
                    paddingY={"14px"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography variant="subtitle1">
                      Personal Details
                    </Typography>
                    <IconButton>
                      <EditOutlined onClick={() => setProfileEditMode(true)} />
                    </IconButton>
                  </Stack>
                  <Grid
                    container
                    alignItems={"center"}
                    justifyContent={"center"}
                    rowSpacing={1}
                    marginBottom={2}
                  >
                    <Grid item xs={3} sm={3} md={3} lg={3}>
                      <Avatar flex={1} sx={{ width: 82, height: 82, m: 3 }}>
                        {" "}
                      </Avatar>
                    </Grid>
                    <Grid item xs={9} sm={9} md={9} lg={9} paddingLeft={3}>
                      <Stack flex={2} justifyContent={"space-between"}>
                        <Typography variant="subtitle1">
                          {setting?.userName ?? "No Username"}
                        </Typography>
                        <Chip
                          label="Open to market"
                          variant="outlined"
                          color="primary"
                          sx={{ width: 105, height: 20 }}
                          onClick={() => setVerifyModalShow(true)}
                        />
                      </Stack>
                    </Grid>
                    {profileEditMode ? (
                      <Grid container mx={3} rowGap={2}>
                        <Grid item xs={12} sm={12} md={12}>
                          <Typography variant="subtitle2" fontWeight={"bold"}>
                            Email
                          </Typography>
                          <BootstrapInput fullWidth value={setting.email} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <Typography variant="subtitle2" fontWeight={"bold"}>
                            PhoneNumber
                          </Typography>
                          <BootstrapInput
                            fullWidth
                            value={"+1 (555) 000-0000"}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <Typography variant="subtitle2" fontWeight={"bold"}>
                            Company
                          </Typography>
                          <BootstrapInput fullWidth value={"MoYi Tech"} />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}></Grid>
                        <Grid item xs={6} sm={6} md={6}>
                          <Button
                            variant="outlined"
                            shape="square"
                            onClick={() => setProfileEditMode(false)}
                          >
                            Cancel
                          </Button>
                          <Button
                            sx={{ ml: 2 }}
                            variant="contained"
                            shape="square"
                            onClick={() => setProfileEditMode(false)}
                          >
                            Save
                          </Button>
                        </Grid>
                      </Grid>
                    ) : (
                      <>
                        <Grid
                          item
                          paddingLeft={4}
                          xs={3}
                          sm={3}
                          md={3}
                          lg={3}
                          alignItems="center"
                          justifyContent={"center"}
                        >
                          <Typography variant="subtitle2">Email</Typography>
                        </Grid>
                        <Grid item xs={9} sm={9} md={9} lg={9} paddingLeft={3}>
                          <Typography>{setting.email}</Typography>
                        </Grid>
                        <Grid
                          item
                          paddingLeft={4}
                          xs={3}
                          sm={3}
                          md={3}
                          lg={3}
                          alignItems="center"
                          justifyContent={"center"}
                        >
                          <Typography variant="subtitle2">Phone</Typography>
                        </Grid>
                        <Grid item xs={9} sm={9} md={9} lg={9} paddingLeft={3}>
                          <Typography>000-000-0000</Typography>
                        </Grid>
                        <Grid
                          item
                          paddingLeft={4}
                          xs={3}
                          sm={3}
                          md={3}
                          lg={3}
                          alignItems="center"
                          justifyContent={"center"}
                        >
                          <Typography variant="subtitle2">Company</Typography>
                        </Grid>
                        <Grid item xs={9} sm={9} md={9} lg={9} paddingLeft={3}>
                          <Typography>Moyi Tech</Typography>
                        </Grid>
                      </>
                    )}
                  </Grid>
                </Stack>
              </Card>
              <Card title="test" sx={{ mb: 2 }}>
                <Stack divider={<Divider variant="middle" />}>
                  <Stack
                    direction={"row"}
                    paddingX={"20px"}
                    paddingY={"14px"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography variant="subtitle1">Work Preference</Typography>
                    <IconButton onClick={() => {}}>
                      <EditOutlined />
                    </IconButton>
                  </Stack>
                </Stack>
                <Grid container m={3} rowGap={2}>
                  <Grid
                    item
                    xs={3}
                    sm={3}
                    md={3}
                    lg={3}
                    alignItems="center"
                    justifyContent={"center"}
                  >
                    <Typography variant="subtitle2">Total Credits</Typography>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4} paddingLeft={3}>
                    <Typography>{user?.credit}</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    sm={5}
                    md={5}
                    lg={5}
                    alignItems="center"
                    justifyContent={"center"}
                  >
                    <Link>Add More Credits</Link>
                  </Grid>
                </Grid>
              </Card>
            </Box>
            <Box flex={5} padding={2}>
              <Typography
                variant="subtitle1"
                fontWeight={"bold"}
                sx={{ mb: 1 }}
              >
                Posted Jobs
              </Typography>
              <Stack spacing={2}>
                {postJobs.length === 0 && (
                  <Typography>
                    No Posted Jobs, Click POST NEW POSITION to post a new job!
                  </Typography>
                )}
                {postJobs.map((job, index) => (
                  <Card key={index}>
                    <Stack divider={<Divider variant="middle" />}>
                      <Stack
                        direction={"row"}
                        paddingX={"20px"}
                        paddingY={"14px"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Box display={"flex"} alignItems={"center"} gap={2}>
                          <Typography variant="subtitle1">
                            {job.title}
                          </Typography>
                          <Typography variant="body2" color={"primary"}>
                            Moyi Tech
                          </Typography>
                          <Stack
                            direction={"row"}
                            alignItems="center"
                            gap={0.5}
                          >
                            <PlaceOutlinedIcon />
                            <Typography variant="body2" color="text.secondary">
                              {job.location}
                            </Typography>
                          </Stack>
                          <Stack
                            direction={"row"}
                            alignItems="center"
                            gap={0.5}
                          >
                            <CalendarMonthOutlinedIcon />
                            <Typography variant="body2" color="text.secondary">
                              {job.postTime}
                            </Typography>
                          </Stack>
                          <Stack
                            direction={"row"}
                            alignItems="center"
                            gap={0.5}
                          >
                            <PermContactCalendarOutlinedIcon />
                            <Typography variant="body2" color="text.secondary">
                              {job.jobType}
                            </Typography>
                          </Stack>
                        </Box>
                        <IconButton>
                          <EditOutlined />
                        </IconButton>
                      </Stack>
                      <Typography color="text.secondary" variant="body2" p={2}>
                        {job.description}
                      </Typography>
                      <Box>
                        <Stack
                          direction={"row"}
                          paddingX={"20px"}
                          paddingY={"14px"}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                        >
                          <Box display={"flex"} alignItems={"center"} gap={2}>
                            <Typography variant="subtitle1">
                              Applicants
                            </Typography>
                            <ToggleButtonGroup
                              value={"all"}
                              exclusive
                              onChange={() => {}}
                              aria-label="applicants"
                              size="small"
                              sx={{ height: "25px" }}
                            >
                              <ToggleButton
                                value="all"
                                aria-label="all"
                                sx={{
                                  px: 2,
                                  py: 1.8,
                                  textTransform: "capitalize",
                                }}
                              >
                                <Typography variant="body2" color="primary">
                                  All
                                </Typography>
                                <Chip
                                  label={job.applicants.length}
                                  size="small"
                                  sx={{
                                    ml: 1,
                                    color: "#A36307",
                                    backgroundColor: "rgba(253, 204, 13, 0.11)",
                                  }}
                                />
                              </ToggleButton>
                              <ToggleButton
                                value="like"
                                aria-label="like"
                                sx={{
                                  px: 2,
                                  py: 1.8,
                                  textTransform: "capitalize",
                                }}
                              >
                                Like
                                <Chip sx={{ ml: 1 }} label="0" size="small" />
                              </ToggleButton>
                              <ToggleButton
                                value="maybe"
                                aria-label="maybe"
                                sx={{
                                  px: 2,
                                  py: 1.8,
                                  textTransform: "capitalize",
                                }}
                              >
                                Maybe
                                <Chip sx={{ ml: 1 }} label="0" size="small" />
                              </ToggleButton>
                              <ToggleButton
                                value="igonore"
                                aria-label="ignore"
                                sx={{
                                  px: 2,
                                  py: 1.8,
                                  textTransform: "capitalize",
                                }}
                              >
                                Ignore
                                <Chip sx={{ ml: 1 }} label="0" size="small" />
                              </ToggleButton>
                            </ToggleButtonGroup>
                          </Box>
                          <IconButton>
                            <KeyboardArrowDownOutlinedIcon />
                          </IconButton>
                        </Stack>
                        <Stack direction={"row"} m={2} gap={4}>
                          {job.applicants.map((applicant) => (
                            <Stack alignItems={"center"} gap={1}>
                              <Avatar flex={1} sx={{ width: 54, height: 54 }}>
                                {" "}
                              </Avatar>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {applicant.applicantName}
                              </Typography>
                            </Stack>
                          ))}
                        </Stack>
                      </Box>
                    </Stack>
                  </Card>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Paper>
      <Modal
        width={800}
        title={"Candidate Profile"}
        open={candidateProfileModalShow}
        onClose={handleCandidateProfileModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        actionButtons={[
          <Button
            variant="contained"
            onClick={handleSaveCandidateProfile}
            key={"save"}
          >
            Save
          </Button>,
        ]}
      >
        <CandidateProfile />
      </Modal>
      <Modal
        width={700}
        title={"Verify Recruiter Info"}
        open={verifyModalShow}
        onClose={handleVerifyModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        actionButtons={[
          <Button variant="contained" onClick={handleVerify} key={"submit"}>
            Submit
          </Button>,
        ]}
      >
        <Verify />
      </Modal>
      <Modal
        width={700}
        title={"New Position"}
        open={positionModalShow}
        onClose={handlePositionModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        actionButtons={[
          <Button
            variant="contained"
            onClick={handleNewPosition}
            key={"submit"}
          >
            Submit
          </Button>,
        ]}
      >
        <NewPosition onChange={onPositionChange} />
      </Modal>
      <Snackbar
        open={postSuccess}
        autoHideDuration={3000}
        onClose={() => setPostSuccess(false)}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Post Successfully!
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Profile
