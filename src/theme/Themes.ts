import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
  typography: {
    fontFamily: "Josefin Sans",
  },

  palette: {
    primary: {
      main: "#F1F5F7",
      dark: "#22272E",
      light: "",
      contrastText: "#0E080C",
    },

    secondary: {
      main: "#DB5436",
      dark: "",
      light: "",
    },

    text: {
      primary: "#F1F5F7",
      secondary: "#000748",
    },

    background: {
      default: "#080809",
      paper: "#100F14",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "::-webkit-scrollbar": {
          width: "0px",
        },
        body: {
          transition: "0.3s",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export const LightTheme = createTheme({
  typography: {
    fontFamily: "Josefin Sans",
  },

  palette: {
    primary: {
      main: "#0E080C",
      dark: "#22272E",
      light: "",
      contrastText: "#F1F5F7",
    },

    secondary: {
      main: "#00BFB3",
      dark: "",
      light: "",
    },

    text: {
      primary: "#000748",
      secondary: "#F1F5F7",
    },

    background: {
      default: "#A9B0BB",
      paper: "#F8F8F9",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "::-webkit-scrollbar": {
          width: "0px",
        },
        body: {
          transition: "0.3s",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: 10,
        },
      },
    },
  },
});
