import {
  Box,
  Card,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  Link,
  Paper,
  Typography,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import AppHeader from "../../components/AppHeader"
import { Stack } from "@mui/system"
import { Button } from "../../components/common/Button"
import { DeleteOutline, EditOutlined } from "@mui/icons-material"
import { Avatar } from "../../components/common/Avatar"
import { Chip } from "../../components/common/Chip"
import { BootstrapInput } from "../../components/common/BootstrapInput"
import Nav from "../../components/Nav"
import Select from "react-select"
import useSetting from "../../../features/setting/useSetting"
import { getCandidateDetail } from "../../apis/candidate/candidateDetail"
import { updateCandidate } from "../../apis/candidate/updateCandidate"
import { useSelector } from "react-redux"
import { selectAccessToken } from "../../../features/authorization/authorizationSlice"
import { addExperiences, Experience } from "../../apis/candidate/addExperiences"
import _ from "lodash"
import { updateExperiences } from "../../apis/candidate/updateExperiences"
import { deleteExperiences } from "../../apis/candidate/deleteExperiences"

const Profile = () => {
  const [profileEditMode, setProfileEditMode] = useState(false)
  const [workPreferenceEditMode, setWorkPreferenceEditMode] = useState(false)
  const [educationEditMode, setEducationEditMode] = useState(false)
  const [skillEditMode, setSkillEditMode] = useState(false)
  const [aboutEditMode, setAboutEditMode] = useState(false)
  const [workExperienceEditMode, setWorkExperienceEditMode] = useState(false)
  const [candidateDetail, setCandidateDetail] = useState(null)
  const [newCandidateDetail, setNewCandidateDetail] = useState(null)
  const { getSetting, setting } = useSetting()
  const access_token = useSelector(selectAccessToken)

  const refreshCandidateDetail = () => {
    getCandidateDetail(access_token).then((response) => {
      if (response.data) {
        setCandidateDetail(response.data)
      }
    })
  }

  useEffect(() => {
    refreshCandidateDetail()
  }, [])

  useEffect(() => {
    if (candidateDetail) {
      if (
        profileEditMode ||
        workPreferenceEditMode ||
        educationEditMode ||
        skillEditMode ||
        aboutEditMode ||
        workExperienceEditMode
      ) {
        setNewCandidateDetail(candidateDetail)
      } else {
        setNewCandidateDetail(null)
      }
    }
  }, [
    candidateDetail,
    profileEditMode,
    workPreferenceEditMode,
    educationEditMode,
    skillEditMode,
    aboutEditMode,
    workExperienceEditMode,
  ])

  const handleCandidateDetailSave = () => {
    updateCandidate(newCandidateDetail).then((response) => {
      if (response.data !== undefined) {
        refreshCandidateDetail()
      }
    })
  }

  const handleExperiencesSave = () => {
    const oldExperiences = candidateDetail?.experiences
    const newExperiences = newCandidateDetail?.experiences

    const addedExperiences = _.differenceWith(
      newExperiences,
      oldExperiences,
      _.isEqual,
    )

    const removedExperiences = _.differenceWith(
      oldExperiences,
      newExperiences,
      _.isEqual,
    )

    const updatedExperiences = _.intersectionBy(
      newExperiences,
      oldExperiences,
      "id",
    )

    // format startDate and end Date
    _.forEach(addedExperiences, (experience) => {
      experience.startDate = new Date(experience.startDate).toISOString()
      experience.endDate = new Date(experience.endDate).toISOString()
    })
    _.forEach(removedExperiences, (experience) => {
      experience.startDate = new Date(experience.startDate).toISOString()
      experience.endDate = new Date(experience.endDate).toISOString()
    })
    _.forEach(updatedExperiences, (experience) => {
      experience.startDate = new Date(experience.startDate).toISOString()
      experience.endDate = new Date(experience.endDate).toISOString()
    })

    if (addExperiences.length > 0) {
      addExperiences(addedExperiences).then((response) => {
        if (response.data !== undefined) {
          refreshCandidateDetail()
        }
      })
    }

    if (updatedExperiences.length > 0) {
      updateExperiences(updatedExperiences).then((response) => {
        if (response.data !== undefined) {
          refreshCandidateDetail()
        }
      })
    }

    if (deleteExperiences.length > 0) {
      deleteExperiences(
        removedExperiences.map((experience) => experience.id),
      ).then((response) => {
        if (response.data !== undefined) {
          refreshCandidateDetail()
        }
      })
    }
  }

  const handleEducationsSave = () => {}

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
            >
              Download Resume
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
                    <Typography variant="subtitle1">Profile</Typography>
                    <IconButton onClick={() => setProfileEditMode(true)}>
                      <EditOutlined />
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
                        <Typography variant="subtitle1" ml={3}>
                          {setting.userName ?? "No username"}
                        </Typography>
                        <Chip
                          label="Open to market"
                          variant="outlined"
                          color="primary"
                          sx={{ width: 105, height: 20, ml: 3 }}
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
                        <Grid item xs={6} sm={6} md={6}>
                          <Typography variant="subtitle2" fontWeight={"bold"}>
                            City
                          </Typography>
                          <BootstrapInput>12/24</BootstrapInput>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                          <Typography variant="subtitle2" fontWeight={"bold"}>
                            State
                          </Typography>
                          <BootstrapInput>234</BootstrapInput>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <Typography variant="subtitle2" fontWeight={"bold"}>
                            LinkedIn
                          </Typography>
                          <BootstrapInput fullWidth value={"http://"} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <Typography variant="subtitle2" fontWeight={"bold"}>
                            Resume
                          </Typography>
                          <BootstrapInput fullWidth value={""} />
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
                          <Typography>{setting.phone}</Typography>
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
                          <Typography variant="subtitle2">Location</Typography>
                        </Grid>
                        <Grid item xs={9} sm={9} md={9} lg={9} paddingLeft={3}>
                          <Typography>{setting.location}</Typography>
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
                          <Typography variant="subtitle2">Linkedin</Typography>
                        </Grid>
                        <Grid item xs={9} sm={9} md={9} lg={9} paddingLeft={3}>
                          <Typography>{setting.linkedIn}</Typography>
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
                          <Typography variant="subtitle2">Resume</Typography>
                        </Grid>
                        <Grid item xs={9} sm={9} md={9} lg={9} paddingLeft={3}>
                          <Typography>
                            <Link>{candidateDetail?.uploadedResume}</Link>
                          </Typography>
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
                    <IconButton onClick={() => setWorkPreferenceEditMode(true)}>
                      <EditOutlined />
                    </IconButton>
                  </Stack>
                  {workPreferenceEditMode ? (
                    <Grid container padding={3} rowGap={2}>
                      <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="subtitle2" fontWeight={"bold"}>
                          Desired Job
                        </Typography>
                        <BootstrapInput
                          fullWidth
                          onChange={(e) => {
                            setNewCandidateDetail({
                              ...newCandidateDetail,
                              desiredJob: e.target.value,
                            })
                          }}
                          value={newCandidateDetail?.desiredJob}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="subtitle2" fontWeight={"bold"}>
                          Work Authorization
                        </Typography>
                        <Select
                          options={[
                            { label: "H1B", value: "H1B" },
                            { label: "Green Card", value: "Green Card" },
                          ]}
                          value={{
                            label: newCandidateDetail?.workAuth,
                            value: newCandidateDetail?.workAuth,
                          }}
                          onChange={(workAuth) => {
                            setNewCandidateDetail({
                              ...newCandidateDetail,
                              workAuth: workAuth.value,
                            })
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="subtitle2" fontWeight={"bold"}>
                          Open to Relocation
                        </Typography>
                        <Select
                          options={[
                            { label: "Yes", value: "Yes" },
                            { label: "No", value: "No" },
                          ]}
                          value={
                            newCandidateDetail?.relocation
                              ? { label: "Yes", value: "Yes" }
                              : { label: "No", value: "No" }
                          }
                          onChange={(relocation) => {
                            setNewCandidateDetail({
                              ...newCandidateDetail,
                              relocation:
                                relocation.value === "Yes" ? true : false,
                            })
                          }}
                        />
                      </Grid>
                      <Grid item xs={6} sm={6} md={6}></Grid>
                      <Grid item xs={6} sm={6} md={6}>
                        <Button
                          variant="outlined"
                          shape="square"
                          onClick={() => setWorkPreferenceEditMode(false)}
                        >
                          Cancel
                        </Button>
                        <Button
                          sx={{ ml: 2 }}
                          variant="contained"
                          shape="square"
                          onClick={() => {
                            handleCandidateDetailSave()
                            setWorkPreferenceEditMode(false)
                          }}
                        >
                          Save
                        </Button>
                      </Grid>
                    </Grid>
                  ) : (
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
                        <Typography variant="subtitle2">Desired Job</Typography>
                      </Grid>
                      <Grid item xs={9} sm={9} md={9} lg={9} paddingLeft={3}>
                        <Typography>{candidateDetail?.desiredJob}</Typography>
                      </Grid>
                      <Grid
                        item
                        xs={3}
                        sm={3}
                        md={3}
                        lg={3}
                        alignItems="center"
                        justifyContent={"center"}
                      >
                        <Typography variant="subtitle2">Work Auth</Typography>
                      </Grid>
                      <Grid item xs={9} sm={9} md={9} lg={9} paddingLeft={3}>
                        <Typography>{candidateDetail?.workAuth}</Typography>
                      </Grid>
                      <Grid
                        item
                        xs={3}
                        sm={3}
                        md={3}
                        lg={3}
                        alignItems="center"
                        justifyContent={"center"}
                      >
                        <Typography variant="subtitle2">
                          Open to Relocation
                        </Typography>
                      </Grid>
                      <Grid item xs={9} sm={9} md={9} lg={9} paddingLeft={3}>
                        <Typography>
                          {candidateDetail?.relocation ? "Yes" : "No"}
                        </Typography>
                      </Grid>
                    </Grid>
                  )}
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
                    <Typography variant="subtitle1">Education</Typography>
                    <IconButton onClick={() => setEducationEditMode(true)}>
                      <EditOutlined />
                    </IconButton>
                  </Stack>
                  {educationEditMode ? (
                    <>
                      <Stack divider={<Divider variant="middle" />}>
                        <Grid container padding={3} rowGap={2}>
                          <Grid item xs={12} sm={12} md={12}>
                            <Typography variant="subtitle1" fontWeight={"bold"}>
                              School
                            </Typography>
                            <BootstrapInput
                              fullWidth
                              value={"New York University"}
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12}>
                            <Typography variant="subtitle2" fontWeight={"bold"}>
                              Degree
                            </Typography>
                            <Select
                              options={[
                                { label: "Master", value: "Master" },
                                { label: "Bachelor", value: "Bachelor" },
                              ]}
                              value={{ label: "Master", value: "Master" }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12}>
                            <Typography variant="subtitle2" fontWeight={"bold"}>
                              Field of Study
                            </Typography>
                            <BootstrapInput
                              fullWidth
                              value={"Computer Science"}
                            />
                          </Grid>
                          <Grid item xs={6} sm={6} md={6}>
                            <Typography variant="subtitle2" fontWeight={"bold"}>
                              Start
                            </Typography>
                            <BootstrapInput>2018</BootstrapInput>
                          </Grid>
                          <Grid item xs={6} sm={6} md={6}>
                            <Typography variant="subtitle2" fontWeight={"bold"}>
                              End
                            </Typography>
                            <BootstrapInput>2020</BootstrapInput>
                          </Grid>
                        </Grid>
                        <Grid container padding={3} rowGap={2}>
                          <Grid item xs={12} sm={12} md={12}>
                            <Typography variant="subtitle1" fontWeight={"bold"}>
                              School
                            </Typography>
                            <BootstrapInput
                              fullWidth
                              value={"New York University"}
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12}>
                            <Typography variant="subtitle2" fontWeight={"bold"}>
                              Degree
                            </Typography>
                            <Select
                              options={[
                                { label: "Master", value: "Master" },
                                { label: "Bachelor", value: "Bachelor" },
                              ]}
                              value={{ label: "Master", value: "Master" }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={12} md={12}>
                            <Typography variant="subtitle2" fontWeight={"bold"}>
                              Field of Study
                            </Typography>
                            <BootstrapInput
                              fullWidth
                              value={"Computer Science"}
                            />
                          </Grid>
                          <Grid item xs={6} sm={6} md={6}>
                            <Typography variant="subtitle2" fontWeight={"bold"}>
                              Start
                            </Typography>
                            <BootstrapInput>2018</BootstrapInput>
                          </Grid>
                          <Grid item xs={6} sm={6} md={6}>
                            <Typography variant="subtitle2" fontWeight={"bold"}>
                              End
                            </Typography>
                            <BootstrapInput>2020</BootstrapInput>
                          </Grid>
                        </Grid>
                      </Stack>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          p: 4,
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={{ width: 100, justifySelf: "center" }}
                          shape={"square"}
                        >
                          Add New
                        </Button>
                      </Box>
                      <Box>
                        <Button
                          variant="contained"
                          sx={{ m: 1, width: 50, float: "right" }}
                          shape={"square"}
                          onClick={() => setEducationEditMode(false)}
                        >
                          Save
                        </Button>
                        <Button
                          variant="outlined"
                          sx={{ m: 1, width: 50, float: "right" }}
                          shape={"square"}
                          onClick={() => setEducationEditMode(false)}
                        >
                          Cancel
                        </Button>
                      </Box>
                    </>
                  ) : (
                    <Grid container m={3} rowGap={2}>
                      <Grid
                        item
                        xs={5}
                        sm={5}
                        md={5}
                        lg={5}
                        alignItems="center"
                        justifyContent={"center"}
                      >
                        <Typography variant="subtitle1">
                          XXX University
                        </Typography>
                        <Typography variant="subtitle2">
                          Master in Computer Science
                        </Typography>
                      </Grid>
                      <Grid
                        textAlign={"center"}
                        item
                        xs={7}
                        sm={7}
                        md={7}
                        lg={7}
                        paddingLeft={3}
                      >
                        <Typography variant="subtitle2">2016 - 2020</Typography>
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
                        <Typography variant="subtitle1">
                          XXX University
                        </Typography>
                        <Typography variant="subtitle2">
                          Bachelor in Computer Science
                        </Typography>
                      </Grid>
                      <Grid
                        textAlign={"center"}
                        item
                        xs={7}
                        sm={7}
                        md={7}
                        lg={7}
                        paddingLeft={3}
                      >
                        <Typography variant="subtitle2">2016 - 2020</Typography>
                      </Grid>
                    </Grid>
                  )}
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
                    <Typography variant="subtitle1">Skills</Typography>
                    <IconButton>
                      <EditOutlined />
                    </IconButton>
                  </Stack>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    useFlexGap
                    flexWrap="wrap"
                  >
                    <Chip sx={{ m: 2 }} label="Front End" onDelete={() => {}} />
                    <Chip
                      sx={{ m: 2 }}
                      label="Machine Learning"
                      onDelete={() => {}}
                    />
                    <Chip sx={{ m: 2 }} label="C++" onDelete={() => {}} />
                  </Stack>
                </Stack>
              </Card>
            </Box>
            <Box flex={5} padding={2}>
              <Card title="test" sx={{ mb: 2 }}>
                <Stack divider={<Divider variant="middle" />}>
                  <Stack
                    direction={"row"}
                    paddingX={"20px"}
                    paddingY={"14px"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography variant="subtitle1">About Me</Typography>
                    <IconButton onClick={() => setAboutEditMode(true)}>
                      <EditOutlined />
                    </IconButton>
                  </Stack>
                  {aboutEditMode ? (
                    <Stack padding={2}>
                      <Typography variant="subtitle2">Description</Typography>
                      <BootstrapInput
                        multiline
                        value={newCandidateDetail?.summary}
                        onChange={(e) => {
                          setNewCandidateDetail({
                            ...newCandidateDetail,
                            summary: e.target.value,
                          })
                        }}
                      />
                      <Box>
                        <Button
                          variant="contained"
                          sx={{ m: 1, width: 50, float: "right" }}
                          shape={"square"}
                          onClick={() => {
                            handleCandidateDetailSave()
                            setAboutEditMode(false)
                          }}
                        >
                          Save
                        </Button>
                        <Button
                          variant="outlined"
                          sx={{ m: 1, width: 50, float: "right" }}
                          shape={"square"}
                          onClick={() => setAboutEditMode(false)}
                        >
                          Cancel
                        </Button>
                      </Box>
                    </Stack>
                  ) : (
                    <Typography padding={2} color={"gray"}>
                      {candidateDetail?.summary ?? "No Summary"}
                    </Typography>
                  )}
                </Stack>
              </Card>
              <Card>
                <Stack>
                  <Stack
                    direction={"row"}
                    paddingX={"20px"}
                    paddingY={"14px"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography variant="subtitle1">
                      Working Experience
                    </Typography>
                    <IconButton onClick={() => setWorkExperienceEditMode(true)}>
                      <EditOutlined />
                    </IconButton>
                  </Stack>
                  <Divider variant="middle" />
                  {workExperienceEditMode ? (
                    <>
                      <Stack divider={<Divider variant="middle" />}>
                        {newCandidateDetail?.experiences?.length > 0 ? (
                          newCandidateDetail.experiences.map(
                            (experience, index) => (
                              <Stack direction={"row"} alignItems={"center"}>
                                <Grid container spacing={2} padding={3}>
                                  <IconButton
                                    sx={{ position: "absolute", right: 60 }}
                                  >
                                    <DeleteOutline
                                      color="error"
                                      onClick={() => {
                                        const newExperiences = [
                                          ...newCandidateDetail.experiences,
                                        ]
                                        newExperiences.splice(index, 1)
                                        setNewCandidateDetail({
                                          ...newCandidateDetail,
                                          experiences: newExperiences,
                                        })
                                      }}
                                    />
                                  </IconButton>
                                  <Grid item xs={5} md={5}>
                                    <FormControl
                                      variant="standard"
                                      sx={{ width: "100%" }}
                                    >
                                      <InputLabel shrink>
                                        Company Name
                                      </InputLabel>
                                      <BootstrapInput
                                        onChange={(e) => {
                                          const newExperiences = [
                                            ...newCandidateDetail.experiences,
                                          ]
                                          newExperiences[index].company =
                                            e.target.value
                                          setNewCandidateDetail({
                                            ...newCandidateDetail,
                                            experiences: newExperiences,
                                          })
                                        }}
                                        value={experience.company}
                                      />
                                    </FormControl>
                                  </Grid>
                                  <Grid item xs={5} md={5}>
                                    <FormControl
                                      variant="standard"
                                      sx={{ width: "100%" }}
                                    >
                                      <InputLabel shrink>Job Title</InputLabel>
                                      <BootstrapInput
                                        onChange={(e) => {
                                          const newExperiences = [
                                            ...newCandidateDetail.experiences,
                                          ]
                                          newExperiences[index].title =
                                            e.target.value
                                          setNewCandidateDetail({
                                            ...newCandidateDetail,
                                            experiences: newExperiences,
                                          })
                                        }}
                                        value={experience.title}
                                      />
                                    </FormControl>
                                  </Grid>
                                  <Grid item xs={2.5} md={2.5}>
                                    <FormControl
                                      variant="standard"
                                      sx={{ width: "100%" }}
                                    >
                                      <InputLabel shrink>Start</InputLabel>
                                      <BootstrapInput
                                        onChange={(e) => {
                                          const newExperiences = [
                                            ...newCandidateDetail.experiences,
                                          ]
                                          newExperiences[index].startDate =
                                            e.target.value
                                          setNewCandidateDetail({
                                            ...newCandidateDetail,
                                            experiences: newExperiences,
                                          })
                                        }}
                                        value={experience.startDate}
                                      />
                                    </FormControl>
                                  </Grid>
                                  <Grid item xs={2.5} md={2.5}>
                                    <FormControl
                                      variant="standard"
                                      sx={{ width: "100%" }}
                                    >
                                      <InputLabel shrink>End</InputLabel>
                                      <BootstrapInput
                                        onChange={(e) => {
                                          const newExperiences = [
                                            ...newCandidateDetail.experiences,
                                          ]
                                          newExperiences[index].endDate =
                                            e.target.value
                                          setNewCandidateDetail({
                                            ...newCandidateDetail,
                                            experiences: newExperiences,
                                          })
                                        }}
                                        value={experience.endDate}
                                      />
                                    </FormControl>
                                  </Grid>
                                  <Grid item xs={5} md={5}>
                                    <FormControl
                                      variant="standard"
                                      sx={{ width: "100%" }}
                                    >
                                      <InputLabel shrink>Key Words</InputLabel>
                                      <BootstrapInput
                                        onChange={(e) => {
                                          const newExperiences = [
                                            ...newCandidateDetail.experiences,
                                          ]
                                          newExperiences[index].keywords =
                                            e.target.value
                                          setNewCandidateDetail({
                                            ...newCandidateDetail,
                                            experiences: newExperiences,
                                          })
                                        }}
                                        value={experience.keywords}
                                      />
                                    </FormControl>
                                  </Grid>
                                  <Grid item xs={12} md={12}>
                                    <FormControl
                                      variant="standard"
                                      sx={{ width: "100%" }}
                                    >
                                      <InputLabel shrink>
                                        Job Responsibility
                                      </InputLabel>
                                      <BootstrapInput
                                        multiline
                                        minRows={6}
                                        onChange={(e) => {
                                          const newExperiences = [
                                            ...newCandidateDetail.experiences,
                                          ]
                                          newExperiences[index].description =
                                            e.target.value
                                          setNewCandidateDetail({
                                            ...newCandidateDetail,
                                            experiences: newExperiences,
                                          })
                                        }}
                                        value={experience.description}
                                      />
                                    </FormControl>
                                  </Grid>
                                  <Box sx={{ width: "100%" }}>
                                    <Button
                                      variant="outlined"
                                      sx={{ width: 200, float: "right" }}
                                      shape="square"
                                    >
                                      Improve with AI
                                    </Button>
                                  </Box>
                                </Grid>
                              </Stack>
                            ),
                          )
                        ) : (
                          <Typography
                            mt={4}
                            variant="subtitle2"
                            textAlign={"center"}
                          >
                            Add your experience here.
                          </Typography>
                        )}
                      </Stack>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          p: 4,
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={{ width: 100, justifySelf: "center" }}
                          shape={"square"}
                          onClick={() => {
                            setNewCandidateDetail({
                              ...newCandidateDetail,
                              experiences: [
                                ...newCandidateDetail.experiences,
                                {
                                  id: newCandidateDetail.experiences.length + 1,
                                  candidateId: newCandidateDetail.id,
                                  title: "",
                                  company: "",
                                  startDate: "",
                                  endDate: "",
                                  keywords: "",
                                  description: "",
                                },
                              ],
                            })
                          }}
                        >
                          Add New
                        </Button>
                      </Box>
                      <Box>
                        <Button
                          variant="contained"
                          sx={{ m: 1, width: 50, float: "right" }}
                          shape={"square"}
                          onClick={() => {
                            handleExperiencesSave()
                            setWorkExperienceEditMode(false)
                          }}
                        >
                          Save
                        </Button>
                        <Button
                          variant="outlined"
                          sx={{ m: 1, width: 50, float: "right" }}
                          shape={"square"}
                          onClick={() => setWorkExperienceEditMode(false)}
                        >
                          Cancel
                        </Button>
                      </Box>
                    </>
                  ) : (
                    <Stack divider={<Divider variant="middle" />}>
                      {candidateDetail?.experiences?.length > 0 ? (
                        candidateDetail.experiences.map((experience) => (
                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            paddingY={3}
                          >
                            <Avatar
                              flex={1}
                              sx={{
                                width: 47,
                                height: 47,
                                m: 2,
                                mr: 4,
                                alignSelf: "flex-start",
                              }}
                            >
                              {" "}
                            </Avatar>
                            <Stack
                              flex={2}
                              sx={{ mt: 1 }}
                              justifyContent={"space-between"}
                            >
                              <Typography variant="subtitle1">
                                {experience.company}
                              </Typography>
                              <Typography variant="subtitle2">
                                {experience.title} {experience.startDate}-
                                {experience.endDate}
                              </Typography>
                              <Typography variant="subtitle2" mb={1}>
                                {experience.location}
                              </Typography>
                              <Typography component={"ul"} sx={{ pl: 1 }}>
                                {experience.description}
                              </Typography>
                            </Stack>
                          </Stack>
                        ))
                      ) : (
                        <Typography
                          variant="subtitle2"
                          p={4}
                          textAlign={"center"}
                        >
                          No Working Experience.
                        </Typography>
                      )}
                    </Stack>
                  )}
                </Stack>
              </Card>
            </Box>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  )
}

export default Profile
