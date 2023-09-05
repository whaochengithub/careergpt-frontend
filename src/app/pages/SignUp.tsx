import {
  Alert,
  Box,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  SelectChangeEvent,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material"
import { Link, useLocation, useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { BootstrapInput } from "../components/common/BootstrapInput"
import { Button } from "../components/common/Button"
import Select from "react-select"
import { useAuth } from "../../features/authorization/useAuth"
import { ROLE } from "../../features/authorization/authorizationSlice"
import { validateEmail } from "../utils/validation"

const pages = ["basic", "info"]

const SignUp = () => {
  const [username, setUsername] = useState("")
  const [usernameError, setUsernameError] = useState(true)
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(true)
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [passwordError, setPasswordError] = useState(false)
  const [showError, setShowError] = useState(false)
  const [showFail, setShowFail] = useState(false)
  const [phone, setPhone] = useState("")
  const [location, setLocation] = useState("")
  const [company, setCompany] = useState("")
  const [linkedin, setLinkedin] = useState("")

  const [step, setStep] = useState(pages[0])

  const handleNext = () => {
    setStep(pages[1])
  }

  const [role, setRole] = useState<{ label: string; value: ROLE }>({
    label: "candidate",
    value: ROLE.CANDIDATE,
  })

  const auth = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    if (auth.isLoggedIn) {
      navigate("/", { replace: true })
    }
  }, [])

  const handleUsernameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value)
    if (validateUsername(event.currentTarget.value)) {
      setUsernameError(false)
    } else {
      setUsernameError(true)
    }
  }

  const handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value)
    if (validateEmail(event.currentTarget.value)) {
      setEmailError(false)
    } else {
      setEmailError(true)
    }
  }
  const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }

  const handlePassword2Change = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword2(event.currentTarget.value)
    if (validatePassword(password, event.currentTarget.value)) {
      setPasswordError(false)
    } else {
      setPasswordError(true)
    }
  }

  const handleRoleChange = (selected: { label: string; value: ROLE }) => {
    setRole(selected)
  }

  const handleErrorClose = () => {
    setShowError(false)
  }

  const handleFailClose = () => {
    setShowFail(false)
  }

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (usernameError || emailError || passwordError) {
      setShowError(true)
    } else {
      auth.signup(username, email, password, role.value, (response) => {
        // Send them back to the page they tried to visit when they were
        // redirected to the signup page. Use { replace: true } so we don't create
        // another entry in the history stack for the login page.  This means that
        // when they get to the protected page and click the back button, they
        // won't end up back on the signup page, which is also really nice for the
        // user experience.
        if (response.error) {
          setShowFail(true)
        } else {
          navigate("/", { replace: true })
        }
      })
    }
  }

  const validateUsername = (username: string) => {
    return username.trim() !== ""
  }

  const validatePassword = (password1: string, password2: string) => {
    return password1 === password2
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }

  const handleLocationChange = (e) => {
    setLocation(e.target.value)
  }

  const handleCompanyChange = (e) => {
    setCompany(e.target.value)
  }

  const handleLinkedInChange = (e) => {
    setLinkedin(e.target.value)
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
        <Stack alignItems="center">
          <Typography variant="h2" fontWeight={"bolder"}>
            Sign Up
          </Typography>
          <Typography variant="subtitle2">CareerGPT</Typography>
          {step === pages[0] ? (
            <Stack sx={{ width: 380 }} gap={2}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel shrink htmlFor="signup-username" required>
                  Username
                </InputLabel>
                <BootstrapInput
                  id="signup-username"
                  value={username}
                  onChange={handleUsernameChange}
                  sx={{ width: "100%" }}
                />
                {usernameError && (
                  <FormHelperText sx={{ color: "red" }}>
                    Invalid Username
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel shrink htmlFor="signup-email" required>
                  Email
                </InputLabel>
                <BootstrapInput
                  id="signup-email"
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
                <InputLabel shrink htmlFor="signup-password" required>
                  Password
                </InputLabel>
                <BootstrapInput
                  id="siginin-password"
                  value={password}
                  onChange={handlePasswordChange}
                  sx={{ width: "100%" }}
                />
              </FormControl>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel shrink htmlFor="signup-reenter-password" required>
                  Reenter Password
                </InputLabel>
                <BootstrapInput
                  id="siginin-reenter-password"
                  value={password2}
                  onChange={handlePassword2Change}
                  sx={{ width: "100%" }}
                />
                {passwordError && (
                  <FormHelperText sx={{ color: "red" }}>
                    Passwords not match
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl
                variant="standard"
                sx={{ width: "100%", marginTop: 2 }}
              >
                <InputLabel
                  sx={{ marginTop: -2 }}
                  shrink
                  htmlFor="signup-password"
                  required
                >
                  My Role
                </InputLabel>
                <Select
                  options={[
                    { value: ROLE.CANDIDATE, label: "candidate" },
                    { value: ROLE.RECRUITER, label: "recruiter" },
                    { value: "admin", label: "admin" },
                  ]}
                  value={role}
                  onChange={handleRoleChange}
                />
              </FormControl>
              <Button
                variant="contained"
                shape="square"
                sx={{ width: "100%" }}
                onClick={handleNext}
              >
                Next
              </Button>
            </Stack>
          ) : (
            <Stack sx={{ width: 380 }} gap={2}>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel shrink htmlFor="signup-phone">
                  Phone Number
                </InputLabel>
                <BootstrapInput
                  id="signup-phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  sx={{ width: "100%" }}
                />
              </FormControl>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel shrink htmlFor="signup-location">
                  Location
                </InputLabel>
                <BootstrapInput
                  id="signup-location"
                  value={location}
                  onChange={handleLocationChange}
                  sx={{ width: "100%" }}
                />
              </FormControl>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel shrink htmlFor="signup-company">
                  Current Company
                </InputLabel>
                <BootstrapInput
                  id="siginin-compayn"
                  value={company}
                  onChange={handleCompanyChange}
                  sx={{ width: "100%" }}
                />
              </FormControl>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel shrink htmlFor="signup-linkedin">
                  LinkedIn
                </InputLabel>
                <BootstrapInput
                  id="siginin-linkedin"
                  value={linkedin}
                  onChange={handleLinkedInChange}
                  sx={{ width: "100%" }}
                />
              </FormControl>
              <Button
                variant="contained"
                shape="square"
                sx={{ width: "100%" }}
                onClick={handleSignUp}
              >
                Sign Up
              </Button>
              <Typography>
                Don't have an account?{" "}
                <Link to="/signin" replace>
                  Log In
                </Link>
              </Typography>
            </Stack>
          )}
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
      <Box sx={{ position: "absolute", left: 10, top: 10 }}>
        <Typography variant="h5" fontWeight={"bold"}>
          Logo
        </Typography>
      </Box>
      <Box sx={{ position: "absolute", left: 10, bottom: 10 }}>
        <Typography>© 2023 MOYI TECH</Typography>
      </Box>
      <Snackbar
        open={showError}
        autoHideDuration={2000}
        onClose={handleErrorClose}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          The user name, email or password are invalid.
        </Alert>
      </Snackbar>
      <Snackbar
        open={showFail}
        autoHideDuration={2000}
        onClose={handleFailClose}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          Something wrong. Please contact us.
        </Alert>
      </Snackbar>
    </Grid>
  )
}

export default SignUp
