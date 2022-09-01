import {
  Add,
  Close,
  CropLandscapeOutlined,
  DataUsageOutlined,
  DeleteOutline,
  HomeOutlined,
  Menu,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Input,
  MenuItem,
  MenuList,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useCategoriesContext } from "../../contexts/CategoriesContext";
import { useListContext } from "../../contexts/ListContext";
import { useThemeContext } from "../../contexts/ThemeContext";
import { addCategory, getCategories } from "../../services/Categories";

export const DrawerMenu = () => {
  const theme = useTheme();

  const { themeName, toggleTheme } = useThemeContext();
  const { categories, setCategories } = useCategoriesContext();
  const { list } = useListContext();
  const [inputText, setInputText] = useState("");

  const [openDrawer, setOpenDrawer] = useState(true);
  const [openInput, setOpenInput] = useState(false);

  const handleDrawer = () => {
    openDrawer ? setOpenDrawer(false) : setOpenDrawer(true);
  };
  const handleInput = () => {
    openInput ? setOpenInput(false) : setOpenInput(true);
  };
  const createCategoryList = async () => {
    if (inputText !== "") {
      await addCategory(inputText);
      setCategories(await getCategories());
      setInputText("");
    }
  };


  return (
    <Box
      width={openDrawer ? 360 : 40}
      padding={openDrawer ? 2 : 0}
      borderRadius={5}
      boxShadow={openDrawer ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none"}
      overflow="auto"
      sx={{ transition: "0.3s ease-in-out" }}
    >
      <IconButton onClick={handleDrawer} color="primary">
        {openDrawer ? <Close /> : <Menu />}
      </IconButton>

      <Box
        height="100%"
        display={openDrawer ? "flex" : "none"}
        flexDirection="column"
        mt={3}
        justifyContent="space-between"
      >
        <MenuList>
          <MenuItem
            aria-disabled
            sx={{
              width: "100%",
              borderRadius: 3,
              paddingY: 1,
              display: "flex",
              justifyContent: "space-between",
              ":hover": { backgroundColor: "rgba(0,0,0,0.1)" },
            }}
          >
            <Box display="flex" alignItems="center">
              <HomeOutlined sx={{ mr: 2 }} />
              <Typography fontSize="1.1rem">Home</Typography>
            </Box>
            <Typography
              bgcolor={theme.palette.background.default}
              paddingX={1}
              borderRadius={2}
              fontSize="0.9rem"
            >
              {list.length}
            </Typography>
          </MenuItem>
          {categories.map((item, index) => {
            return (
              <Box
                display="flex"
                borderRadius={3}
                sx={{
                  ":hover": {
                    backgroundColor: "rgba(0,0,0,0.1)",
                  },
                  ":active": {
                    backgroundColor: "#00021f33",
                    transition: "0.3s",
                  },
                }}
              >
                <MenuItem
                  disableRipple
                  onClick={() => console.log("menuItem")}
                  aria-disabled
                  key={index}
                  sx={{
                    textTransform: "capitalize",
                    borderRadius: 3,
                    paddingY: 1,
                    flex: 1,
                    ":hover": {
                      background: "transparent",
                    },
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <DataUsageOutlined
                      fontSize="small"
                      sx={{ mr: 2.5, color: item.color }}
                    />
                    <Typography fontSize="1.1rem">{item.category}</Typography>
                  </Box>

                  <Typography></Typography>
                </MenuItem>
                <IconButton
                  disableRipple
                  onClick={() => console.log("delete")}
                  sx={{
                    color: "#eb34345c",
                    ":hover": {
                      color: "#ff0000fc",
                    },
                  }}
                >
                  <DeleteOutline />
                </IconButton>
              </Box>
            );
          })}
          <Box>
            <MenuItem
              aria-disabled
              onClick={handleInput}
              sx={{
                borderRadius: 3,
                paddingY: 1,
                fontSize: "1.1rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Add sx={{ mr: 2 }} /> Create new list
            </MenuItem>

            <Input
              fullWidth
              placeholder="Write new list..."
              disableUnderline
              value={inputText}
              onKeyDown={(e) => e.key === "Enter" && createCategoryList()}
              onChange={(e) => setInputText(e.target.value)}
              sx={{
                height: openInput ? 50 : 0,
                opacity: openInput ? 1 : 0,
                padding: 1,
                mt: 2,
                fontSize: "1.1rem",
                border: `1px solid ${theme.palette.background.default}`,
                borderRadius: 3,
                transition: "0.2s ease-in-out",
              }}
            />
          </Box>
        </MenuList>

        <Box mb={8}>
          <Typography sx={{ opacity: 0.7, transition: "0.1s" }}>
            Theme
          </Typography>
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
      </Box>
    </Box>
  );
};
