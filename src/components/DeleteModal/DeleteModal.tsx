import { DeleteOutline } from "@mui/icons-material";
import { Button, IconButton, Modal, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useCategoriesContext } from "../../contexts/CategoriesContext";
import { deleteCategory, getCategories } from "../../services/Categories";

interface IDeleteModalProps {
  id: string;
}

export const DeleteModal = ({ id }: IDeleteModalProps) => {
  const theme = useTheme();

  const [openModal, setOpenModal] = useState(false);

  const { categories, setCategories } = useCategoriesContext();

  const deleteCategoryList = async () => {
    // await deleteCategory(id);
    // setCategories(await getCategories());
    console.log(id);
    setOpenModal(false);
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
          sx={{ backdropFilter: "blur(4px)" }}
        >
          <Box
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              bgcolor="#FFF"
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
                    backgroundColor: "#c50707",
                    color: "#FFF",
                    padding: 1,
                    borderRadius: 3,
                    mr: 3,
                    ":hover": {
                      color: "#000",
                    },
                  }}
                >
                  Only Category
                </Button>
                <Button
                  sx={{
                    backgroundColor: "#c50707",
                    color: "#FFF",
                    padding: 1,
                    borderRadius: 3,
                    ":hover": {
                      color: "#000",
                    },
                  }}
                >
                  Category and its items
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      )}
    </Box>
  );
};
