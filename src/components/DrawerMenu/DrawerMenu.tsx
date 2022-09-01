import {
  Add,
  AddCircleOutline,
  Close,
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
  Modal,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useCategoriesContext } from "../../contexts/CategoriesContext";
import { useListContext } from "../../contexts/ListContext";
import { filterCategory, getCategories } from "../../services/Categories";
import { CreateNewCategory } from "../CreateNewCategory/CreateNewCategory";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

export const DrawerMenu = () => {
  const theme = useTheme();

  const { categories, setCategories } = useCategoriesContext();
  const { list, setFilteredList } = useListContext();

  const [openDrawer, setOpenDrawer] = useState(true);

  const handleDrawer = () => {
    openDrawer ? setOpenDrawer(false) : setOpenDrawer(true);
  };

  const filterCategoryList = async (category: string) => {
    setFilteredList(await filterCategory(category));
  };

  const countItemsByCategory = (category: string) => {
    let count = 0;
    list.map((item) => {
      if (item.category === category) {
        count++;
      }
    });
    return count;
  };
  return (
    <Box
      width={openDrawer ? 400 : 40}
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
        height="90%"
        display={openDrawer ? "flex" : "none"}
        flexDirection="column"
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
          {/* category list map */}
          {categories.map((item, index) => {
            return (
              <Box
                key={index}
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
                  onClick={() => filterCategoryList(item.category)}
                  aria-disabled
                  key={index}
                  sx={{
                    textTransform: "capitalize",
                    borderRadius: 3,
                    paddingY: 1,
                    paddingRight: 0,
                    flex: 1,
                    ":hover": {
                      background: "transparent",
                    },
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <DataUsageOutlined
                      fontSize="small"
                      sx={{ mr: 2.5, color: item.color }}
                    />
                    <Typography fontSize="1.1rem">{item.category}</Typography>
                  </Box>

                  <Typography
                    bgcolor={theme.palette.background.default}
                    paddingX={1}
                    borderRadius={2}
                    fontSize="0.9rem"
                  >
                    {countItemsByCategory(item.category)}
                  </Typography>
                </MenuItem>

                <DeleteModal id={item.category} />
              </Box>
            );
          })}
          {/* end category list map */}
          <CreateNewCategory />
        </MenuList>

        <ThemeSwitcher />
      </Box>
    </Box>
  );
};
