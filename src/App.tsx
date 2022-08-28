import { Box, useTheme } from "@mui/material";
import { DrawerMenu } from "./components/DrawerMenu/DrawerMenu";

export const App = () => {
  const theme = useTheme();

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="85%"
        height="85%"
        bgcolor={theme.palette.background.paper}
        borderRadius={10}
        padding={3}
        display="flex"
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      >
        <DrawerMenu />
        adasdsad
      </Box>
    </Box>
  );
};
