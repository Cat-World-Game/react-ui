import type { ThemeOptions } from "@mui/material/styles";
import stylesToColorSvg from "../utils/stylesToColorSvg";
import { inputBaseClasses } from "@mui/material/InputBase";
import { filledInputClasses } from "@mui/material/FilledInput";

const MuiTextField: ThemeOptions["components"] = {
  MuiTextField: {
    defaultProps: {
      env: "hub",
      variant: "filled",
    },
    styleOverrides: {
      root: {
        [`& .${inputBaseClasses.input}`]: {
          padding: "8px 12px",
        },
        [`& .${filledInputClasses.root}`]: {
          borderRadius: "8px",
        },
        [`& .${filledInputClasses.underline}`]: {
          "&:before, &:after": {
            display: "none",
          },
        },
      },
    },
    variants: [
      {
        props: { size: "small" },
        style: {
          [`& .${inputBaseClasses.input}`]: {
            padding: "4px 8px 2px",
          },
        },
      },
      {
        props: { env: "play" },
        style: ({ theme }) => ({
          [`& .${filledInputClasses.root}`]: {
            backgroundColor: theme.palette.play.primary.light,
            color: theme.palette.play.text.secondary,
            ...stylesToColorSvg(theme.palette.play.text.secondary),
            "&:hover, &.Mui-focused": {
              backgroundColor: theme.palette.play.primary.main,
              color: theme.palette.play.text.primary,
              ...stylesToColorSvg(theme.palette.play.text.primary),
            },
            "&.Mui-disabled": {
              backgroundColor: theme.palette.play.primary.light,
              ...stylesToColorSvg(theme.palette.play.text.disabled),
            },
          },
        }),
      },
      {
        props: { env: "hub" },
        style: ({ theme }) => ({
          [`& .${filledInputClasses.root}`]: {
            boxShadow: "inset -2px 3px 3px -1px rgba(0,0,0,0.2)",
            backgroundColor: theme.palette.hub.background.default,
            "&:hover, &.Mui-focused, &.Mui-disabled": {
              backgroundColor: theme.palette.hub.background.default,
            },
          },
        }),
      },
    ],
  },
};

export default MuiTextField;
