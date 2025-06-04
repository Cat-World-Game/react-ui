import type { DialogProps } from "@mui/material/Dialog";
import type { PropsWithChildren } from "react";

export interface ModalProps extends PropsWithChildren {
  open: boolean;
  onClose?: () => void;
  hideCloseButton?: boolean;
  title?: string;
  actions?: React.ReactNode | React.ReactNode[];
  env?: DialogProps["env"];
}
