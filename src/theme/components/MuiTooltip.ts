import { type ThemeOptions } from "@mui/material/styles";

const MuiTooltip: ThemeOptions["components"] = {
  MuiTooltip: {
    styleOverrides: {
      tooltip: ({ theme }) => ({
        backgroundColor: theme.palette.play.primary.main,
        color: theme.palette.play.text.primary,
      }),
    },
  },
};

export default MuiTooltip;
