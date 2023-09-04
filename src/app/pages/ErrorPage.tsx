import React from "react"
import { Alert, AlertTitle, Box } from "@mui/material"
type Props = {}

const ErrorPage = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <Alert severity="error" sx={{ width: 500 }}>
        <AlertTitle>Sorry!</AlertTitle>
        <strong>Something went wrong!</strong> An unexpected error has occurred.
      </Alert>
    </Box>
  )
}

export default ErrorPage
