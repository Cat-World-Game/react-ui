import { alpha, type ThemeOptions } from "@mui/material/styles";

const MuiLink: ThemeOptions["components"] = {
  MuiLink: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.success.main,
        textDecorationColor: alpha(theme.palette.success.main, 0.4),
        "&:hover": {
          textDecorationColor: theme.palette.success.main,
        },
      }),
    },
  },
};

export default MuiLink;
