import type { ThemeOptions } from "@mui/material/styles";

const MuiPaper: ThemeOptions["components"] = {
  MuiPaper: {
    defaultProps: {
      env: "hub",
    },
    styleOverrides: {
      root: {
        borderRadius: "16px",
        backgroundImage: "unset",
      },
    },
    variants: [
      {
        props: { env: "play" },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.play.background.paper,
          boxShadow: "unset",
        }),
      },
      {
        props: { env: "hub" },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.hub.background.paper,
        }),
      },
    ],
  },
};

export default MuiPaper;
