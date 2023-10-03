import React, { useEffect, useState } from "react"
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
import useSetting from "../../../features/setting/useSetting"

type Props = {
  onChange: (position: object) => void
}

function NewPosition({ onChange }: Props) {
  const [jobTitle, setJobTitle] = useState("")
  const [jobLocation, setJobLocation] = useState("")
  const [jobType, setJobType] = useState("Contract")
  const [jobDescription, setJobDescription] = useState("")
  const { setting } = useSetting()

  useEffect(() => {
    onChange({
      postBy: setting.id,
      title: jobTitle,
      postTime: new Date().toLocaleDateString("en-US"),
      jobType: jobType,
      location: jobLocation,
      description: jobDescription,
    })
  }, [onChange, setting, jobTitle, jobLocation, jobType, jobDescription])

  const handleJobTypeChange = ({ value, label }) => {
    setJobType(value)
  }

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
            onChange={(e) => setJobTitle(e.target.value)}
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
            onChange={(e) => setJobLocation(e.target.value)}
            sx={{ width: "100%" }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6}>
        <FormControl variant="standard" sx={{ width: "100%" }}>
          <Typography variant="caption">Job Type</Typography>
          <Select
            id={"position-job-type"}
            options={[
              { value: "Contract", label: "Contract" },
              { value: "Full Time", label: "Full Time" },
            ]}
            value={{ value: "Contract", label: "Contract" }}
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
            onChange={(e) => setJobDescription(e.target.value)}
            minRows={10}
          />
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default NewPosition
