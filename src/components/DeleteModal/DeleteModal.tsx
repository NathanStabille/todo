import { DeleteOutline } from "@mui/icons-material";
import { Button, IconButton, Modal, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useCategoriesContext } from "../../contexts/CategoriesContext";
import { useListContext } from "../../contexts/ListContext";
import { deleteCategory, getCategories } from "../../services/Categories";
import { deleteItem, getItems } from "../../services/List";

interface IDeleteModalProps {
  id: string;
}

export const DeleteModal = ({ id }: IDeleteModalProps) => {
  const theme = useTheme();

  const [openModal, setOpenModal] = useState(false);

  const { list, setList } = useListContext();
  const { setCategories } = useCategoriesContext();

  const deleteCategoryList = async () => {
    await deleteCategory(id);
    setCategories(await getCategories());
    setOpenModal(false);
  };

  const deleteAllItemsFromCategory = async () => {
    setOpenModal(false);
    list.map((item) => {
      if (item.category === id) {
        deleteItem(item.id);
      }
    });
    await deleteCategory(id);
    setCategories(await getCategories());
    setList(await getItems());
  };

  return (
    <Box>
      <IconButton
        onClick={() => setOpenModal(true)}
        disableRipple
        sx={{
          paddingX: 1,
          color: "#eb34345c",
          ":hover": {
            color: "#ff0000fc",
          },
        }}
      >
        <DeleteOutline />
      </IconButton>
      {openModal && (
        <Modal
          hideBackdrop
          open={openModal}
          sx={{ backdropFilter: "blur(5px)" }}
        >
          <Box
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              bgcolor={theme.palette.background.paper}
              border={`2px solid ${theme.palette.secondary.main}`}
              borderRadius={3}
              padding={3}
              display="flex"
              flexDirection="column"
            >
              <Typography fontSize="1.4rem">
                Want to delete comment the category or all items next to the
                category?
              </Typography>
              <Box textAlign="center" mt={3}>
                <Button
                  onClick={deleteCategoryList}
                  sx={{
                    fontSize: "1.1rem",
                    backgroundColor: "#c50707",
                    color: "#FFF",
                    padding: 1,
                    borderRadius: 3,
                    textTransform: "capitalize",

                    mr: 3,
                    ":hover": {
                      color: theme.palette.text.primary,
                    },
                  }}
                >
                  Only Category
                </Button>
                <Button
                  onClick={deleteAllItemsFromCategory}
                  sx={{
                    fontSize: "1.1rem",
                    backgroundColor: "#c50707",
                    color: "#FFF",
                    padding: 1,
                    borderRadius: 3,
                    textTransform: "capitalize",
                    mr: 3,
                    ":hover": {
                      color: theme.palette.text.primary,
                    },
                  }}
                >
                  Category and its items
                </Button>
                <Button
                  onClick={() => setOpenModal(false)}
                  sx={{
                    fontSize: "1.1rem",
                    borderRadius: 3,
                    padding: 1,
                    textTransform: "capitalize",
                    backgroundColor: theme.palette.background.default,
                  }}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      )}
    </Box>
  );
};
