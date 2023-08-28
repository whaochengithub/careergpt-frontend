import {
  Box,
  Card,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material"
import React from "react"
import AppHeader from "../../components/AppHeader"
import Nav from "../../components/Nav"
import Select from "react-select"
import { Button } from "../../components/common/Button"
import { BootstrapInput } from "../../components/common/BootstrapInput"
import { EditOutlined } from "@mui/icons-material"

import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined"

type Props = {}

const JobApplication = (props: Props) => {
  const theme = useTheme()
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
                </Card>
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
                </Card>
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
                </Card>
              </Stack>
            </Grid>
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
                </Stack>
                <Typography color="text.secondary" variant="body2" p={2}>
                  Job Description: Software Engineer responsibilities include
                  gathering user requirements, defining system functionality and
                  writing code in various languages, like Java, Ruby on Rails or
                  .NET programming languages (e.g. C++ or JScript.NET.) Our
                  ideal candidates are familiar with the software development
                  life cycle (SDLC) from preliminary system analysis to tests
                  and deployment.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Stack>
      </Paper>
    </Box>
  )
}

export default JobApplication
