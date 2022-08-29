import { Box, useTheme } from "@mui/material";
import { DrawerMenu } from "./components/DrawerMenu/DrawerMenu";
import { ListItems } from "./components/ListItems/ListItems";
export const App = () => {
  const theme = useTheme();

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor={theme.palette.background.default}
    >
      <Box
        width="85%"
        height="85%"
        borderRadius={10}
        padding={3}
        display="flex"
        justifyContent="center"
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      bgcolor={theme.palette.background.paper}

        
      >
        <DrawerMenu />
        <ListItems />
      </Box>
    </Box>
  );
};
