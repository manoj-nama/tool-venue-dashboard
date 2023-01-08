import React from "react";
import { Modal } from '@mui/material';

const ModalDialog = ({ open = false, onClose, children }) => {
  return (
    <Modal onClose={onClose} open={open}>
      {children}
    </Modal>
  )
};

export default ModalDialog;