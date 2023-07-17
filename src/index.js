import { Checkbox, createTheme, CssBaseline, styled, ThemeProvider } from '@mui/material';
import { orange } from '@mui/material/colors';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  typography: {
    fontFamily: 'MetricHPEXS',
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
  status: {
    danger: orange[500],
  },
});

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
