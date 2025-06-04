import { dialogClasses } from "@mui/material/Dialog";
import { paperClasses } from "@mui/material/Paper";
import type { ThemeOptions } from "@mui/material/styles";

const MuiDialog: ThemeOptions["components"] = {
  MuiDialog: {
    defaultProps: {
      env: "hub",
    },
    variants: [
      {
        props: { env: "play" },
        style: ({ theme }) => ({
          [`&.${paperClasses.root}.${dialogClasses.paper}`]: {
            backgroundColor: theme.palette.play.background.paper,
          },
        }),
      },
    ],
  },
};

export default MuiDialog;
