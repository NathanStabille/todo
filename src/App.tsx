import { Box, useMediaQuery, useTheme } from "@mui/material";
import { DrawerMenu } from "./components/DrawerMenu/DrawerMenu";
import { InputItem } from "./components/InputItem/InputItem";
import { ListItems } from "./components/ListItems/ListItems";

export const App = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

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
        width={smDown ? "100%" : "90%"}
        height={smDown ? "100%" : "90%"}
        borderRadius={smDown ? 0 : 10}
        padding={smDown ? 1 : 3}
        display="flex"
        flexDirection={smDown ? "column" : "row"}
        justifyContent={smDown ? "flex-start" : "center"}
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
