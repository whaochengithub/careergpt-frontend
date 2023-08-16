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
import React from "react"
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

const Profile = () => {
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
                      <EditOutlined />
                    </IconButton>
                  </Stack>
                  <Stack direction={"row"} alignItems={"center"}>
                    <Avatar flex={1} sx={{ width: 82, height: 82, m: 3 }}>
                      {" "}
                    </Avatar>
                    <Stack flex={2} justifyContent={"space-between"}>
                      <Typography variant="subtitle1" mb={1}>
                        John Doe
                      </Typography>
                      <Box>
                        <Typography color="text.secondary" variant="body2">
                          Software Engineer in New York, NY
                        </Typography>
                        <Typography color="text.secondary" variant="body2">
                          888-888-8888
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
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
                            sx={{ px: 2, py: 1.8 }}
                          >
                            All
                            <Chip
                              sx={{ ml: 1 }}
                              label="13"
                              size="small"
                              color="warning"
                            />
                          </ToggleButton>
                          <ToggleButton
                            value="like"
                            aria-label="like"
                            sx={{ px: 2, py: 1.8 }}
                          >
                            Like
                            <Chip sx={{ ml: 1 }} label="6" size="small" />
                          </ToggleButton>
                          <ToggleButton
                            value="maybe"
                            aria-label="maybe"
                            sx={{ px: 2, py: 1.8 }}
                          >
                            Maybe
                            <Chip sx={{ ml: 1 }} label="6" size="small" />
                          </ToggleButton>
                          <ToggleButton
                            value="igonore"
                            aria-label="ignore"
                            sx={{ px: 2, py: 1.8 }}
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
    </Box>
  )
}

export default Profile
