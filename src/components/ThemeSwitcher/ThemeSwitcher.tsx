import { Box, Typography, useTheme } from "@mui/material";
import { useThemeContext } from "../../contexts/ThemeContext";

export const ThemeSwitcher = () => {
  const theme = useTheme();

  const { themeName, toggleTheme } = useThemeContext();

  return (
    <Box>
      <Typography sx={{ opacity: 0.7, transition: "0.1s" }}>Theme</Typography>
      <Box
        bgcolor={theme.palette.background.default}
        width={130}
        height={30}
        borderRadius={3}
        display="flex"
        alignItems="center"
        paddingY={2}
        paddingX={1}
        onClick={toggleTheme}
        sx={{ cursor: "pointer" }}
      >
        <Box
          bgcolor={theme.palette.background.paper}
          paddingX={1}
          borderRadius={2}
          boxShadow={"1px 1px 5px #FFF"}
          sx={{
            transform:
              themeName === "light" ? "translateX(0%)" : "translateX(110%)",
            transition: "0.2s",
          }}
        >
          <Typography textTransform="capitalize">{themeName}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
