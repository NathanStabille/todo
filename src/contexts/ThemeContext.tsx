import { PaletteMode, ThemeProvider } from "@mui/material";
import { createContext, ReactNode, useContext, useState } from "react";
import { DarkTheme, LightTheme } from "../theme/Themes";

interface IThemeContext {
  themeName: PaletteMode;
  toggleTheme: () => void;
}

interface IThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext({} as IThemeContext);

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<IThemeProviderProps> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<PaletteMode>("dark");

  const toggleTheme = () => {
    setThemeName(themeName === "dark" ? "light" : "dark");
  };

  const selectedTheme = () => {
    if (themeName === "light") {
      return LightTheme;
    }

    return DarkTheme;
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={selectedTheme()}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
