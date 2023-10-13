import {
  Box,
  Card,
  FormControl,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material"
import React, { useState } from "react"
import { resetPassword } from "../apis/resetPassword"
import { BootstrapInput } from "../components/common/BootstrapInput"
import { Button } from "../components/common/Button"

type Props = {}

function ResetPassword({}: Props) {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

  const urlParams = new URLSearchParams(window.location.search)
  const token = urlParams.get("token")

  const handleSubmit = () => {
    resetPassword({
      email: "luda.neu@gmail.com",
      password: newPassword,
      resetToken: token ?? "",
    })
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <Card sx={{ px: 10, py: 2 }}>
        <Stack gap={2}>
          <Typography variant="h6" fontWeight={"bolder"}>
            Set new password
          </Typography>
          <FormControl variant="standard" sx={{ width: "100px" }}>
            <InputLabel shrink htmlFor="change-password-old" required>
              Old Password
            </InputLabel>
            <BootstrapInput
              id="change-password-old"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              sx={{ width: 200 }}
            />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="change-password-new" required>
              New Password
            </InputLabel>
            <BootstrapInput
              id="change-password-new"
              sx={{ width: 200 }}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </FormControl>
          <Button onClick={handleSubmit}>Submit</Button>
        </Stack>
      </Card>
    </Box>
  )
}

export default ResetPassword
