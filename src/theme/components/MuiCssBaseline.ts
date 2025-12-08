import type { ThemeOptions } from "@mui/material/styles";

const isFirefox = typeof window === "undefined" ? false : navigator.userAgent.toLowerCase().includes("firefox");

const MuiCssBaseline: ThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: ( theme ) => ({
      "*": {
        // NOTE: if browser isn't firefox then it breaks styles below
        ...(isFirefox && {
          scrollbarColor: `${theme.palette.play.primary.main} transparent`,
        }),
        "&::-webkit-scrollbar": {
          width: "6px",
          height: "6px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          background: theme.palette.play.primary.main,
          borderRadius: "6px",
        },
      },
      body: {
        backgroundColor: theme.palette.hub.background.default,
        letterSpacing: "1px",
        lineHeight: 1,
      },
    }),
  },
};

export default MuiCssBaseline;
