import styled from "@emotion/styled";
import { Menu } from "@mui/icons-material";
import { Box, IconButton, Switch, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { useThemeContext } from "../../contexts/ThemeContext";

export const DrawerMenu = () => {
  const theme = useTheme();

  const { themeName, toggleTheme } = useThemeContext();

  const [open, setOpen] = useState(true);

  const handleDrawer = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <Box
      width={open ? 300 : 40}
      padding={open ? 2 : 0}
      borderRadius={5}
      // bgcolor={open ? theme.palette.background.default : theme.palette.background.paper}
      sx={{ transition: "0.3s ease-in-out" }}
      boxShadow={open ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none"}
    >
      <IconButton onClick={handleDrawer} color="primary">
        <Menu />
      </IconButton>

      <Box display={open ? "flex" : "none"}>
        <Box
          bgcolor={theme.palette.background.default}
          mt={2}
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
                themeName === "light" ? "translateX(0%)" : "translateX(110%)",
              transition: "0.2s ease-in-out",
            }}
          >
            <Typography textTransform="capitalize">{themeName}</Typography>
          </Box>

          
        </Box>
      </Box>
    </Box>
  );
};
