import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AppThemeProvider } from "./contexts/ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  
    <AppThemeProvider>
      <CssBaseline />
      <App />
    </AppThemeProvider>
  
);
