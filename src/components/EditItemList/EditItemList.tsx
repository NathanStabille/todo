import {
  AddCircleOutline,
  CancelOutlined,
  Clear,
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

interface IEditItemListProps {
  id: string;
}

export const EditItemList = ({ id }: IEditItemListProps) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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

  const editItemList = () => {};

  return (
    <Box>
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
        <MenuItem onClick={handleModal}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>

      <Modal hideBackdrop open={openModal} sx={{ backdropFilter: "blur(5px)" }}>
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Input
            placeholder="Write new value..."
            disableUnderline
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
            <IconButton>
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
