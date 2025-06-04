import { alpha, type ThemeOptions } from "@mui/material/styles";
import stylesToColorSvg from "../utils/stylesToColorSvg";
import { iconButtonClasses } from "@mui/material/IconButton";

const MuiIconButton: ThemeOptions["components"] = {
  MuiIconButton: {
    defaultProps: {
      env: "hub",
    },
    // styleOverrides: {
    //   root: {
    //     borderRadius: "8px",
    //   },
    // },
    variants: [
      {
        props: { env: "play" },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.play.primary.light,
          ...stylesToColorSvg(theme.palette.play.text.secondary),
          "&:hover, &.Mui-focused": {
            backgroundColor: theme.palette.play.primary.main,
            ...stylesToColorSvg(theme.palette.play.text.primary),
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.play.primary.light,
            ...stylesToColorSvg(theme.palette.play.text.disabled),
          },
        }),
      },
      {
        props: { env: "hub" },
        style: ({ theme }) => ({
          color: theme.palette.hub.primary.main,
          ...stylesToColorSvg(theme.palette.hub.primary.main),
          "&:hover": {
            backgroundColor: alpha(theme.palette.hub.primary.main, 0.1),
            ...stylesToColorSvg(theme.palette.hub.primary.dark),
          },
          [`&.${iconButtonClasses.disabled}`]: {
            color: theme.palette.hub.primary.light,
            ...stylesToColorSvg(theme.palette.hub.primary.light),
          },
        }),
      },
    ],
  },
};

export default MuiIconButton;
