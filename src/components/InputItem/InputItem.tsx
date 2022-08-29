import { Box, Input, MenuItem, Select, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { getCategories } from "../../services/Categories";

export const InputItem = () => {
  const theme = useTheme();

  const [categories, setCategories] = useState([] as any);

  useEffect(() => {
    const getAllCategories = async () => {
      setCategories(await getCategories());
    };

    getAllCategories();
  }, []);

  console.log(categories);
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
        <Select>
          {categories.map((item: any, index: number) => {
            return (
              <MenuItem sx={{ textTransform: "capitalize" }}>
                {item.category}
              </MenuItem>
            );
          })}
        </Select>
      </Box>
    </Box>
  );
};
