import {
  Box,
  Card,
  Chip,
  Divider,
  Grid,
  IconButton,
  Link,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material"
import React, { useState } from "react"
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

const Profile = () => {
  const [profileEditMode, setProfileEditMode] = useState(false)
  const [candidateProfileModalShow, setCandidateProfileModalShow] =
    useState(false)
  const [verifyModalShow, setVerifyModalShow] = useState(false)
  const [positionModalShow, setPositionModalShow] = useState(false)

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

  const handleNewPosition = () => {}

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
                        <Typography variant="subtitle1">John Doe</Typography>
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
                          <BootstrapInput fullWidth value={"xxxx@gmail.com"} />
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
                          <Typography>xxxxx@gmail.com</Typography>
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
                    <Typography>50</Typography>
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
              <Card>
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
                        Software Engineer
                      </Typography>
                      <Typography variant="body2" color={"primary"}>
                        Moyi Tech
                      </Typography>
                      <Stack direction={"row"} alignItems="center" gap={0.5}>
                        <PlaceOutlinedIcon />
                        <Typography variant="body2" color="text.secondary">
                          New York, NY
                        </Typography>
                      </Stack>
                      <Stack direction={"row"} alignItems="center" gap={0.5}>
                        <CalendarMonthOutlinedIcon />
                        <Typography variant="body2" color="text.secondary">
                          Posted 8 hours ago
                        </Typography>
                      </Stack>
                      <Stack direction={"row"} alignItems="center" gap={0.5}>
                        <PermContactCalendarOutlinedIcon />
                        <Typography variant="body2" color="text.secondary">
                          Contract
                        </Typography>
                      </Stack>
                    </Box>
                    <IconButton>
                      <EditOutlined />
                    </IconButton>
                  </Stack>
                  <Typography color="text.secondary" variant="body2" p={2}>
                    Job Description: Software Engineer responsibilities include
                    gathering user requirements, defining system functionality
                    and writing code in various languages, like Java, Ruby on
                    Rails or .NET programming languages (e.g. C++ or
                    JScript.NET.) Our ideal candidates are familiar with the
                    software development life cycle (SDLC) from preliminary
                    system analysis to tests and deployment.
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
                        <Typography variant="subtitle1">Applicants</Typography>
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
                              label="13"
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
                            sx={{ px: 2, py: 1.8, textTransform: "capitalize" }}
                          >
                            Like
                            <Chip sx={{ ml: 1 }} label="6" size="small" />
                          </ToggleButton>
                          <ToggleButton
                            value="maybe"
                            aria-label="maybe"
                            sx={{ px: 2, py: 1.8, textTransform: "capitalize" }}
                          >
                            Maybe
                            <Chip sx={{ ml: 1 }} label="6" size="small" />
                          </ToggleButton>
                          <ToggleButton
                            value="igonore"
                            aria-label="ignore"
                            sx={{ px: 2, py: 1.8, textTransform: "capitalize" }}
                          >
                            Ignore
                            <Chip sx={{ ml: 1 }} label="1" size="small" />
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </Box>
                      <IconButton>
                        <KeyboardArrowDownOutlinedIcon />
                      </IconButton>
                    </Stack>
                    <Stack direction={"row"} m={2} gap={4}>
                      <Stack
                        alignItems={"center"}
                        gap={1}
                        onClick={() => setCandidateProfileModalShow(true)}
                      >
                        <Avatar flex={1} sx={{ width: 54, height: 54 }}>
                          {" "}
                        </Avatar>
                        <Typography variant="body2" color="text.secondary">
                          Smith
                        </Typography>
                      </Stack>
                      <Stack alignItems={"center"} gap={1}>
                        <Avatar flex={1} sx={{ width: 54, height: 54 }}>
                          {" "}
                        </Avatar>
                        <Typography variant="body2" color="text.secondary">
                          Smith
                        </Typography>
                      </Stack>
                      <Stack alignItems={"center"} gap={1}>
                        <Avatar flex={1} sx={{ width: 54, height: 54 }}>
                          {" "}
                        </Avatar>
                        <Typography variant="body2" color="text.secondary">
                          Smith
                        </Typography>
                      </Stack>
                      <Stack alignItems={"center"} gap={1}>
                        <Avatar flex={1} sx={{ width: 54, height: 54 }}>
                          {" "}
                        </Avatar>
                        <Typography variant="body2" color="text.secondary">
                          Smith
                        </Typography>
                      </Stack>
                      <Stack alignItems={"center"} gap={1}>
                        <Avatar flex={1} sx={{ width: 54, height: 54 }}>
                          {" "}
                        </Avatar>
                        <Typography variant="body2" color="text.secondary">
                          Smith
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </Card>
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
        <NewPosition />
      </Modal>
    </Box>
  )
}

export default Profile
