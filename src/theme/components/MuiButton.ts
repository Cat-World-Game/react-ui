import { alpha, type ThemeOptions } from "@mui/material/styles";
import { buttonClasses } from "@mui/material/Button";
import stylesToColorSvg from "../utils/stylesToColorSvg";

const MuiButton: ThemeOptions["components"] = {
  MuiButton: {
    defaultProps: {
      env: "hub",
    },
    styleOverrides: {
      root: {
        borderRadius: "8px",
      },
    },
    variants: [
      {
        props: { env: "play" },
        style: ({ theme }) => ({
          [`&.${buttonClasses.contained}`]: {
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
              color: theme.palette.play.text.disabled,
              ...stylesToColorSvg(theme.palette.play.text.disabled),
            },
          },
          [`&.${buttonClasses.text}`]: {
            color: theme.palette.play.text.secondary,
            "&:hover, &.Mui-focused": {
              color: theme.palette.play.text.primary,
            },
            "&.Mui-disabled": {
              color: theme.palette.play.text.disabled,
            },
          },
        }),
      },
      {
        props: { env: "hub" },
        style: ({ theme }) => ({
          [`&.${buttonClasses.contained}`]: {
            backgroundColor: theme.palette.hub.primary.main,
            color: theme.palette.hub.primary.contrastText,
            "&:hover": {
              backgroundColor: theme.palette.hub.primary.dark,
            },
            "&.Mui-disabled": {
              color: alpha(theme.palette.hub.primary.contrastText, 0.6),
              backgroundColor: theme.palette.hub.primary.light,
            },
          },
          [`&.${buttonClasses.outlined}`]: {
            borderColor: theme.palette.hub.primary.main,
            borderWidth: "2px",
            color: theme.palette.hub.primary.contrastText,
            "&:hover": {
              borderColor: theme.palette.hub.primary.dark,
            },
            "&.Mui-disabled": {
              borderColor: theme.palette.hub.primary.light,
              color: alpha(theme.palette.hub.primary.contrastText, 0.6),
            },
          },
          [`&.${buttonClasses.text}`]: {
            color: theme.palette.hub.text.primary,
            "&.Mui-disabled": {
              color: theme.palette.hub.text.disabled,
            },
          },
        }),
      },
    ],
  },
};

export default MuiButton;
