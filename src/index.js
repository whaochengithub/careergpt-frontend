import { Checkbox, createTheme, CssBaseline, responsiveFontSizes, styled, ThemeProvider } from '@mui/material';
import { orange } from '@mui/material/colors';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

let theme = createTheme({
  typography: {
    fontSize: 12,
    fontFamily: 'MetricHPEXS',
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
    },
  },
  palette: {
    text: {
      secondary: 'gray'
    },
    primary: {
      main: '#01A982',
    },
    secondary: {
      main: orange[500],
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
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
              border: '1.706px solid var(--accent-colors-brand, #01A982)',
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
