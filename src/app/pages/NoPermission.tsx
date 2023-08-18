import { Alert, Box, Typography } from "@mui/material"
import React from "react"

type Props = {}

const NoPermission = (props: Props) => {
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Typography variant="h5" fontWeight={"bold"}>
        <Alert severity="warning" sx={{ width: "100%" }}>
          You Don't have Authorization to View this Page
        </Alert>
      </Typography>
    </Box>
  )
}

export default NoPermission
