import { Box, useTheme } from "@mui/material";
import { DrawerMenu } from "./components/DrawerMenu/DrawerMenu";
import { InputItem } from "./components/InputItem/InputItem";
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
      sx={{ userSelect: "none", transition: "0.2s" }}
    >
      <Box
        width="90%"
        height="90%"
        borderRadius={10}
        padding={3}
        display="flex"
        justifyContent="center"
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
        bgcolor={theme.palette.background.paper}
      >
        <DrawerMenu />

        <Box width="100%" overflow="auto">
          <InputItem />
          <ListItems />
        </Box>
      </Box>
    </Box>
  );
};
