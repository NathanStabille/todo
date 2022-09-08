import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { DrawerMenu } from "./components/DrawerMenu/DrawerMenu";
import { InputItem } from "./components/InputItem/InputItem";
import { ListItems } from "./components/ListItems/ListItems";
import { DateTime } from "luxon";

export const App = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const welcomeDate = () => {
    let dateTime = DateTime.now().toFormat("T");

    const dateHour = () => {
      if (dateTime >= "12:00" && dateTime < "18:00") {
        return "Good Afternoon";
      } else if (dateTime >= "18:00" && dateTime < "00:00") {
        return "Good Evening";
      } else if (dateTime > "00:00") {
        return "Good Morning";
      }
    };

    return dateHour();
  };

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
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={5}
          >
            <Box width={smDown ? "95%" : "70%"}>
              <Typography fontSize="2rem" fontWeight="500">
                {`${welcomeDate()}`}
              </Typography>
              <Typography fontSize="1.2rem" sx={{ opacity: 0.5 }}>
                {`It's ${DateTime.now().toFormat("cccc, LLL dd")}`}
              </Typography>
            </Box>
          </Box>
          <InputItem />
          <ListItems />
        </Box>
      </Box>
    </Box>
  );
};
