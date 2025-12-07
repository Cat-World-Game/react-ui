import type { DialogProps } from "@mui/material/Dialog";
import type { PropsWithChildren, ReactNode } from "react";

export interface ModalProps extends PropsWithChildren {
  open: boolean;
  onClose?: () => void;
  hideCloseButton?: boolean;
  title?: string;
  actions?: ReactNode | ReactNode[];
  env?: DialogProps["env"];
}
