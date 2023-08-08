import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import "./index.css"
import { router } from "./app/router"
import { RouterProvider } from "react-router-dom"
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material"
import { persistor } from "./app/store"
import { PersistGate } from "redux-persist/integration/react"
import { orange } from "@mui/material/colors"

let theme = createTheme({
  typography: {
    fontSize: 12,
    subtitle1: {
      fontSize: 12,
    },
    subtitle2: {
      color: "#757575",
      fontSize: 14,
      fontWeight: 400,
    },
    body1: {
      fontWeight: 400,
    },
    button: {},
  },
  palette: {
    background: {
      default: "#F4F6F9",
    },
    text: {
      secondary: "gray",
    },
    primary: {
      main: "#2C5DE5",
    },
    secondary: {
      main: orange[500],
    },
  },
  components: {
    MuiRadio: {
      styleOverrides: {
        root: {
          border: "1px solid",
          borderRadius: 6,
          padding: "12px 16px",
          paddingRight: "calc(100% - 35px)",
          marginRight: "calc(46px - 100%)",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        subtitle1: {
          fontSize: 16,
          color: "#444",
          fontStyle: "normal",
          fontWeight: 600,
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        text: {
          display: "none",
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        horizontal: {
          marginLeft: "-17px",
          marginRight: "-22px",
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        iconContainer: {
          marginBottom: 10,
        },
        horizontal: {
          flexDirection: "column",
          marginTop: 26,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "inherit",
            fontWeight: "bold",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 4,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "row-reverse",
          color: "#444444",
          fontSize: 14,
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "20px",
        },
        asterisk: {
          marginRight: 2,
          color: "red",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.20)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        deleteIcon: {
          color: "#425563",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          const style: any = {}
          if (ownerState.shape === "square") {
            style.borderRadius = 6
          }
          if (ownerState.variant === "contained") {
            return {
              color: theme.palette.common.white,
              borderRadius: "100px",
              boxShadow: "none",
              fontWeight: 900,
              padding: "6px 18px",
              ...style,
            }
          } else if (ownerState.variant === "outlined") {
            return {
              color: theme.palette.common.black,
              borderRadius: "100px",
              fontWeight: 900,
              padding: "6px 18px",
              border: `1.706px solid ${theme.palette.primary.main}`,
              ...style,
            }
          }
        },
      },
    },
  },
})

theme = responsiveFontSizes(theme)
theme.spacing(2)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
)
