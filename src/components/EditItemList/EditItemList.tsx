import {
  AddCircleOutline,
  CancelOutlined,
  MoreVert,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  Input,
  Menu,
  MenuItem,
  Modal,
  Tooltip,
  useTheme,
  Zoom,
} from "@mui/material";
import { MouseEvent, useState } from "react";
import { useListContext } from "../../contexts/ListContext";
import { deleteItem, editItem, getItems } from "../../services/List";

interface IEditItemListProps {
  id: string;
}

export const EditItemList = ({ id }: IEditItemListProps) => {
  const theme = useTheme();

  const { setList } = useListContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openModal, setOpenModal] = useState(false);
  const [inputText, setInputText] = useState("");

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleModal = () => {
    setOpenModal(true);
    setAnchorEl(null);
  };

  const editItemList = async (id: string) => {
    if (inputText !== "") {
      editItem(inputText, id);
      setOpenModal(false);
      setInputText("");
      setAnchorEl(null);
      setList(await getItems());
    }
  };

  const deleteItemList = async (id: string) => {
    setAnchorEl(null);
    deleteItem(id);
    setList(await getItems());
  };

  return (
    <Box>
      <IconButton
        disableFocusRipple
        aria-disabled
        disableTouchRipple
        onClick={handleClick}
        color="primary"
      >
        <MoreVert aria-disabled />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleModal}>Edit</MenuItem>
        <MenuItem onClick={() => deleteItemList(id)}>Delete</MenuItem>
      </Menu>

      <Modal hideBackdrop open={openModal} sx={{ backdropFilter: "blur(5px)" }}>
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Input
            autoFocus
            placeholder="Write new value..."
            disableUnderline
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            sx={{
              fontSize: "1.1rem",
              width: "50%",
              paddingY: 1,
              paddingX: 2,
              backgroundColor: theme.palette.background.paper,
              border: `2px solid ${theme.palette.secondary.main}`,
              borderRadius: 5,
              mr: 1,
            }}
          />
          <Tooltip title="Add" TransitionComponent={Zoom}>
            <IconButton onClick={() => editItemList(id)}>
              <AddCircleOutline
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "3rem",
                  borderRadius: "50%",
                }}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title="Cancel" TransitionComponent={Zoom}>
            <IconButton onClick={() => setOpenModal(false)}>
              <CancelOutlined
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "3rem",
                  borderRadius: "50%",
                }}
              />
            </IconButton>
          </Tooltip>
        </Box>
      </Modal>
    </Box>
  );
};
