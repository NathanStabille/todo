import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
  typography: {
    fontFamily: "Lexend",
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
      default: "#100F14",
      paper: "#080809",
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
  },
});

export const LightTheme = createTheme({
  typography: {
    fontFamily: "Lexend",
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
      default: "#F0F0F0",
      paper: "#D2DAE2",
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
  },
});
