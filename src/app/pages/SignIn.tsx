import {
  Alert,
  Box,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  Link as MUILink,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material"
import { Link, useLocation, useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { BootstrapInput } from "../components/common/BootstrapInput"
import { Button } from "../components/common/Button"
import { Modal } from "../components/common/Modal"
import { useAuth } from "../../features/authorization/useAuth"
import { APIResponse } from "../utils/ajaxUtil"
import { validateEmail } from "../utils/validation"
import { getResetPasswordLink } from "../apis/resetPassword"
import useSetting from "../../features/setting/useSetting"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [open, setOpen] = useState(false)
  const [forgotEmail, setForgotEmail] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [showError, setShowError] = useState(false)
  const auth = useAuth()

  let navigate = useNavigate()
  let location = useLocation()

  useEffect(() => {
    if (auth.isLoggedIn) {
      navigate("/", { replace: true })
    }
  }, [])

  let from = location.state?.from?.pathname || "/"

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    auth.signin(email, password, (response: APIResponse) => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      if (response.error) {
        setShowError(true)
        return
      }
      navigate(from, { replace: true })
    })
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleNotificationClose = () => {
    setShowNotification(false)
  }

  const handleErrorClose = () => {
    setShowError(false)
  }

  const handleSendCode = () => {
    getResetPasswordLink({ email: forgotEmail })
    setShowNotification(true)
  }

  const handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value)
    setEmailError(!validateEmail(event.target.value))
  }

  const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }

  return (
    <Grid container>
      <Grid
        item
        xs={6}
        sm={6}
        md={6}
        lg={6}
        sx={{
          height: "100vh",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack sx={{ width: 380 }} alignItems="center" gap={2}>
          <Typography variant="h2" fontWeight={"bolder"}>
            Log In
          </Typography>
          <Typography variant="subtitle2">CareerGPT</Typography>
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel shrink htmlFor="siginin-email" required>
              Email
            </InputLabel>
            <BootstrapInput
              id="siginin-email"
              value={email}
              onChange={handleEmailChange}
              sx={{ width: "100%" }}
            />
            {emailError && (
              <FormHelperText sx={{ color: "red" }}>
                Invalid Email
              </FormHelperText>
            )}
          </FormControl>
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <Button
              onClick={() => setOpen(true)}
              sx={{ position: "absolute", right: 0, top: -10 }}
            >
              <MUILink>Forgot your password?</MUILink>
            </Button>
            <InputLabel shrink htmlFor="siginin-password" required>
              Password
            </InputLabel>
            <BootstrapInput
              id="siginin-password"
              value={password}
              onChange={handlePasswordChange}
              sx={{ width: "100%" }}
            />
          </FormControl>
          <Button
            onClick={handleSubmit}
            variant="contained"
            shape="square"
            sx={{ width: "100%" }}
          >
            Log In
          </Button>
          <Typography>
            Don't have an account?{" "}
            <Link to="/signup" replace>
              Sign Up
            </Link>
          </Typography>
        </Stack>
      </Grid>
      <Grid
        item
        xs={6}
        sm={6}
        md={6}
        lg={6}
        sx={{
          backgroundImage: `url("https://placehold.co/700x1000/orange/white/png")`,
        }}
      ></Grid>
      <Modal
        width={700}
        title={"Reset Password Link"}
        open={open}
        onClose={handleClose}
        aria-labelledby="forgot-password-modal-title"
        aria-describedby="fortgot-password-modal-description"
        actionButtons={[
          <Button key="send" variant="outlined" onClick={handleSendCode}>
            Send
          </Button>,
        ]}
      >
        <FormControl variant="standard" sx={{ width: "100%" }}>
          <InputLabel shrink htmlFor="siginin-password" required>
            Send Reset Password Link to this Email:
          </InputLabel>
          <BootstrapInput
            color="error"
            type="email"
            value={forgotEmail}
            onChange={(e) => {
              setForgotEmail(e.target.value)
              setEmailError(!validateEmail(e.target.value))
            }}
            id="siginin-password"
            sx={{ width: "100%" }}
          />
        </FormControl>
        {emailError && (
          <FormHelperText sx={{ color: "red" }}>Invalid Email</FormHelperText>
        )}
      </Modal>
      <Snackbar
        open={showError}
        autoHideDuration={2000}
        onClose={handleErrorClose}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          The user name or password are incorrect.
        </Alert>
      </Snackbar>
      <Snackbar
        open={showNotification}
        autoHideDuration={2000}
        onClose={handleNotificationClose}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Link sent to your email!
        </Alert>
      </Snackbar>
      <Box sx={{ position: "absolute", left: 10, top: 10 }}>
        <Typography variant="h5" fontWeight={"bold"}>
          Logo
        </Typography>
      </Box>
      <Box sx={{ position: "absolute", left: 10, bottom: 10 }}>
        <Typography>© 2023 MOYI TECH</Typography>
      </Box>
    </Grid>
  )
}

export default SignIn
