import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material"
import { Link, useLocation, useNavigate } from "react-router-dom"
import React, { useState } from "react"
import { BootstrapInput } from "../components/common/BootstrapInput"
import { Button } from "../components/common/Button"
import Select from "react-select"
import { useAuth } from "../../features/authorization/useAuth"
import { ROLE } from "../../features/authorization/authorizationSlice"

const SignUp = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState<{ label: string; value: ROLE }>({
    label: "candidate",
    value: ROLE.CANDIDATE,
  })

  const auth = useAuth()

  const navigate = useNavigate()
  let location = useLocation()
  let from = location.state?.from?.pathname || "/"

  const handleUsernameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value)
  }

  const handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value)
  }
  const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }

  const handleRoleChange = (selected: { label: string; value: ROLE }) => {
    setRole(selected)
  }

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    auth.signup(username, email, password, role.value, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the signup page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the signup page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true })
    })
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
            Sign Up
          </Typography>
          <Typography variant="subtitle2">CareerGPT</Typography>
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
              sx={{ width: "100%" }}
            />
          </FormControl>
          <FormControl variant="standard" sx={{ width: "100%", marginTop: 2 }}>
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
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
          <Typography>
            Don't have an account? <Link to="/signin">Log In</Link>
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

export default SignUp
