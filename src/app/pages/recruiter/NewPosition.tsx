import React, { useState } from "react"
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  TextareaAutosize,
  Typography,
} from "@mui/material"
import { BootstrapInput } from "../../components/common/BootstrapInput"
import Select from "react-select"

type Props = {}

function NewPosition({}: Props) {
  const [jobTitle, setJobTitle] = useState("")
  const [jobLocation, setJobLocation] = useState("")
  const [jobType, setJobType] = useState("")

  const handleJobTypeChange = () => {}

  return (
    <Grid container spacing={4} mb={20}>
      <Grid item xs={6} sm={6} md={6} lg={6}>
        <FormControl variant="standard" sx={{ width: "100%" }}>
          <InputLabel shrink htmlFor="position-job-title">
            Job Title
          </InputLabel>
          <BootstrapInput
            id="position-job-title"
            value={jobTitle}
            onChange={() => setJobTitle(e.target.value)}
            sx={{ width: "100%" }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6}>
        <FormControl variant="standard" sx={{ width: "100%" }}>
          <InputLabel shrink htmlFor="position-job-location">
            Job Location
          </InputLabel>
          <BootstrapInput
            id="position-job-location"
            value={jobLocation}
            onChange={() => setJobLocation(e.target.value)}
            sx={{ width: "100%" }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6}>
        <FormControl variant="standard" sx={{ width: "100%" }}>
          <Typography variant="caption">Job Type</Typography>
          <Select
            id={"position-job-type"}
            options={[{ value: "contract", label: "Contract" }]}
            value={{ value: "contract", label: "Contract" }}
            onChange={handleJobTypeChange}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <FormControl variant="standard" sx={{ width: "100%" }}>
          <Typography variant="caption">Job Description</Typography>
          <TextareaAutosize
            style={{
              width: "100%",
              borderRadius: "8px",
              borderColor: "#D0D5DD",
            }}
            minRows={10}
          />
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default NewPosition
