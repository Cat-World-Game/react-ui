import { type ThemeOptions } from "@mui/material";

const MuiCssBaseline: ThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: () => ({
      "*": {
        // scrollbarColor: `${theme.palette.base.secondary} transparent`,
        "&::-webkit-scrollbar": {
          width: "6px",
          height: "6px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          // background: theme.palette.base.secondary,
          borderRadius: "6px",
        },
      },
      body: {
        // backgroundColor: theme.palette.base.background,
        letterSpacing: "1px",
      },
    }),
  },
};

export default MuiCssBaseline;
