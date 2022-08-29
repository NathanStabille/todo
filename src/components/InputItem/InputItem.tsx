import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Box,
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getCategories } from "../../services/Categories";

export const InputItem = () => {
  const theme = useTheme();

  const [categories, setCategories] = useState([] as any);
  const [selectValue, setSelectValue] = useState("");

  console.log(selectValue)

  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value as string);
  };

  useEffect(() => {
    const getAllCategories = async () => {
      setCategories(await getCategories());
    };

    getAllCategories();
  }, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box
        width="70%"
        bgcolor={theme.palette.background.default}
        borderRadius={3}
        mb={3}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingX={2}
      >
        <Input
          disableUnderline
          placeholder="Write new task..."
          sx={{
            fontSize: "1.5rem",
            flex: 1,
          }}
        />
        <Select
          value={selectValue}
          onChange={handleChange}
          variant="standard"
          disableUnderline
          sx={{
            ":hover": { background: "transparent" },
            textTransform: "capitalize",
            paddingX: 1,
            fontSize: "1.1rem",
          }}
          IconComponent={KeyboardArrowDown}
        >
          {categories.map((item: any, index: number) => {
            return (
              <MenuItem
                value={item.category}
                sx={{ textTransform: "capitalize", fontSize: "1.1rem" }}
              >
                {item.category}
              </MenuItem>
            );
          })}
        </Select>
      </Box>
    </Box>
  );
};
