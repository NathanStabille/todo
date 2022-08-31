import { DonutLargeOutlined, MoreVert } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import { MouseEvent, useEffect, useState } from "react";
import { useListContext } from "../../contexts/ListContext";
import { getItems, toggleCheckbox } from "../../services/List";
import { ListItemType } from "../../types/allTypes";

export const ListItems = () => {
  const theme = useTheme();

  const { list, setList } = useListContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleOpenMenu = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true);
  };

  const updateCheckBox = async (done: boolean, id: string) => {
    toggleCheckbox(done, id);
    setList(await getItems());
  };

  return (
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      {list?.map((item: ListItemType, index: number) => {
        return (
          <Box
            key={index}
            width="70%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            border={`1px solid ${theme.palette.secondary.main}`}
            padding={1}
            m={1}
            borderRadius={3}
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Checkbox
                checked={item.done}
                onClick={() => updateCheckBox(item.done, item.id)}
                size="small"
                sx={{ color: theme.palette.text.primary, border: "none" }}
              />
              <Typography
                fontSize="1.2rem"
                textTransform="capitalize"
                sx={{ textDecoration: item.done ? "line-through" : "none" }}
              >
                {item.value}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <DonutLargeOutlined fontSize="small" sx={{ color: item.color }} />
              <IconButton
                aria-controls={open ? "basic-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                color="primary"
              >
                <MoreVert />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                variant="menu"
              >
                <MenuItem onClick={() => console.log(item.id)}>Edit</MenuItem>
                <MenuItem onClick={handleClose}>Delete</MenuItem>
              </Menu>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
