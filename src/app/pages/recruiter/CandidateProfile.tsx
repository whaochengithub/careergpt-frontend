import React from "react"
import { Box, Grid, Link, Stack, Typography } from "@mui/material"
import { Button } from "../../components/common/Button"
import Select from "react-select"

type Props = {}

function CandidateProfile({}: Props) {
  const handleCandidateStatusChange = () => {}
  return (
    <Stack>
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
          <Typography variant="subtitle2">Name</Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Typography>John Doe</Typography>
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
          <Typography variant="subtitle2">Position</Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4}>
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
          <Typography variant="subtitle2">Email</Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Typography>xxxxx@gmail.com</Typography>
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
        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Typography>Java Developer, Full-stack Developer</Typography>
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
          <Typography variant="subtitle2">Phone</Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Typography>000-000-0000</Typography>
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
        <Grid item xs={4} sm={4} md={4} lg={4}>
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
        <Grid item xs={4} sm={4} md={4} lg={4}>
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
          <Typography variant="subtitle2">Open to Relocation</Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Typography>Yes</Typography>
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
          <Typography variant="subtitle2">Linkedin</Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Typography>https://www.linkedin.com/in/xyz</Typography>
        </Grid>
      </Grid>
      <Typography color="text.secondary" variant="body2" p={2}>
        I am a Software Engineer driven by curiosity and a determination to make
        a positive impact through technology. I am now seeking opportunities
        that will allow me to continue growing, collaborating with talented
        teams. I am a Software Engineer driven by curiosity and a determination
        to make a positive impact through technology. I am now seeking
        opportunities that will allow me to continue growing, collaborating with
        talented teams.
      </Typography>
      <Link ml={2}>See Full Profile</Link>
      <Box m={2} width={300} mb={10}>
        <Typography variant="subtitle1">Candidate Status</Typography>
        <Select
          options={[{ value: "like", label: "Like" }]}
          value={{ value: "like", label: "like" }}
          onChange={handleCandidateStatusChange}
        />
      </Box>
    </Stack>
  )
}

export default CandidateProfile
