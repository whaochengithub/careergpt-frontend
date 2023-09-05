import React, { useState } from "react"
import { Box, FormControl, Grid, InputLabel, Typography } from "@mui/material"
import { BootstrapInput } from "../../components/common/BootstrapInput"

type Props = {}

function Verify({}: Props) {
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [linkedin, setLinkedin] = useState("")

  return (
    <Box>
      <Typography>
        Please verify your profile before posting any jobs on the platform.
      </Typography>
      <Grid container spacing={4} mt={2} mb={20}>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel shrink htmlFor="siginin-fullname">
              Full Name
            </InputLabel>
            <BootstrapInput
              id="siginin-fullname"
              value={fullname}
              onChange={() => setFullname(e.target.value)}
              sx={{ width: "100%" }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel shrink htmlFor="verify-email">
              Business Email
            </InputLabel>
            <BootstrapInput
              id="verify-email"
              value={email}
              onChange={() => setEmail(e.target.value)}
              sx={{ width: "100%" }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel shrink htmlFor="verify-company">
              Company Page
            </InputLabel>
            <BootstrapInput
              id="verify-email"
              value={company}
              onChange={() => setCompany(e.target.value)}
              sx={{ width: "100%" }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel shrink htmlFor="verify-linkedin">
              LinkedIn Page
            </InputLabel>
            <BootstrapInput
              id="verify-linkedin"
              value={linkedin}
              onChange={() => setLinkedin(e.target.value)}
              sx={{ width: "100%" }}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Verify
