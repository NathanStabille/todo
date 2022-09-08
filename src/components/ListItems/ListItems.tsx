import { DonutLargeOutlined } from "@mui/icons-material";
import { Box, Checkbox, Typography, useTheme } from "@mui/material";
import { useListContext } from "../../contexts/ListContext";
import { getItems, toggleCheckbox } from "../../services/List";
import { ListItemType } from "../../types/allTypes";
import { EditItemList } from "../EditItemList/EditItemList";

export const ListItems = () => {
  const theme = useTheme();

  const { list, setList, filteredList, switchList } = useListContext();

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
      {switchList
        ? list?.map((item: ListItemType, index: number) => {
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
                    sx={{
                      textDecoration: item.done ? "line-through" : "none",
                      transition: "0.2s ease-in-out",
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <DonutLargeOutlined
                    fontSize="small"
                    sx={{ color: item.color }}
                  />
                  <EditItemList id={item.id} />
                </Box>
              </Box>
            );
          })
        : filteredList?.map((item: ListItemType, index: number) => {
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
                    sx={{
                      textDecoration: item.done ? "line-through" : "none",
                      transition: "0.2s ease-in-out",
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <DonutLargeOutlined
                    fontSize="small"
                    sx={{ color: item.color }}
                  />
                  <EditItemList id={item.id} />
                </Box>
              </Box>
            );
          })}
    </Box>
  );
};
