import { AddCircleOutline, KeyboardArrowDown } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Input,
  MenuItem,
  Select,
  SelectChangeEvent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useCategoriesContext } from "../../contexts/CategoriesContext";
import { useListContext } from "../../contexts/ListContext";
import { getCategories } from "../../services/Categories";
import { addItem, getItems } from "../../services/List";
import { CategoriesType } from "../../types/allTypes";

export const InputItem = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { setList } = useListContext();
  const { categories, setCategories } = useCategoriesContext();
  const [selectValue, setSelectValue] = useState("");
  const [inputText, setInputText] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value as string);
  };

  useEffect(() => {
    const getAllCategories = async () => {
      setCategories(await getCategories());
    };

    getAllCategories();
  }, []);

  const addItemList = async () => {
    if (inputText !== "") {
      await addItem(inputText, selectValue);
      setInputText("");
      setSelectValue("");
      setList(await getItems());
    } else {
      alert("field empty");
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box
        width={smDown? '95%':"70%"}
        bgcolor={theme.palette.background.default}
        borderRadius={3}
        mb={3}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingX={2}
      >
        <Input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addItemList()}
          disableUnderline
          placeholder="Write new task..."
          sx={{
            fontSize: "1.2rem",
            flex: 1,
            paddingY: 1,
          }}
        />
        <Select
          value={selectValue !== "" ? selectValue : "no list"}
          onChange={handleChange}
          variant="standard"
          disableUnderline
          IconComponent={KeyboardArrowDown}
          sx={{
            ":hover": { background: "transparent" },
            textTransform: "capitalize",
            paddingX: 1,
            fontSize: "1.1rem",
          }}
          inputProps={{ icon: { color: theme.palette.text.primary } }}
        >
          <MenuItem value={"no list"}>No list</MenuItem>
          {categories.map((item: CategoriesType, index: number) => {
            return (
              <MenuItem
                key={index}
                value={item.category}
                sx={{ textTransform: "capitalize", fontSize: "1.1rem" }}
              >
                {item.category}
              </MenuItem>
            );
          })}
        </Select>

        <IconButton
          onClick={addItemList}
          sx={{
            color: theme.palette.text.primary,
          }}
        >
          <AddCircleOutline />
        </IconButton>
      </Box>
    </Box>
  );
};
