import {
  Menu,
} from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { useThemeContext } from "../../contexts/ThemeContext";

export const DrawerMenu = () => {
  const theme = useTheme();

  const { themeName, toggleTheme } = useThemeContext();

  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <Box
      width={open ? 320 : 40}
      padding={open ? 2 : 0}
      borderRadius={5}
      boxShadow={open ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none"}
      sx={{ transition: "0.3s ease-in-out" }}
    >
      <IconButton onClick={handleDrawer} color="primary">
        <Menu />
      </IconButton>

      <Box display={open ? "flex" : "none"} flexDirection="column" mt={1}>
        <Typography sx={{ opacity: 0.7 }}>Theme</Typography>
        <Box
          bgcolor={theme.palette.background.default}
          width={130}
          height={30}
          borderRadius={3}
          display="flex"
          alignItems="center"
          paddingY={2.3}
          paddingX={1}
          onClick={toggleTheme}
          sx={{ cursor: "pointer" }}
        >
          <Box
            bgcolor={theme.palette.background.paper}
            paddingX={1}
            borderRadius={2}
            sx={{
              transform:
                themeName === "light" ? "translateX(0%)" : "translateX(120%)",
              transition: "0.2s ease-in-out",
            }}
          >
            <Typography textTransform="capitalize">
              {themeName}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
