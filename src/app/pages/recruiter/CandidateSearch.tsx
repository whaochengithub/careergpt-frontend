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

const CandidateSearch = (props: Props) => {
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
                Keywords
              </InputLabel>
              <BootstrapInput
                placeholder="Search by keywords"
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
                placeholder={"Location"}
                options={[
                  { label: "Location1", value: "location1" },
                  { label: "Locaation2", value: "location2" },
                ]}
                value={null}
              />
            </Box>
            <Box width={180}>
              <Select
                placeholder={"Work Authorization"}
                options={[
                  { label: "H1B", value: "H1B" },
                  { label: "Green Card", value: "Green Card" },
                ]}
                value={null}
              />
            </Box>
            <Box width={120}>
              <Select
                placeholder={"Relocation"}
                options={[
                  { label: "Yes", value: "yes" },
                  { label: "No", value: "no" },
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
                    <Typography variant="subtitle1">John Doe</Typography>
                    <Box display={"flex"} alignItems={"center"} gap={1}>
                      <Typography variant="body2" color={"primary"}>
                        Software Engineer
                      </Typography>
                      <Stack direction={"row"} alignItems="center" gap={0.5}>
                        <PlaceOutlinedIcon />
                        <Typography variant="body2" color="text.secondary">
                          New York, NY
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
                    <Typography variant="subtitle1">John Doe</Typography>
                    <Box display={"flex"} alignItems={"center"} gap={1}>
                      <Typography variant="body2" color={"primary"}>
                        Software Engineer
                      </Typography>
                      <Stack direction={"row"} alignItems="center" gap={0.5}>
                        <PlaceOutlinedIcon />
                        <Typography variant="body2" color="text.secondary">
                          New York, NY
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
                    <Typography variant="subtitle1">John Doe</Typography>
                    <Box display={"flex"} alignItems={"center"} gap={1}>
                      <Typography variant="body2" color={"primary"}>
                        Software Engineer
                      </Typography>
                      <Stack direction={"row"} alignItems="center" gap={0.5}>
                        <PlaceOutlinedIcon />
                        <Typography variant="body2" color="text.secondary">
                          New York, NY
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
                    <Typography variant="subtitle1">John Doe</Typography>
                    <Box display={"flex"} alignItems={"center"} gap={1}>
                      <Typography variant="body2" color={"primary"}>
                        Software Engineer
                      </Typography>
                      <Stack direction={"row"} alignItems="center" gap={0.5}>
                        <PlaceOutlinedIcon />
                        <Typography variant="body2" color="text.secondary">
                          New York, NY
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
                <Typography variant="subtitle1" sx={{ m: 2 }}>
                  John Doe
                </Typography>
                <Grid container m={2} rowGap={2}>
                  <Grid
                    item
                    xs={2}
                    sm={2}
                    md={2}
                    lg={2}
                    alignItems="center"
                    justifyContent={"center"}
                  >
                    <Typography variant="subtitle2">Position</Typography>
                  </Grid>
                  <Grid item xs={10} sm={10} md={10} lg={10} paddingLeft={3}>
                    <Typography>Software Engineer</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    sm={2}
                    md={2}
                    lg={2}
                    alignItems="center"
                    justifyContent={"center"}
                  >
                    <Typography variant="subtitle2">Desired Job</Typography>
                  </Grid>
                  <Grid item xs={10} sm={10} md={10} lg={10} paddingLeft={3}>
                    <Typography>
                      Java Developer, Full-stack Developer
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    sm={2}
                    md={2}
                    lg={2}
                    alignItems="center"
                    justifyContent={"center"}
                  >
                    <Typography variant="subtitle2">Work Auth</Typography>
                  </Grid>
                  <Grid item xs={10} sm={10} md={10} lg={10} paddingLeft={3}>
                    <Typography>H1B</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    sm={2}
                    md={2}
                    lg={2}
                    alignItems="center"
                    justifyContent={"center"}
                  >
                    <Typography variant="subtitle2">Location</Typography>
                  </Grid>
                  <Grid item xs={10} sm={10} md={10} lg={10} paddingLeft={3}>
                    <Typography>New York, NY</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    sm={2}
                    md={2}
                    lg={2}
                    alignItems="center"
                    justifyContent={"center"}
                  >
                    <Typography variant="subtitle2">
                      Open to Relocation
                    </Typography>
                  </Grid>
                  <Grid item xs={10} sm={10} md={10} lg={10} paddingLeft={3}>
                    <Typography>Yes</Typography>
                  </Grid>
                </Grid>
                <Typography color="text.secondary" variant="body2" p={2}>
                  Job Description: Software Engineer responsibilities include
                  gathering user requirements, defining system functionality and
                  writing code in various languages, like Java, Ruby on Rails or
                  .NET programming languages (e.g. C++ or JScript.NET.) Our
                  ideal candidates are familiar with the software development
                  life cycle (SDLC) from preliminary system analysis to tests
                  and deployment.
                </Typography>
                <Stack direction={"row"} sx={{ float: "right", m: 2 }} gap={1}>
                  <Button shape={"square"} variant="contained">
                    Request Full Profile
                  </Button>
                  <Button shape={"square"} variant="outlined">
                    Save
                  </Button>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Stack>
      </Paper>
    </Box>
  )
}

export default CandidateSearch
