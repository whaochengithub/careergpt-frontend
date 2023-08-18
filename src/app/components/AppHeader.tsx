import { NotificationsNoneOutlined } from "@mui/icons-material"
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import React, { useEffect, useState } from "react"
import { Avatar } from "./common/Avatar"
import { Button } from "./common/Button"
import { useSelector } from "react-redux"
import {
  ROLE,
  selectRole,
} from "../../features/authorization/authorizationSlice"
import { useNavigate } from "react-router"
import { useAuth } from "../../features/authorization/useAuth"

const candidate_pages = [
  { label: "Job Application", path: "/job_application" },
  { label: "Interview Preparation", path: "/interview" },
]
const recruiter_pages = [
  {
    label: "Candidate Search",
    path: "/candidate_search",
  },
]
const settings = [
  { label: "Setting", path: "/setting" },
  { label: "Logout", path: "/signin" },
]

type Props = {}

const AppHeader = (props: Props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const [pages, setPages] = useState<{ label: string; path: string }[]>([])
  const role = useSelector(selectRole)
  const navigate = useNavigate()
  const auth = useAuth()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  useEffect(() => {
    switch (role) {
      case ROLE.CANDIDATE:
        setPages(candidate_pages)
        break
      case ROLE.RECRUITER:
        setPages(recruiter_pages)
        break
      default:
        break
    }
  }, [])

  const handleNavigation = (to: string) => {
    if (to === "/signin") {
      auth.signout()
    }
    navigate(to)
  }

  return (
    <AppBar
      position="static"
      sx={{
        background: "white",
        color: "black",
        boxShadow: "0px -1px 0px 0px #EEE inset",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Inter",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MOYI Design
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ label, path }: { label: string; path: string }) => (
                <MenuItem key={label} onClick={() => handleNavigation(path)}>
                  <Typography textAlign="center">{label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Inter",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MOYI Design
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ label, path }: { label: string; path: string }) => (
              <Button
                key={label}
                onClick={() => handleNavigation(path)}
                sx={{
                  my: 2,
                  color: "black",
                  fontWeight: "bold",
                  display: "block",
                  textTransform: "capitalize",
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexGrow: 0,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                flexDirection: "row",
              }}
            >
              <NotificationsNoneOutlined sx={{ mr: 4 }} />
            </Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={{
                    background: "linear-gradient(to bottom, #E19524, #FC6969)",
                  }}
                >
                  MY
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(({ label, path }) => (
                <MenuItem key={label} onClick={() => handleNavigation(path)}>
                  <Typography textAlign="center">{label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default AppHeader
