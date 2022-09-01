import { Add, AddCircleOutline } from "@mui/icons-material";
import { Box, IconButton, Input, MenuItem, useTheme } from "@mui/material";
import { useState } from "react";
import { CirclePicker } from "react-color";
import { useCategoriesContext } from "../../contexts/CategoriesContext";
import { addCategory, getCategories } from "../../services/Categories";

export const CreateNewCategory = () => {
  const theme = useTheme();

  const { setCategories } = useCategoriesContext();

  const [inputText, setInputText] = useState("");
  const [colorPicker, setColorPicker] = useState("");
  const [openInput, setOpenInput] = useState(false);

  const handleInput = () => {
    openInput ? setOpenInput(false) : setOpenInput(true);
  };
  const createCategoryList = async () => {
    if (inputText !== "" && colorPicker !== "") {
      await addCategory(inputText, colorPicker);
      setCategories(await getCategories());
      setInputText("");
      setColorPicker("");
      setOpenInput(false);
    } else {
      alert("enter a name for the list and/or select a color");
    }
  };

  return (
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

      <Box display="flex" justifyContent="center" alignItems="center">
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
            visibility: openInput ? "visible" : "hidden",
            padding: 1,
            mt: 2,
            mb: 3,
            fontSize: "1.1rem",
            border: `1px solid ${theme.palette.background.default}`,
            borderRadius: 3,
            transition: "0.2s ease-in-out",
          }}
        />
        <IconButton
          onClick={createCategoryList}
          sx={{
            color: theme.palette.text.primary,
            height: openInput ? 50 : 0,
            opacity: openInput ? 1 : 0,
            transition: "0.2s ease-in-out",
            visibility: openInput ? "visible" : "hidden",
          }}
        >
          <AddCircleOutline fontSize="large" />
        </IconButton>
      </Box>
      <Box
        sx={{
          height: openInput ? 50 : 0,
          opacity: openInput ? 1 : 0,
          transition: "0.2s ease-in-out",
          visibility: openInput ? "visible" : "hidden",
        }}
      >
        <CirclePicker
          color={colorPicker}
          onChangeComplete={(e) => setColorPicker(e.hex)}
        />
      </Box>
    </Box>
  );
};
