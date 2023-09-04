import {
  Alert,
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  Link,
  Paper,
  Radio,
  RadioGroup,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import AppHeader from "../components/AppHeader"
import { Modal } from "../components/common/Modal/Modal"
import { Button } from "../components/common/Button"
import { BootstrapInput } from "../components/common/BootstrapInput"
import Nav from "../components/Nav"
import { getSetting } from "../apis/setting"
import useSetting from "../../features/setting/useSetting"
import { resetPassword } from "../apis/resetPassword"

const Setting = () => {
  const [creditModalOpen, setCreditModalOpen] = useState(false)
  const [emailModalOpen, setEmailModalOpen] = useState(false)
  const [passwordModalOpen, setPasswordModalOpen] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  const [newPassword, setNewPassword] = useState("")

  const { getSetting, setting } = useSetting()

  useEffect(() => {
    getSetting()
  }, [])

  const handleCreditModalClose = () => {
    setCreditModalOpen(false)
  }

  const handleEmailModalClose = () => {
    setEmailModalOpen(false)
  }

  const handlePasswordModalClose = () => {
    setPasswordModalOpen(false)
  }

  const submitNewPassword = () => {
    resetPassword({ email: setting.email, password: newPassword }).then(
      (response) => {
        if (response.error) {
          return
        }
        setPasswordModalOpen(false)
        setShowNotification(true)
      },
    )
  }

  const handleNotificationClose = () => {
    setShowNotification(false)
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <AppHeader />
      <Nav title={"Setting"} />
      <Paper sx={{ flexGrow: "1", m: 1, p: 3 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            {" "}
            Personal Information
          </Typography>
          <Grid container spacing={2} width={400}>
            <Grid item xs={4} md={4}>
              <Typography variant="subtitle2">Username</Typography>
            </Grid>
            <Grid item xs={4} md={4}>
              <Typography variant="body1">
                {setting.userName ?? "No username"}
              </Typography>
            </Grid>
            <Grid item xs={4} md={4}></Grid>
            <Grid item xs={4} md={4}>
              <Typography variant="subtitle2">Email</Typography>
            </Grid>
            <Grid item xs={4} md={4}>
              <Typography>{setting.email ?? "No email"}</Typography>
            </Grid>
            <Grid item xs={4} md={4}>
              <Link href="#" onClick={() => setEmailModalOpen(true)}>
                Change Email
              </Link>
            </Grid>
            <Grid item xs={4} md={4}>
              <Typography variant="subtitle2">Password</Typography>
            </Grid>
            <Grid item xs={4} md={4}>
              <Typography>{setting.password}</Typography>
            </Grid>
            <Grid item xs={4} md={4}>
              <Link href="#" onClick={() => setPasswordModalOpen(true)}>
                Change Password
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Credit
          </Typography>
          <Grid container spacing={2} width={400}>
            <Grid item xs={4} md={4}>
              <Typography variant="subtitle2">Total Credits</Typography>
            </Grid>
            <Grid item xs={4} md={4}>
              <Typography>{setting.credit ?? "No credit"}</Typography>
            </Grid>
            <Grid item xs={4} md={4}>
              <Link
                href="#"
                onClick={() => {
                  setCreditModalOpen(true)
                }}
              >
                Add more Credits
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Modal
        open={creditModalOpen}
        title={"Add More Credits"}
        onClose={handleCreditModalClose}
        width={600}
        actionButtons={[
          <Button key="submit" variant="contained" shape={"square"}>
            Submit
          </Button>,
        ]}
      >
        <FormControl>
          <Typography variant="subtitle1">Select Credits</Typography>
          <RadioGroup
            aria-labelledby="credits-group-label"
            defaultValue="10"
            name="credits-group"
          >
            <Grid container spacing={2} sx={{ mt: 1, ml: "-5px" }}>
              <Grid item xs={12} sm={12} md={6}>
                <FormControlLabel
                  sx={{ width: "100%" }}
                  value="10"
                  control={<Radio />}
                  label="10 Credits/ $9.99"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormControlLabel
                  sx={{ width: "100%" }}
                  value="30"
                  control={<Radio />}
                  label="30 Credits/ $26.99"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormControlLabel
                  sx={{ width: "100%" }}
                  value="50"
                  control={<Radio />}
                  label="50 Credits/ $39.99"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <FormControlLabel
                  sx={{ width: "100%" }}
                  value="100"
                  control={<Radio />}
                  label="100 Credits/ $74.99"
                />
              </Grid>
            </Grid>
          </RadioGroup>
          <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>
            Credit Card
          </Typography>
          <RadioGroup
            aria-labelledby="credits-group-label"
            defaultValue="10"
            name="credits-group"
          >
            <Grid container sx={{ width: 300 }}>
              <Grid item xs={12} sm={12} md={12}>
                <BootstrapInput
                  fullWidth
                  inputProps={{ style: { borderRadius: 0 } }}
                  placeholder={"Card number"}
                >
                  123456789o0
                </BootstrapInput>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <BootstrapInput
                  inputProps={{ style: { borderRadius: 0 } }}
                  placeholder={"MM / YY"}
                >
                  12/24
                </BootstrapInput>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <BootstrapInput
                  inputProps={{ style: { borderRadius: 0 } }}
                  placeholder={"CVV"}
                >
                  234
                </BootstrapInput>
              </Grid>
            </Grid>
          </RadioGroup>
          <Grid container spacing={1} sx={{ width: 500, mt: 1 }}>
            <Grid item xs={12} sm={12} md={12}>
              <Typography
                variant="subtitle2"
                fontWeight={"bold"}
                marginBottom={1}
              >
                Billing Address
              </Typography>
              <BootstrapInput fullWidth>123456789o0</BootstrapInput>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Typography
                variant="subtitle2"
                fontWeight={"bold"}
                marginBottom={1}
              >
                City
              </Typography>
              <BootstrapInput>12/24</BootstrapInput>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Typography
                variant="subtitle2"
                fontWeight={"bold"}
                marginBottom={1}
              >
                State
              </Typography>
              <BootstrapInput>234</BootstrapInput>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Typography
                variant="subtitle2"
                fontWeight={"bold"}
                marginBottom={1}
              >
                Zip Code
              </Typography>
              <BootstrapInput>12/24</BootstrapInput>
            </Grid>
          </Grid>
        </FormControl>
      </Modal>
      <Modal
        open={emailModalOpen}
        title={"Change Email"}
        onClose={handleEmailModalClose}
        width={600}
        actionButtons={[
          <Button key="submit" variant="contained" shape={"square"}>
            Submit
          </Button>,
        ]}
      >
        <Stack gap={2}>
          <FormControl variant="standard" sx={{ width: "100px" }}>
            <InputLabel shrink htmlFor="change-email-old" required>
              Old Email
            </InputLabel>
            <BootstrapInput id="change-email-old" sx={{ width: 200 }} />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="change-email-new" required>
              New Email
            </InputLabel>
            <BootstrapInput id="change-email-new" sx={{ width: 200 }} />
          </FormControl>
        </Stack>
      </Modal>
      <Modal
        open={passwordModalOpen}
        title={"Change Password"}
        onClose={handlePasswordModalClose}
        width={600}
        actionButtons={[
          <Button
            key="submit"
            variant="contained"
            shape={"square"}
            onClick={submitNewPassword}
          >
            Submit
          </Button>,
        ]}
      >
        <Stack gap={2}>
          <FormControl variant="standard" sx={{ width: "100px" }}>
            <InputLabel shrink htmlFor="change-password-old" required>
              Old Password
            </InputLabel>
            <BootstrapInput id="change-password-old" sx={{ width: 200 }} />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="change-password-new" required>
              New Password
            </InputLabel>
            <BootstrapInput
              id="change-password-new"
              sx={{ width: 200 }}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </FormControl>
        </Stack>
      </Modal>
      <Snackbar
        open={showNotification}
        autoHideDuration={2000}
        onClose={handleNotificationClose}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Password Changed Successfully.
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Setting
