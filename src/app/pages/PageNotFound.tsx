import React from "react"
import { Alert, AlertTitle, Box } from "@mui/material"

type Props = {}

function PageNotFound({}: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <Alert severity="warning" sx={{ width: 500 }}>
        <AlertTitle>Whoops!</AlertTitle>
        <strong>404</strong> Page Not Found!
      </Alert>
    </Box>
  )
}

export default PageNotFound
