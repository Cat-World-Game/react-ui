import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "../../icons/CloseIcon";
import type { ModalProps } from "./types";
import { StyledIconButton } from "./styles";

const Modal = ({
  open,
  onClose,
  title,
  hideCloseButton,
  children,
  actions,
  env,
}: ModalProps) => {
  const modalOpenTime = Date.now();

  const handleDialogClose = (
    _: unknown,
    reason: "backdropClick" | "escapeKeyDown"
  ) => {
    // NOTE: because stop propogation doesn't work clearly in pixi.js events,
    // modal will close immediatly without this condition
    if (Date.now() - modalOpenTime < 200 && reason === "backdropClick") return;
    if (
      hideCloseButton &&
      (reason === "backdropClick" || reason === "escapeKeyDown")
    ) {
      return;
    }
    onClose?.();
  };

  return (
    <Dialog
      open={open}
      onClose={handleDialogClose}
      env={env}
      slotProps={{ paper: { env } }}
    >
      {!hideCloseButton && (
        <StyledIconButton
          env={env}
          size="small"
          aria-label="close modal"
          onClick={onClose}
        >
          <CloseIcon fontSize="small" />
        </StyledIconButton>
      )}
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
};

export default Modal;
