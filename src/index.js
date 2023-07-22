import { Checkbox, createTheme, CssBaseline, responsiveFontSizes, styled, ThemeProvider } from '@mui/material';
import { orange } from '@mui/material/colors';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import RecruiterProfile from './pages/recruiter/Profile';
import CandidateProfile from './pages/candidate/Profile';
import Setting from './pages/Setting';

let theme = createTheme({
  typography: {
    fontSize: 12,
    fontFamily: 'MetricHPEXS',
    subtitle1: {
      fontSize: 12,
    },
    subtitle2: {
      color: '#757575',
      fontFamily: 'Inter',
      fontSize: 14,
      fontWeight: 400,
    },
    body1: {
      fontWeight: 400,
    },
    button: {
    },
  },
  palette: {
    background: {
      default: "#F4F6F9"
    },
    text: {
      secondary: 'gray'
    },
    primary: {
      main: '#2C5DE5',
    },
    secondary: {
      main: orange[500],
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        subtitle1: {
          fontSize: 16,
          color: '#444',
          fontStyle: 'normal',
          fontWeight: 600,
        }
      }
    },
    MuiStepIcon: {
      styleOverrides: {
        text: {
          display: 'none'
        }
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        horizontal: {
          marginLeft: '-17px',
          marginRight: '-22px',
        }
      }
    },
    MuiStepLabel: {
      styleOverrides: {
        iconContainer: {
          marginBottom: 10,
        },
        horizontal: {
          flexDirection: 'column',
          marginTop: 26,
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: 'inherit',
            fontWeight: 'bold',
          }
        },
      }
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 4,
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'row-reverse',
          color: '#444444',
          fontSize: 14,
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '20px',
        },
        asterisk: {
          marginRight: 2,
          color: 'red',
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.20)',
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        deleteIcon: {
          color: '#425563',
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          if (ownerState.variant === 'contained') {
            return {
              color: theme.palette.common.white,
              borderRadius: '100px',
              boxShadow: 'none',
              fontWeight: 900,
              padding: '6px 18px',
            }
          } else if (ownerState.variant === 'outlined') {
            return {
              color: theme.palette.common.black,
              borderRadius: '100px',
              fontWeight: 900,
              padding: '6px 18px',
              border: `1.706px solid ${theme.palette.primary.main}`,
            }
          }
        },
      },
    },
  },
  status: {
    danger: orange[500],
  },
});

theme = responsiveFontSizes(theme);
theme.spacing(2);

const CutomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.status.danger,
  '&.Mui-checked': {
    color: theme.status.danger,
  }
}));

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Career GPT Dashboard</h1>,
  },
  {
    path: "/showcase",
    element: <App />,
  },
  {
    path: "/candidate/profile",
    element: <CandidateProfile />
  },
  {
    path: "/recruiter/profile",
    element: <RecruiterProfile />
  },
  {
    path: "/setting",
    element: <Setting />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
