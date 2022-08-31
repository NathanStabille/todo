import { CssBaseline } from "@mui/material";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { CategoriesProvider } from "./contexts/CategoriesContext";
import { ListProvider } from "./contexts/ListContext";
import { AppThemeProvider } from "./contexts/ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AppThemeProvider>
    <CssBaseline />
    <CategoriesProvider>
      <ListProvider>
        <App />
      </ListProvider>
    </CategoriesProvider>
  </AppThemeProvider>
);
